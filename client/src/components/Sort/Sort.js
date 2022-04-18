import './Sort.css'
import { useState } from 'react'
import Dropdown from './Dropdown'

const Sort = () => {
    const [operators, setOperators] = useState('operator')
    const [mobileNetworks, setMobileNetworks] = useState('mobile-network')
    const [surfAmounts, setSurfAmounts] = useState('surf-amount')
    const [sort, setSort] = useState('sort')

    const handleOperatorChange = (event) => {
        setOperators(event.target.value)
    }

    const handleMobileNetworks = (event) => {
        setMobileNetworks(event.target.value)
    }

    const handleSurfAmounts = (event) => {
        setSurfAmounts(event.target.value)
    }

    const handleSort = (event) => {
        setSort(event.target.value)
    }

    return (
        <div className="dropdown-menus">
            <Dropdown
                className="dropdown"
                label="Operatör"
                options={[
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
            <Dropdown
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
        </div>
    )
}

export default Sort
