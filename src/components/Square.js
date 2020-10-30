import React from 'react';

function Square({ colour, up, down, left, right, onClick }) {

    const divstyle = {
        borderBottom: down ? "25px solid green" : "25px solid transparent",
        borderTop: up ? "25px solid #f00" : "25px solid transparent",
        borderLeft: left ? "25px solid yellow" : "25px solid transparent",
        borderRight: right ? "25px solid blue" : "25px solid transparent"
    };


    return (
        <div className="square" onClick={() => console.log("square")}>
            <div className="triangle" style={divstyle}></div>
        </div>
    )
}

export default Square;