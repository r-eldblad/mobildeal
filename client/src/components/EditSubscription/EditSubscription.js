import { useContext } from 'react'
import { SubscriptionsContext } from '../../contexts/SubscriptionsContext'
import Table from '../Subscriptions/Table'
import Pagination from '../Pagination/Pagination'

const EditSubscription = () => {
    const { subscriptions } = useContext(SubscriptionsContext)
    return (
        <>
            {/* Form will go here */}
            <div className="sort-container"></div>
            <Table subscriptionsState={subscriptions} />
            <Pagination />
        </>
    )
}

export default EditSubscription
