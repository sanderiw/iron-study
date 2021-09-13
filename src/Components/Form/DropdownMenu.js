const students = [
    "Alexandre",
    "Anna",
    "Caio",
    "Filipe",
    "Guilherme",
    "Manoel",
    "Natalia",
    "Nicollas",
    "Nilton",
    "Pedro",
    "Raul",
    "Sander",
];

function DropdownMenu(props) {
    return (
        <div>
            <label for={props.id} class="form-label">
                {props.label}
            </label>
            <select
                id={props.id}
                className="form-select"
                aria-label="Select author from a menu"
                onChange={props.onChange}
                value={props.value}
                name={props.value}
            >
                <option selected>Selecione o autor</option>
                {students.map((name) => {
                    return <option value={name}>{name}</option>;
                })}
            </select>
        </div>
    );
}

export default DropdownMenu;
