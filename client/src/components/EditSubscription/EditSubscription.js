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

    if (token) {
        return (
            <>
                {/* Form will go here */}
                <div className="sort-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label htmlFor="operator">Operatör: </label>
                                <input
                                    type="text"
                                    name="operator"
                                    id="operator"
                                    onChange={(e) => setOperatorName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="logo">Logotyp: </label>
                                <input
                                    type="text"
                                    name="logo"
                                    id="logo"
                                    onChange={(e) => setOperatorLogo(e.target.value)}
                                />
                            </div>

                            <div>
                                <label>Affiliate länk: </label>
                                <input
                                    type="text"
                                    name="affiliate_link"
                                    id="affiliate_link"
                                    onChange={(e) => setAffiliateLink(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="binding_time">Bindningstid: </label>
                                <input
                                    type="text"
                                    name="binding_time"
                                    id="binding_time"
                                    onChange={(e) => setBindingTime(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="surf_amount">Surfmängd: </label>
                                <input
                                    type="text"
                                    name="surf_amount"
                                    id="surf_amount"
                                    onChange={(e) => setSurfAmount(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="free_sms">Fria sms: </label>
                                <input
                                    type="text"
                                    name="free_sms"
                                    id="free_sms"
                                    onChange={(e) => setFreeSms(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="free_calls">Fria samtal: </label>
                                <input
                                    type="text"
                                    name="free_calls"
                                    id="free_calls"
                                    onChange={(e) => setFreeCalls(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="price">Pris: </label>
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="initial_price">Ursprungliga priset: </label>
                                <input
                                    type="text"
                                    name="initial_price"
                                    id="initial_price"
                                    onChange={(e) => setInitialPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="months_reduced_price">
                                    Månader / nedsatt pris:{' '}
                                </label>
                                <input
                                    type="text"
                                    name="months_reduced_price"
                                    id="months_reduced_price"
                                    onChange={(e) => setReducedPriceMonths(e.target.value)}
                                />
                            </div>

                            <div className="center">
                                <button type="submit">Lägg till</button>
                            </div>
                        </div>
                    </form>
                </div>
                <AdminTable subscriptionsState={subscriptions} />
            </>
        )
    } else {
        return <div></div>
    }
}

export default EditSubscription
