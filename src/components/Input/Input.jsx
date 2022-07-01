import './input.css';

export const Input = ({ labelText, value, onChange, placeholder }) => {
    return (
        <div className="input-block">
            <label htmlFor="amount-input">{labelText}</label>
            <input
                type="text"
                id="amount-input"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};
