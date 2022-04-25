import './Pagination.css'

const Pagination = () => {
    return (
        <div className="center">
            <div className="pagination">
                <button href="#">&laquo;</button>
                <button href="#" className="active">
                    1
                </button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>&raquo;</button>
            </div>
        </div>
    )
}

export default Pagination
