const TextArea = ({ name, label, ...rest }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label><br />
            <textarea
                {...rest}
                id={name}
                name={name}
            ></textarea>
        </div>
    );
};

export default TextArea;
