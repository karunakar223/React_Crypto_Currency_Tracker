// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const res = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const data = await res.json()

    const updatedData = data.map(each => ({
      id: each.id,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyName: each.currency_name,
      currencyLogo: each.currency_logo,
    }))

    this.setState({currenciesList: updatedData, isLoading: false})
  }

  render() {
    const {currenciesList, isLoading} = this.state

    return (
      <div className="bg-container" data-testid="loader">
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          <CryptocurrenciesList currenciesList={currenciesList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
