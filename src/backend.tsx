import { invoke } from '@tauri-apps/api/tauri';

// projectname:String,color:u32,due_date:u128,priority:u128,category:String,appdata:State<App>

export async function create_project(name:String,color:{r:number,g:number,b:number},due_date:number,priority:number,category:String){
    return await invoke('create_project', {
        projectname:name,
        color:0,
        dueDate:due_date,
        priority:priority,
        category:category,
      })

}
export async function get_project(projectname:String){
    return await invoke('get_project', {
        projectname:projectname,
      })

}