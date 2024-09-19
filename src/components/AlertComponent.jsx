/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"



function AlertComponent({type, message, delay}) {

    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = (ev) => {

        const alertElement = ev.target.parentElement.parentElement

        alertElement.classList.add("fadeAlert")
        
        setTimeout(() => {
            setShowAlert(false)
        }, 400)



    }

useEffect(() => {
    delay &&  setTimeout(() => {
        setShowAlert(false)
    }, 4000)


})


    return (
        
          (showAlert && <div className={`alert alert-${type}`}>
            <div className="alert-close">
                <span className="mr-1">{message}</span>
                <button style={{background: "transparent"}} onClick={closeAlert}>X</button>
            
            </div>
            </div>)
        
      )
}

export default AlertComponent