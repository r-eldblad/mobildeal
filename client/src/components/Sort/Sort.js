import './Sort.css'
import Dropdown from '../Dropdown/Dropdown'

import { useContext, useState } from 'react'
import { SubscriptionsContext } from '../../contexts/SubscriptionsContext'
import { FilteredSubscriptionsContext } from '../../contexts/FilteredSubscriptionsContext'

const Sort = () => {
    const { subscriptions } = useContext(SubscriptionsContext)
    const { setFilteredSubscriptions } = useContext(FilteredSubscriptionsContext)

    const [operators, setOperators] = useState('')

    const handleOperatorChange = (event) => {
        setOperators(event.target.value)
        const filteredItems = subscriptions.filter((subscription) => {
            return subscription.operator_name.toLowerCase().includes(event.target.value)
        })

        setFilteredSubscriptions(filteredItems)
    }

    /*     const handleMobileNetworks = (event) => {
        setMobileNetworks(event.target.value)
    }

    const handleSurfAmounts = (event) => {
        setSurfAmounts(event.target.value)
    }

    const handleSort = (event) => {
        setSort(event.target.value)
    }

    // Checkboxes handle functions

    const handleSaveSurfChanged = () => {
        setSaveSurfChecked(!saveSurfChecked)
    }

    const handleEmbeddedSimChanged = () => {
        setEmbeddedSimChecked(!embeddedSimChecked)
    }

    const handleFreeSmsChanged = () => {
        setFreeSmsChecked(!freeSmsChecked)
    }

    const handleFreeCallsChanged = () => {
        setFreeCallsChecked(!freeCallsChecked)
    } */

    return (
        <>
            <div className="sort-container">
                <Dropdown
                    className="dropdown"
                    label="Operatör"
                    options={[
                        { label: '', value: '' },
                        { label: 'Telia', value: 'telia' },
                        { label: 'Hallon', value: 'hallon' },
                        { label: 'Comviq', value: 'comviq' },
                        { label: 'Telenor', value: 'telenor' },
                        { label: 'Tele2', value: 'tele-2' },
                        { label: 'Vimla', value: 'vimla' },
                        { label: 'Tre', value: 'tre' },
                    ]}
                    value={operators}
                    onChange={handleOperatorChange}
                />
            </div>
            {/*  <Dropdown
                    label="Mobilnät"
                    options={[
                        { label: 'Telia', value: 'telia' },
                        { label: 'Telenor', value: 'telenor' },
                        { label: 'Tele2', value: 'tele-2' },
                        { label: 'Tre', value: 'tre' },
                    ]}
                    value={mobileNetworks}
                    onChange={handleMobileNetworks}
                />
                <Dropdown
                    label="Surf"
                    options={[
                        { label: '2GB+', value: '2-gb' },
                        { label: '5GB+', value: '5-gb' },
                        { label: '10GB+', value: '10-gb' },
                        { label: '25GB+', value: '25-gb' },
                        { label: '40GB+', value: '40-gb' },
                        { label: '60GB+', value: '60-gb' },
                    ]}
                    value={surfAmounts}
                    onChange={handleSurfAmounts}
                />

                <Dropdown
                    label="Sortera efter"
                    options={[
                        { label: 'Pris/månad', value: 'price' },
                        { label: 'Surf', value: 'surf-amount' },
                    ]}
                    value={sort}
                    onChange={handleSort}
                />

                <div className="checkboxes">
                    <Checkbox
                        label="Spara surf"
                        value={saveSurfChecked}
                        onChange={handleSaveSurfChanged}
                    />
                    <Checkbox
                        label="E-sim"
                        value={embeddedSimChecked}
                        onChange={handleEmbeddedSimChanged}
                    />
                    <Checkbox
                        label="Fria sms"
                        value={freeSmsChecked}
                        onChange={handleFreeSmsChanged}
                    />
                    <Checkbox
                        label="Fria samtal"
                        value={freeCallsChecked}
                        onChange={handleFreeCallsChanged}
                    />
                </div>
            </div> */}
        </>
    )
}

export default Sort
