import { MdCheckBox } from "react-icons/md";

function CompleteIcon (props){
    const {className, onClick} = props
    return(
        <MdCheckBox 
            className = {className}
            onClick = {onClick}
        />
    )
}

export { CompleteIcon }