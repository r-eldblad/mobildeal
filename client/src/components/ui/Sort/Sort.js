import './Sort.css'
import Dropdown from '../../utils/Dropdown/Dropdown'
import { useCallback, useContext, useEffect, useState } from 'react'
import { SubscriptionsContext } from '../../../contexts/SubscriptionsContext'
import axios from 'axios'

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

    const { setSubscriptions } = useContext(SubscriptionsContext)

    const [operator, setOperator] = useState('')

    const handleOperatorChange = (event) => {
        setOperator(event.target.value)
    }

    useEffect(() => {
        if (operator) {
            axios({
                method: 'post',
                url: 'http://localhost:8080/api/operators/findSubscriptionsByOperatorName',
                headers: {},
                data: {
                    operatorName: operator,
                },
            }).then((response) => {
                setSubscriptions(response.data.subscriptions)
                setOperator(response.data.operator_name)
            })
        }
    }, [operator])

    return (
        <>
            <div className="sort-container">
                <Dropdown
                    className="dropdown"
                    label="Operatör"
                    options={[
                        { label: '', value: '' },
                        { label: 'Telia', value: 'Telia' },
                        { label: 'Hallon', value: 'Hallon' },
                        { label: 'Comviq', value: 'Comviq' },
                        { label: 'Telenor', value: 'Telenor' },
                        { label: 'Tele2', value: 'Tele2' },
                        { label: 'Vimla', value: 'Vimla' },
                        { label: 'Tre', value: 'Tre' },
                    ]}
                    value={operator}
                    onChange={handleOperatorChange}
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
