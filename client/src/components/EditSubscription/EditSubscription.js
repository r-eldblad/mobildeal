import { useContext, useState } from 'react'
import { SubscriptionsContext } from '../../contexts/SubscriptionsContext'
import Table from '../Subscriptions/Table'
import Pagination from '../Pagination/Pagination'

const EditSubscription = () => {
    const { subscriptions } = useContext(SubscriptionsContext)

    const [currentPage, setCurrentPage] = useState(1)
    const [subscriptionsPerPage] = useState(6)

    const indexOfLastPost = currentPage * subscriptionsPerPage
    const indexOfFirstPost = indexOfLastPost - subscriptionsPerPage
    const currentSubscriptions = subscriptions.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    console.log(subscriptions.length)

    return (
        <>
            {/* Form will go here */}
            <div className="sort-container"></div>
            <Table subscriptionsState={currentSubscriptions} />
            <Pagination
                subscriptionsPerPage={subscriptionsPerPage}
                totalSubscriptions={subscriptions.length}
                paginate={paginate}
            />
        </>
    )
}

export default EditSubscription
