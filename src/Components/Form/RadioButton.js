function RadioButton(props) {
    return (
        <div onChange={props.onChange}>
            <p>
                Qual o tipo do conteúdo?
            </p>
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="video"
                />
                <label class="form-check-label" for="inlineRadio1">
                    Video
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="artigo"
                />
                <label class="form-check-label" for="inlineRadio2">
                    Artigo
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="curso"
                />
                <label class="form-check-label" for="inlineRadio2">
                    Curso
                </label>
            </div>
        </div>
    );
}

export default RadioButton;
