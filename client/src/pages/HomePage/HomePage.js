import './HomePage.css'

import Sort from '../../components/Sort/Sort'
import Table from '../../components/Subscriptions/Table'
import Pagination from '../../components/Pagination/Pagination'

const HomePage = () => {
    return (
        <>
            <h2 className="sub-header">Jämför mobilabonnemang</h2>
            <Sort />
            <Table />
            <Pagination />
        </>
    )
}

export default HomePage
