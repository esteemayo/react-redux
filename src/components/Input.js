const Input = ({ name, label, type = 'text', ...rest }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label><br />
            <input
                {...rest}
                type={type}
                name={name}
                id={name}
            />
        </div>
    );
};

export default Input;
