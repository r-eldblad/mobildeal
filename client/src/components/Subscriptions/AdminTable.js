import { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext'
import './AdminTable.css'

const AdminTable = (props) => {
    const { token } = useContext(LoginContext)
    if (token) {
        return (
            <>
                <table>
                    <thead>
                        <tr className="table-head-row">
                            <th className="priority-1">Operatör</th>
                            <th className="priority-2">Surfmängd</th>
                            <th className="priority-3">Bindningstid</th>
                            <th className="priority-4">Samtal</th>
                            <th className="priority-5">Sms</th>
                            <th className="priority-6">Pris</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.subscriptionsState.map((data) => {
                            return (
                                <tr key={data._id}>
                                    <td className="priority-1">
                                        <img
                                            src={`${process.env.REACT_APP_API_URL}${data.operator.operator_logo}`}
                                            alt={data.operator_name}
                                        />
                                    </td>
                                    <td className="priority-2">{data.surf_amount} GB</td>
                                    <td className="priority-3">{data.binding_time} mån</td>
                                    <td className="priority-4">
                                        {data.free_calls ? 'Fria' : 'Ej fria'}
                                    </td>
                                    <td className="priority-5">
                                        {data.free_sms ? 'Fria' : 'Ej fria'}
                                    </td>
                                    <td className="priority-6 price">{data.price} kr</td>
                                    <td className="actions">
                                        <button
                                            className="delete-btn"
                                            type="button"
                                            onClick={() => props.handleDelete(data._id)}
                                        >
                                            Ta bort
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    } else {
        return <div></div>
    }
}

export default AdminTable
