import './EditSubscription.css'

import { useContext, useState, useEffect, useCallback } from 'react'
import { SubscriptionsContext } from '../../contexts/SubscriptionsContext'
import { LoginContext } from '../../contexts/LoginContext'
import AdminTable from '../Subscriptions/AdminTable'

import axios from 'axios'

const EditSubscription = () => {
    const { subscriptions, setSubscriptions } = useContext(SubscriptionsContext)
    const { token } = useContext(LoginContext)

    const [operatorName, setOperatorName] = useState('')
    const [operatorLogo, setOperatorLogo] = useState('')
    const [affiliateLink, setAffiliateLink] = useState('')
    const [surfAmount, setSurfAmount] = useState()
    const [bindingTime, setBindingTime] = useState()
    const [freeSms, setFreeSms] = useState(false)
    const [freeCalls, setFreeCalls] = useState(false)
    const [price, setPrice] = useState()
    const [initialPrice, setInitialPrice] = useState()
    const [reducedPriceMonths, setReducedPriceMonths] = useState()
    const [currentUserId, setCurrentUserId] = useState('')

    const getAllSubscriptions = useCallback(() => {
        axios.get(process.env.REACT_APP_GET_ALL_SUBSCRIPTIONS_URL).then((response) => {
            // handle success
            setSubscriptions(response.data)
        })
    }, [setSubscriptions])

    useEffect(() => {
        getAllSubscriptions()
    }, [getAllSubscriptions])

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .get(process.env.REACT_APP_GET_CURRENT_USER_URL, {
                headers: { 'auth-token': token },
            })
            .then((response) => {
                setCurrentUserId(response.data)
                console.log(currentUserId._id)
            })

        const subscription = {
            operator_name: operatorName,
            operator_logo: operatorLogo,
            affiliate_link: affiliateLink,
            surf_amount: surfAmount,
            binding_time: bindingTime,
            free_sms: freeSms,
            free_calls: freeCalls,
            price: price,
            initial_price: initialPrice,
            reduced_price_months: reducedPriceMonths,
            adminId: currentUserId._id,
        }

        console.log(subscription)

        axios
            .post(process.env.REACT_APP_ADD_SUBSCRIPTION, subscription, {
                headers: { 'auth-token': token },
            })
            .then((response) => {
                getAllSubscriptions()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleDelete = (subscriptionId) => {
        axios
            .delete(process.env.REACT_APP_DELETE_SUBSCRIPTION + '/' + subscriptionId, {
                headers: { 'auth-token': token },
            })
            .then((res) => {
                const del = subscriptions.filter(
                    (subscription) => subscriptionId !== subscription._id
                )
                setSubscriptions(del)
                getAllSubscriptions()
            })
    }

    if (token) {
        return (
            <>
                {/* Form will go here */}
                <div className="add-subscription-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="operator">
                                Operat??r: <i>(Namnet p?? operat??ren)</i>
                            </label>
                            <input
                                type="text"
                                name="operator"
                                id="operator"
                                onChange={(e) => setOperatorName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="logo">
                                Logotyp: <i>(URL/s??kv??g till bild)</i>
                            </label>
                            <input
                                type="text"
                                name="logo"
                                id="logo"
                                onChange={(e) => setOperatorLogo(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>
                                Affiliate l??nk: <i>(URL)</i>
                            </label>
                            <input
                                type="text"
                                name="affiliate_link"
                                id="affiliate_link"
                                onChange={(e) => setAffiliateLink(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="binding_time">
                                Bindningstid: <i>(Nummer)</i>{' '}
                            </label>
                            <input
                                type="text"
                                name="binding_time"
                                id="binding_time"
                                onChange={(e) => setBindingTime(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="surf_amount">
                                Surfm??ngd: <i>(Nummer)</i>
                            </label>
                            <input
                                type="text"
                                name="surf_amount"
                                id="surf_amount"
                                onChange={(e) => setSurfAmount(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="free_sms">
                                Fria sms:<i> (L??mna tomt ifall fria sms)</i>
                            </label>
                            <input
                                type="text"
                                name="free_sms"
                                id="free_sms"
                                onChange={(e) => setFreeSms(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="free_calls">
                                Fria samtal: <i> (L??mna tomt ifall fria samtal)</i>
                            </label>
                            <input
                                type="text"
                                name="free_calls"
                                id="free_calls"
                                onChange={(e) => setFreeCalls(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="price">
                                Pris: <i> (Nummer)</i>
                            </label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="initial_price">
                                Ursprungliga priset:<i> (Nummer)</i>
                            </label>
                            <input
                                type="text"
                                name="initial_price"
                                id="initial_price"
                                onChange={(e) => setInitialPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="months_reduced_price">
                                M??nader / nedsatt pris: <i>(Nummer)</i>
                            </label>
                            <input
                                type="text"
                                name="months_reduced_price"
                                id="months_reduced_price"
                                onChange={(e) => setReducedPriceMonths(e.target.value)}
                            />
                        </div>

                        <div>
                            <button type="submit">L??gg till</button>
                        </div>
                    </form>
                </div>
                <AdminTable subscriptionsState={subscriptions} handleDelete={handleDelete} />
            </>
        )
    } else {
        return <div></div>
    }
}

export default EditSubscription
