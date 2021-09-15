function TextInput(props) {
    return (
        <div className="m-4">
            <label htmlFor={props.id} className="form-label">
                {props.label}
            </label>
            <input
                type={props.type}
                className={`form-control ${
                    props.submitFailed
                        ? props.renderValidationClass(props.error[props.type])
                        : ""
                }`}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            />
            {props.hint ? <div className="form-text">{props.hint}</div> : null}
        </div>
    );
}

export default TextInput;
