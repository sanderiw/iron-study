import TextAreaInput from "./TextAreaInput";
import DropdownMenu from "./DropdownMenu";
import TextInput from "./TextInput";
import RadioButton from "./RadioButton";

function CreateForm(props) {
    return (
        
        <form onSubmit={props.handleSubmit}>
            <DropdownMenu
                id="cardAuthor"
                label="Quem é você?"
                name="author"
                onChange={props.handleChange}
                value={props.state.author}
                error={props.validateFields(props.state)}
                submitFailed={props.state.submitFailed}
                renderValidationClass={props.renderValidationClass}
            />

            <TextInput
                id="cardUrl"
                label="Url"
                type="text"
                name="url"
                onChange={props.handleChange}
                value={props.state.url}
                error={props.validateFields(props.state)}
                submitFailed={props.state.submitFailed}
                renderValidationClass={props.renderValidationClass}
            />
            <RadioButton
                onChange={props.handleChange}
                name="type"
                type={props.state.type}
                error={props.validateFields(props.state)}
                submitFailed={props.state.submitFailed}
                renderValidationClass={props.renderValidationClass}
            />

            <TextAreaInput
                id="cardText"
                label="Conte mais"
                name="text"
                onChange={props.handleChange}
                value={props.state.text}
                error={props.validateFields(props.state)}
                submitFailed={props.state.submitFailed}
                renderValidationClass={props.renderValidationClass}
            />

            <TextInput
                id="cardTag"
                label="Tags"
                type="text"
                name="tag"
                onChange={props.handleChange}
                value={props.state.tag}
                error={props.validateFields(props.state)}
                submitFailed={props.state.submitFailed}
                renderValidationClass={props.renderValidationClass}
            />

            <button type="submit" className="btn btn-light m-4 mt-1">
                Enviar
            </button>
        </form>
    );
}

export default CreateForm;
