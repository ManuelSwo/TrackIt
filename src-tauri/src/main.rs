#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::sync::Mutex;

use tauri::State;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}



#[tauri::command]
fn get_project(projectname:String,appdata:State<'_,App>) -> Result<Project,String> { //appdata = mangae weil tauri 
    
    let a=appdata.projects.lock().unwrap();
    for i in 0..a.len() {
        let project=a.get(i).unwrap();
        if project.name == projectname {
            return Ok(project.clone());
        }
    }
    return Err("Project not found".into());
}

#[tauri::command]
fn create_project(projectname:String,color:u32,due_date:u64,priority:u64,category:String,appdata:State<App>) { 
    appdata.projects.lock().unwrap().push(Project {name:projectname.clone(), color:Color {b:0,g:0,r:0}, due_date:due_date, priotiy:priority, category:category.clone(), task:Vec::new()})
}



#[derive(serde::Serialize,Clone)]
struct Project {
    name: String,
    color: Color,
    due_date: u64,
    priotiy: u64,
    category: String,
    task: Vec<Task>,
}
#[derive(serde::Serialize,Clone)]
struct Task {
    id: u16,
    abhängigkeiten: Vec<i32>,
    zeitprognose: u64,
    difficulty: u8,
    date: u64,
    due_date : u64,
}
#[derive(serde::Serialize,Clone)]
struct Color{
    r: u8,
    g: u8,
    b: u8,
}
#[derive(Default)]
struct App{
    projects:Mutex<Vec<Project>>,
}

fn main() {
    tauri::Builder::default()
        .manage(App{projects:Mutex::new(Vec::new())}) // Speicher 
        .invoke_handler(tauri::generate_handler![greet,get_project,create_project])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
