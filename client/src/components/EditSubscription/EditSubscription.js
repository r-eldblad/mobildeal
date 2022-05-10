import { useContext, useState } from 'react'
import { SubscriptionsContext } from '../../contexts/SubscriptionsContext'
import Table from '../Subscriptions/Table'
import Pagination from '../Pagination/Pagination'

const EditSubscription = () => {
    const { subscriptions } = useContext(SubscriptionsContext)

    const [currentPage, setCurrentPage] = useState(1)
    const [subscriptionsPerPage] = useState(6)

    const indexOfLastSubscription = currentPage * subscriptionsPerPage
    const indexOfFirstSubscription = indexOfLastSubscription - subscriptionsPerPage
    const currentSubscriptions = subscriptions.slice(
        indexOfFirstSubscription,
        indexOfLastSubscription
    )

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
