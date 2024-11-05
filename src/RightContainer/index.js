import './RightContainer.css'

function RightContainer(props){
    return(
        <div className="task-list">{props.children}</div>
    )
}
export { RightContainer }