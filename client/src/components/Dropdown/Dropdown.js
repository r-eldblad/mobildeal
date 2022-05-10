import './Dropdown.css'

const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <div className="dropdowns">
            <label>
                {label}
                <select value={value} onChange={onChange}>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default Dropdown
