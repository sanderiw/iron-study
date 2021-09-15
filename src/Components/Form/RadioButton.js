function RadioButton(props) {
    return (
        <div className="m-4">
            <p>
                Qual o tipo do conteúdo?
            </p>
            
            <div className="form-check form-check-inline">
                <input
                    className={`form-check-input ${
                    props.submitFailed
                        ? props.renderValidationClass(props.error[props.name])
                        : ""
                }`}
                    type="radio"
                    name={props.name}
                    id="inlineRadio1"
                    value="video"
                    onChange={props.onChange}
                    checked={props.type === "video"}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                    Video
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className={`form-check-input ${
                    props.submitFailed
                        ? props.renderValidationClass(props.error[props.name])
                        : ""
                }`}
                    type="radio"
                    name={props.name}
                    id="inlineRadio2"
                    value="artigo"
                    onChange={props.onChange}
                    checked={props.type === "artigo"}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                    Artigo
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className={`form-check-input ${
                    props.submitFailed
                        ? props.renderValidationClass(props.error[props.name])
                        : ""
                }`}
                    type="radio"
                    name={props.name}
                    id="inlineRadio3"
                    value="curso"
                    onChange={props.onChange}
                    checked={props.type === "curso"}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                    Curso
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className={`form-check-input ${
                    props.submitFailed
                        ? props.renderValidationClass(props.error[props.name])
                        : ""
                }`}
                    type="radio"
                    name={props.name}
                    id="inlineRadio4"
                    value="repositório"
                    onChange={props.onChange}
                    checked={props.type === "repositório" || props.type === "repositorio" }
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                    Repositório
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className={`form-check-input ${
                    props.submitFailed
                        ? props.renderValidationClass(props.error[props.name])
                        : ""
                }`}
                    type="radio"
                    name={props.name}
                    id="inlineRadio5"
                    value="outros"
                    onChange={props.onChange}
                    checked={props.type === "outros"}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                    Outros
                </label>
            </div>
            
        </div>
    );
}

export default RadioButton;
