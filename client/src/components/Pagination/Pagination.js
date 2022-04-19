import './Pagination.css'

const Pagination = () => {
    return (
        <div className="center">
            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#" className="active">
                    1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}

export default Pagination
