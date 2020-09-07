import React,{useContext} from "react";
import {Link} from "react-router-dom";
import AppContext from "../hooks/AppContext";

export default function HeaderLink (){
    const {todos} = useContext(AppContext);
    return (<header>
        <nav className='nav'>
            <Link className='nav-link' to="/">Todo list <span className="badge badge-info">{todos.length}</span></Link>
            <Link className='nav-link' to="/about">About</Link>
        </nav>
    </header>);
}