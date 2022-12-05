import { InputHTMLAttributes, LegacyRef, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import {create_project,get_project} from "./backend"


await create_project("abc",{r:1,g:2,b:76},0,1,"dei Mem");
get_project("abc").then((a)=>{console.log(a)}).catch((a)=>{console.log(a)});

export function CreateProject(){
   const ref_name=useRef<HTMLInputElement>();
   const ref_color=useRef<HTMLInputElement>();
   const ref_duedate=useRef<HTMLInputElement>();
   const ref_prio=useRef<HTMLSelectElement>();
   const ref_category=useRef<HTMLInputElement>();
  
 
  
  return (<div>
    {/* Name */}
    <input ref={ref_name as LegacyRef<HTMLInputElement>} type="text" id="fname" name="fname" placeholder="Name"></input> 
    <br/>
    {/* Color */}
    <input ref={ref_color as LegacyRef<HTMLInputElement>} type="color" id="fname" name="fname" placeholder="#ffffff"></input>
    <br/>
    {/* Due_Date */}
    <input ref={ref_duedate as LegacyRef<HTMLInputElement>} type="date" id="fname" name="fname" placeholder="MM/DD/YYYY"></input>
    <br/>
    {/* Priority */}

    <select name="prio" ref={ref_prio as LegacyRef<HTMLSelectElement>}>
      <option value="1">Super High</option>
      <option value="2">High</option>
      <option value="3">Medium</option>
      <option value="4">Low</option>
      <option value="5">Super Low</option>
    </select>
    <br/> 
    {/* Catergory */}
    <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" ref={ref_category as LegacyRef<HTMLInputElement>}/>
    <datalist id="ice-cream-flavors">
     <option value="Chocolate"/>
     {/* TODO: Add Categories */}
     <option value="Coconut"/>
     <option value="Mint"/>
     <option value="Strawberry"/>
      <option value="Vanilla"/>
    </datalist>  
    <br/>
    <button onClick={()=>{
      console.log(ref_name.current?.value);
      console.log(ref_color.current?.value);
      console.log(new Date(ref_duedate.current?.value+"").getTime());
      console.log(parseInt(ref_prio.current?.value+""));
      console.log(ref_category.current?.value);
      create_project(ref_name.current?.value+"",{b:2,r:2,g:2},new Date(ref_duedate.current?.value+"").getTime(),parseInt(ref_prio.current?.value+""),ref_category.current?.value+"");

      
    }}>Create</button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          


  </div>);
  
}



export function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }
  var a=2;
  return (
    <div className="bg-red-500 absolute top-0 bottom-0 left-0 right-0">
        {/* <div className="bg-red-500 absolute top-0 bottom-0 left-0 right-0"></div> */}
        <h1 className="font-bold text-stone-900">LEAPp</h1>
        <p>Hannah stinkt immer no</p>
        
    </div>
  );
}


