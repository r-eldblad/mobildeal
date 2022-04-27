import './Pagination.css'

const Pagination = (props) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.totalSubscriptions / props.subscriptionsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="center">
            <div className="pagination">
                {pageNumbers.map((number) => (
                    <button key={number} onClick={() => props.paginate(number)}>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Pagination
