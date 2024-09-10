import './LeftContainer.css'

function LeftContainer(props){
    return(
        <div className="create-task">{props.children}</div>
    )
}
export { LeftContainer }