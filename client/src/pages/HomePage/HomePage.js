import './HomePage.css'

import Sort from '../../components/Sort/Sort'
import Table from '../../components/Subscriptions/Table'
import Pagination from '../../components/Pagination/Pagination'

import { useContext, useEffect } from 'react'
import { SubscriptionsContext } from '../../contexts/SubscriptionsContext'
import axios from 'axios'

const HomePage = () => {
    const { subscriptions, setSubscriptions } = useContext(SubscriptionsContext)

    useEffect(() => {
        axios.get(process.env.REACT_APP_GET_ALL_SUBSCRIPTIONS_URL).then((response) => {
            // handle success
            setSubscriptions(response.data)
        })
    }, [setSubscriptions])

    console.log(subscriptions)

    return (
        <>
            <h2 className="sub-header">Jämför mobilabonnemang</h2>
            <Sort />
            <Table subscriptionsState={subscriptions} />
            <Pagination />
        </>
    )
}

export default HomePage
