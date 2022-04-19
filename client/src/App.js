import './App.css'
import Sort from './components/Sort/Sort'
import Table from './components/Subscriptions/Table'
import Pagination from './components/Pagination/Pagination'
const App = () => {
    return (
        <>
            <div className="container">
                <h1 className="header">Mobildeal.se</h1>
                <h2 className="sub-header">Jämför mobilabonnemang</h2>
                <Sort />
                <Table />
                <Pagination />
            </div>
        </>
    )
}

export default App
