import React, { useState } from 'react';
import calculator from '../calculator';

export default function BusinessROICalculator({setResult}) {
  const [businesses, setBusinesses] = useState([])
  const [addBusinessError, setAddBusinessError] = useState()

  const getBusiness = (name) => businesses.find((item) => item.name === name)

  const addBusiness = (event) => {
    event.preventDefault()
    const name = event.target.businessName.value

    if (getBusiness(name)) {
      setAddBusinessError(`${name} is already added.`)
      return
    }

    const newBusiness = {
      name,
      kpi: {
        grossProfit: 0,
        netProfit: 0,
        marketingInvestment: 0,
        LTV: 0,
        newCustomersAcquired: 0,
      }
    }  
    
    setBusinesses([...businesses, newBusiness])
  }

  const onInputChanged = (event) => {
    const business = getBusiness(event.target.form.name)
    const field = event.target.name
    const value = Number(event.target.value)

    const newBusinesses = businesses.map((item) => {
      if (item.name === business.name) {
        return {
          name: business.name,
          kpi: { ...business.kpi, [field]: value }
        }
      }

      return item
    })

    setBusinesses(newBusinesses)
  }

  const calculateResult = () => {
    setResult(
      businesses.map((business) => ({
        name: business.name,
        result: calculator.calculateBusiness(business.kpi)
      }))
    )
  }

  return (
    <div>
      <form onSubmit={addBusiness}>
        <label htmlFor="businessName">
          Name

          <input
            type="text"
            id="businessName"
            name="businessName"
            className={addBusinessError ? 'has-error' : ''}
            required
            onChange={() => setAddBusinessError(null)} />
        </label>

        {addBusinessError && (
          <span className="input-error-message">{addBusinessError}</span>
        )}

        <button type="submit">Add business</button>
      </form>

      {businesses.map((business, i) => (
        <form key={i} name={business.name} onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="grossProfit">
            Gross profit

            <input
              type="number"
              id="grossProfit"
              name="grossProfit"
              value={business.kpi.grossProfit}
              onChange={onInputChanged} />
          </label>

          <label htmlFor="netProfit">
            Net profit

            <input
              type="number"
              id="netProfit"
              name="netProfit"
              value={business.kpi.netProfit}
              onChange={onInputChanged} />
          </label>

          <label htmlFor="marketingInvestment">
            Marketing investment

            <input
              type="number"
              id="marketingInvestment"
              name="marketingInvestment"
              value={business.kpi.marketingInvestment}
              onChange={onInputChanged} />
          </label>
        </form>
      ))}

      <button type="button">Calculate ROI</button>
    </div>
  )
}