import './CreateToDoButton.css'

function CreateToDoButton(){
    return(
        <button className="CreatedToDoButton"
        onClick={
            (event)=>{
                console.log('Create Task Button clicked')
                console.log(event)
            }
        }
        >Create Task</button>
    )
}
export { CreateToDoButton }