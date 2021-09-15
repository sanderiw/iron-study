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
                        ? props.renderValidationClass(props.error[props.name])
                        : ""
                }`}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            />
            <div class="invalid-feedback">
                Por favor, preencha uma tag
            </div>
        </div>
    );
}

export default TextInput;
