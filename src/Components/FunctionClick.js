import React from 'react'

function FunctionClick() {

function clickHanler(){
    console.log("butoon clicked")
}

    return (
        <div>
            
            
            <button onClick = {clickHanler} > click </button>
            
        </div>
    )
}

export default FunctionClick
