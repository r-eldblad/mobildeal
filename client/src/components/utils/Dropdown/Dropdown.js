import { Box } from '@mui/material'
import './Dropdown.css'

const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <Box sx={{ width: 320 }}>
            <label>
                <p className="label">{label}</p>
                <select value={value} onChange={onChange}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        </Box>
    )
}

export default Dropdown
