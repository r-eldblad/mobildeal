import './AdminTable.css'

const AdminTable = (props) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
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
                                    <img src={data.operator_logo} alt={data.operator_name} />
                                </td>
                                <td className="priority-2">{data.surf_amount} GB</td>
                                <td className="priority-3">{data.binding_time} mån</td>
                                <td className="priority-4">
                                    {data.free_calls ? 'Fria' : 'Ej fria'}
                                </td>
                                <td className="priority-5">{data.free_sms ? 'Fria' : 'Ej fria'}</td>
                                <td className="priority-6 price">{data.price} kr</td>
                                <td className="actions">
                                    <button className="edit-btn" type="button">
                                        Ändra
                                    </button>
                                    <button className="delete-btn" type="button">
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
}

export default AdminTable
