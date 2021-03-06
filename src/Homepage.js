import React, { useState, useEffect } from 'react';
import axios from 'axios';


import './App.css';
import Coin from './Coin';


function Homepage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  // const [count, addCount] = useState(4);


  useEffect(() => {
    // setInterval(() => {
    //     let x = 1;
    //     x++;
    axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' 
  
    )
    .then(res => {
      setCoins(res.data);
      console.log(res.data, "Hello setInterval");
    
    })
    .catch(error => console.log(error));
    console.log("Hello")
    
    // console.log(x);
    
  
  }, []);
// }, 5000 )


// setTimeout(() => {
//   axios
//   .get(
//     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' 

//   )
//   .then(res => {
//     setCoins(res.data);
//     console.log(res.data, "Hello setInterval");
  
//   })
//   .catch(error => console.log(error));
//   console.log("Hello")
//   setCoins({name: 'hello', name: 'hello'})
// }, 5000 )




  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
   { return coin.name.toLowerCase().includes(search.toLowerCase())}
  );

  return (

    <div className='coin-app'>
      {/* <div className='counter'>
        <p>{count}  </p>  
        <button onClick={()=>addCount(count+1)}>CLICK HERE</button>
      </div> */}
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>

      <div className='coin-titles'>
        {/* <div className='symbol'>symbol</div> */}
        <div className='name'>name</div>
        {/* <div className='code'>code</div> */}
        <div className='coin-data-title-div'>
            <div className='price'>price</div>
            <div className='total-volume'>total volume</div>
            <div className='daily-change'>change</div>
            <div className='market-cap'>market cap</div>
        </div>
      </div>

      {/* {coins && coins.map(coin => <p>{coin}</p>) } */}
      {filteredCoins.map(coin => {
        return (
          <Coin
            id={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default Homepage;