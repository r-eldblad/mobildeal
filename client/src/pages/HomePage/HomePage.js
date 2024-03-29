import './HomePage.css'
import '../../components/utils/Dropdown/Dropdown.css'

import UserTable from '../../components/ui/Tables/UserTable/UserTable'
import Sort from '../../components/ui/Sort/Sort'

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

    return (
        <>
            <h2 className="sub-header">Jämför mobilabonnemang</h2>
            <Sort />

            {subscriptions && subscriptions.length && (
                <UserTable subscriptionsState={subscriptions} />
            )}

            {subscriptions && !subscriptions.length && (
                <h1 className="notice">Det finns inga abonnemang upplagda.</h1>
            )}

            <p className="center">
                Mobildeal jämför mobilabonnemang mellan de operatörer som har affiliateprogram
                tillgängliga.
            </p>
        </>
    )
}

export default HomePage
