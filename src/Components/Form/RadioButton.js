function RadioButton(props) {
    return (
        <div className="m-4">
            <p>
                Qual o tipo do conteúdo?
            </p>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name={props.name}
                    id="inlineRadio1"
                    value="video"
                    onChange={props.onChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                    Video
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name={props.name}
                    id="inlineRadio2"
                    value="artigo"
                    onChange={props.onChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                    Artigo
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name={props.name}
                    id="inlineRadio3"
                    value="curso"
                    onChange={props.onChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                    Curso
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name={props.name}
                    id="inlineRadio4"
                    value="repositorio"
                    onChange={props.onChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                    Repositório
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name={props.name}
                    id="inlineRadio5"
                    value="outros"
                    onChange={props.onChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                    Outros
                </label>
            </div>
        </div>
    );
}

export default RadioButton;
