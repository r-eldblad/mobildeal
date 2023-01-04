import { OperatorsContext } from '../../../contexts/OperatorsContext'
import { useContext } from 'react'

const ChooseOperatorDropdown = ({ value, onChange }) => {
    const { operators } = useContext(OperatorsContext)
    if (operators)
        return (
            <div className="dropdowns">
                <select value={value} onChange={onChange}>
                    <option></option>
                    {operators.map((operator) => (
                        <option key={operator._id} value={operator.operator_name}>
                            {operator.operator_name}
                        </option>
                    ))}
                </select>
            </div>
        )
}

export default ChooseOperatorDropdown
