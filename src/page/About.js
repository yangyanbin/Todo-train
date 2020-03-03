import React from "react";

export default function About(){
    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">Todo List</h5>
                <p className="card-text">react+Es6+webpack实现的简单的todo list 功能，使用了react中props，state，router，组件等概念，通过es6编码，通过webpack的babel-loader转换为浏览器支持的写法</p>
            </div>
        </div>
    );
}