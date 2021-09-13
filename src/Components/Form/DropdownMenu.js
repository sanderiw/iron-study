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
        <div className="m-4">
            <label htmlFor={props.id} className="form-label">
                {props.label}
            </label>
            <select
                id={props.id}
                className="form-select"
                aria-label="Select author from a menu"
                onChange={props.onChange}
                value={props.value}
                name={props.name}
            >
                <option defaultValue>Selecione o autor</option>
                {students.map((name) => {
                    return <option key={name} value={name}>{name}</option>;
                })}
            </select>
        </div>
    );
}

export default DropdownMenu;
