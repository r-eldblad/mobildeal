import './Sort.css'
import Dropdown from '../../utils/Dropdown/Dropdown'

const Sort = () => {
    /*   const { subscriptions } = useContext(SubscriptionsContext)
    const { setFilteredSubscriptions } = useContext(FilteredSubscriptionsContext)

    const [operators, setOperators] = useState('')
    const [sort, setSort] = useState('')
    const [surfAmount, setSurfAmount] = useState('')

    const handleOperatorChange = (event) => {
        setOperators(event.target.value)
        const filteredItems = subscriptions.filter((subscription) => {
            return subscription.operator_name.toLowerCase().includes(event.target.value)
        })

        setFilteredSubscriptions(filteredItems)

        console.log(filteredItems)
    }

    const handleSurfAmounts = (event) => {
        setSurfAmount(event.target.value)
        const filteredItems = subscriptions.filter((subscription) => {
            return subscription.surf_amount >= event.target.value
        })

        setFilteredSubscriptions(filteredItems)
    }

    const handleSort = (event) => {
        setSort(event.target.value)
        if (event.target.value === 'price') {
            const filteredItems = subscriptions.sort((a, b) => {
                return a.price - b.price
            })

            setFilteredSubscriptions(filteredItems)
        }
    }
 */
    return (
        <>
            <div className="sort-container">
                <Dropdown
                    className="dropdown"
                    label="Operatör"
                    options={[
                        { label: '', value: '' },
                        { label: 'Telia', value: 'telia' },
                        { label: 'Hallon', value: 'hallon' },
                        { label: 'Comviq', value: 'comviq' },
                        { label: 'Telenor', value: 'telenor' },
                        { label: 'Tele2', value: 'tele-2' },
                        { label: 'Vimla', value: 'vimla' },
                        { label: 'Tre', value: 'tre' },
                    ]}
                    /*       value={operators}
                    onChange={handleOperatorChange} */
                />

                <Dropdown
                    label="Surf"
                    options={[
                        { label: '', value: '' },
                        { label: '2GB+', value: '2' },
                        { label: '5GB+', value: '5' },
                        { label: '10GB+', value: '10' },
                        { label: '25GB+', value: '25' },
                        { label: '40GB+', value: '40' },
                        { label: '60GB+', value: '60' },
                    ]}
                    /*     value={surfAmount}
                    onChange={handleSurfAmounts} */
                />

                <Dropdown
                    label="Sortera efter"
                    options={[
                        { label: '', value: '' },
                        { label: 'Pris/månad', value: 'price' },
                    ]}
                    /*             value={sort}
                    onChange={handleSort} */
                />
            </div>
        </>
    )
}

export default Sort
