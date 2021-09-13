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
            />

            <TextInput
                id="cardUrl"
                label="Url"
                type="text"
                name="url"
                onChange={props.handleChange}
                value={props.state.url}
            />
            <RadioButton 
                onChange={props.handleChange}
                name="type"
            />

            <TextAreaInput
                id="cardText"
                label="Conte mais"
                name="text"
                onChange={props.handleChange}
                value={props.state.text}
            />

            <TextInput
                id="cardTag"
                label="Tags"
                type="text"
                name="tag"
                onChange={props.handleChange}
                value={props.state.tag}
            />

            <button type="submit" className="btn btn-light m-4">
                Enviar
            </button>
        </form>
    );
}

export default CreateForm;
