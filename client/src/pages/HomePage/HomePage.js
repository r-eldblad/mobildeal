import './HomePage.css'

import Sort from '../../components/Sort/Sort'
import Table from '../../components/Subscriptions/Table'
import Pagination from '../../components/Pagination/Pagination'

import { useContext, useEffect, useState } from 'react'
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

    const [currentPage, setCurrentPage] = useState(1)
    const [subscriptionsPerPage] = useState(6)

    const indexOfLastPost = currentPage * subscriptionsPerPage
    const indexOfFirstPost = indexOfLastPost - subscriptionsPerPage
    const currentSubscriptions = subscriptions.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    console.log(subscriptions.length)

    return (
        <>
            <h2 className="sub-header">Jämför mobilabonnemang</h2>
            <Sort />
            <Table subscriptionsState={currentSubscriptions} />
            <Pagination
                subscriptionsPerPage={subscriptionsPerPage}
                totalSubscriptions={subscriptions.length}
                paginate={paginate}
            />
        </>
    )
}

export default HomePage
