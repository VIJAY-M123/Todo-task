import React from "react";
import Navbar from "./Navbar";
import { Routes ,Route} from "react-router-dom";
import TodoList from "../Todo List";

export default function Index(props){
    

    return(
        <div>
            <Navbar/>
            <Routes>
                
                <Route path="/todo" element={<TodoList/>}/>
            </Routes>

        </div>
    )
}