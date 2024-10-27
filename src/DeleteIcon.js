import { MdDeleteForever } from "react-icons/md";

function DeleteIcon (props){
    const {className, onClick} = props
    return(
        <MdDeleteForever 
            className = {className}
            onClick = {onClick}
        />
    )
}

export { DeleteIcon }