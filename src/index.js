import React from "react"
import Welcome from "./containers/Welcome"
import ReactDOM from "react-dom"


const AppContainer = () => {
    return (
        <div> 
            
            <Welcome />
        
        </div>

    )
}




ReactDOM.render(<AppContainer />, document.querySelector('#root'))






