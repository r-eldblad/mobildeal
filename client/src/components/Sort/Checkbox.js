import './Checkbox.css'

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label className="checkbox">
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    )
}

export default Checkbox
