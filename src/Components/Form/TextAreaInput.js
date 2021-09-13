function TextAreaInput(props) {
    return (
        <div className="mb-3">
            <label for={props.id} className="form-label">
                {props.label}
            </label>
            <textarea
                className="form-control"
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
