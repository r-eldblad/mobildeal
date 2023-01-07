import './Sort.css'
import Dropdown from '../../utils/Dropdown/Dropdown'
import { useContext, useEffect, useState } from 'react'
import { SubscriptionsContext } from '../../../contexts/SubscriptionsContext'
import axios from 'axios'
import { Slider } from '@mui/material'
import { Box } from '@mui/system'

const Sort = () => {
    const { setSubscriptions } = useContext(SubscriptionsContext)
    const [operator, setOperator] = useState('')
    const [surfAmount, setSurfAmount] = useState('')

    const handleOperatorChange = (event) => {
        setOperator(event.target.value)
    }

    const handleSliderChange = (event) => {
        setSurfAmount(event.target.value)
    }

    useEffect(() => {
        if (operator) {
            axios({
                method: 'post',
                url: 'http://localhost:8080/api/operators/findSubscriptionsByOperatorName',
                headers: {},
                data: {
                    operatorName: operator,
                },
            }).then((response) => {
                setSubscriptions(response.data.subscriptions)
                setOperator(response.data.operator_name)
            })
        }

        if (surfAmount) {
            axios({
                method: 'post',
                url: 'http://localhost:8080/api/operators/sortSubscriptionsBySurfAmount',
                headers: {},
                data: {
                    surfAmount: surfAmount,
                },
            }).then((response) => {
                setSubscriptions(response.data)
                console.log(response.data)
            })
        }
    }, [operator, surfAmount])

    return (
        <>
            <div className="sort-container">
                <label>
                    <p className="label">Surf</p>
                    <Box sx={{ width: 320, padding: 1, margin: 2 }}>
                        <Slider
                            aria-label="Surf Amount"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={10}
                            max={130}
                            onChange={handleSliderChange}
                        />
                    </Box>
                </label>
                <Dropdown
                    className="dropdown"
                    label="Operatör"
                    options={[
                        { label: '', value: '' },
                        { label: 'Telia', value: 'Telia' },
                        { label: 'Hallon', value: 'Hallon' },
                        { label: 'Comviq', value: 'Comviq' },
                        { label: 'Telenor', value: 'Telenor' },
                        { label: 'Tele2', value: 'Tele2' },
                        { label: 'Vimla', value: 'Vimla' },
                        { label: 'Tre', value: 'Tre' },
                    ]}
                    value={operator}
                    onChange={handleOperatorChange}
                />
            </div>
        </>
    )
}

export default Sort
