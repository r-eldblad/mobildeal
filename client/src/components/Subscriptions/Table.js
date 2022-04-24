import './Table.css'

const Table = (props) => {
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
                    {props.subscriptionsState
                        .reverse()
                        .slice(0, 6)
                        .map((data) => {
                            return (
                                <>
                                    <tr key={data._id}>
                                        <td className="priority-1">{data.operator_name}</td>
                                        <td className="priority-2">{data.surf_amount} GB</td>
                                        <td className="priority-3">{data.binding_time} mån</td>
                                        <td className="priority-4">
                                            {data.free_calls ? 'Fria' : 'Ej fria'}
                                        </td>
                                        <td className="priority-5">
                                            {data.free_sms ? 'Fria' : 'Ej fria'}
                                        </td>
                                        <td className="priority-6">{data.price} kr</td>
                                        <td>
                                            <button className="read-more" type="button">
                                                Läs mer
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}

export default Table
