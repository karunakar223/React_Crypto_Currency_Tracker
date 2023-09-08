// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = currencyDetails

  return (
    <li className="items">
      <div className="con-1" data-testid="loader">
        <img src={currencyLogo} alt={currencyName} className="img" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="con-2">
        <p className="usd-val">{usdValue}</p>
        <p className="euro-val">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
