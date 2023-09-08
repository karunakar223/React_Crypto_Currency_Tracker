// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderHeader = () => (
    <div className="box-header">
      <p className="coin-type">Coin Type</p>
      <div className="usd-euro-con">
        <p className="usd-coins">USD</p>
        <p className="euro-coins">EURO</p>
      </div>
    </div>
  )

  renderCurrenciesList = () => {
    const {currenciesList} = this.props

    return (
      <div className="list-container">
        {this.renderHeader()}
        <ul className="list-cur">
          {currenciesList.map(cur => (
            <CryptocurrencyItem key={cur.id} currencyDetails={cur} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="main-container" data-testid="loader">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currency-img"
        />
        {this.renderCurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrenciesList
