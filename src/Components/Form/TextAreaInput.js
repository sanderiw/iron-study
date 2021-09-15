function TextAreaInput(props) {
    return (
        <div className="m-4">
            <label htmlFor={props.id} className="form-label">
                {props.label}
            </label>
            <textarea
                className={`form-control ${
                    props.submitFailed
                        ? props.renderValidationClass(props.error[props.name])
                        : ""
                }`}
                id={props.id}
                rows="3"
                placeholder="Por que vc está compartilhando esse conteúdo?"
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            ></textarea>
        </div>
    );
}

export default TextAreaInput;
