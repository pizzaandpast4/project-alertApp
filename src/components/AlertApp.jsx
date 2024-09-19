import AlertComponent from "./AlertComponent";



function AlertApp() {

    return (

        <div>
        <AlertComponent type={"danger"} message={"Great Success"} />
        <AlertComponent type={"warning"} message={"We have a problem"} delay="true" />
        </div>
    )
       
        
    
}

export default AlertApp;