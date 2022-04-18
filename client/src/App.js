import './App.css'
import Sort from './components/Sort/Sort'
import Table from './components/Subscriptions/Table'
const App = () => {
    return (
        <>
            <div className="container">
                <h1 className="header">Mobildeal.se</h1>
                <h2 className="sub-header">Jämför mobilabonnemang</h2>
                <Sort />
                <Table />
            </div>
        </>
    )
}

export default App
