import './HomePage.css'
import '../../components/Dropdown/Dropdown.css'

import Table from '../../components/Subscriptions/Table'
import Sort from '../../components/Sort/Sort'

import { useContext, useEffect, useState } from 'react'
import { SubscriptionsContext } from '../../contexts/SubscriptionsContext'
import { FilteredSubscriptionsContext } from '../../contexts/FilteredSubscriptionsContext'
import axios from 'axios'

const HomePage = () => {
    const { subscriptions, setSubscriptions } = useContext(SubscriptionsContext)
    const { filteredSubscriptions, setFilteredSubscriptions } = useContext(
        FilteredSubscriptionsContext
    )

    useEffect(() => {
        axios.get(process.env.REACT_APP_GET_ALL_SUBSCRIPTIONS_URL).then((response) => {
            // handle success
            setSubscriptions(response.data)
        })
    }, [setSubscriptions])

    return (
        <>
            <h2 className="sub-header">Jämför mobilabonnemang</h2>

            <Sort />

            {/* <Sort /> */}
            <Table
                subscriptionsState={subscriptions}
                filteredSubscriptions={filteredSubscriptions}
            />
        </>
    )
}

export default HomePage
