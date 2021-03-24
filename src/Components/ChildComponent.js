import React from 'react'

function ChildComponent(props) {

    
    return (
        <div>
            <button onClick ={ () => props.greetHandler("childddd")}>Greet</button>
        </div>
    )
}

export default ChildComponent
