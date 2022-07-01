import './button.css';

export const Button = ({ buttonLabel, id, onClick, isActive }) => {
    return (
        <button
            className="button"
            id={id}
            onClick={onClick}
            data-active={isActive}
        >
            {buttonLabel}
        </button>
    );
};
