import PropTypes from 'prop-types';
import './CreateToDoButton.css';

function CreateToDoButton({ setOpenModal }) {
    return (
        <button 
            className="CreateToDoButton"
            onClick={() => setOpenModal(prevState => !prevState)}
            aria-label="Create Task"
        >
            Create Task
        </button>
    );
}

CreateToDoButton.propTypes = {
    setOpenModal: PropTypes.func.isRequired,
};

export { CreateToDoButton };