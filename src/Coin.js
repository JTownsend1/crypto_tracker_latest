// import React from 'react';
// import { Link } from 'react-router-dom';

// import './Coin.css';

// const Coin = ({
//   id,
//   name,
//   price,
//   symbol,
//   marketcap,
//   volume,
//   image,
//   priceChange
// }) => {
//   return (
//     <Link to={`/Coin-detail/${id}`} style={{ textDecoration: 'none' }}>


//     <div className='coin-container'>
//       <div className='coin-row'>
//         <div className='coin-imag'>
//           <img src={image} alt='crypto' />
//           <h1>{name}</h1>
//           <p className='coin-symbol'>{symbol}</p>
//         </div>
//         <div className='coin-data'>
//           <p className='coin-price'>${price}</p>
//           <p className='coin-volume'>${volume.toLocaleString()}</p>

//           {priceChange < 0 ? (
//             <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
//           ) : (
//             <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
//           )}

//           <p className='coin-marketcap'>
//             ${marketcap.toLocaleString()}
//           </p>
//         </div>
       
//       </div>
//     </div>

//     </Link>
//   );
// };

// export default Coin;






import React from 'react';
import { Link } from 'react-router-dom';

import './Coin.css';

const Coin = ({
  id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <Link to={`/Coin-detail/${id}`} style={{ textDecoration: 'none' }}>


    <div className='coin-container'>
        
      <div className='coin-row'>

        <div className='coin'>
            <div className='coin-img'>
                <img src={image} alt='crypto' />
            </div>
            <div className='coin-name'>
                {name}
            </div>
            <div className='coin-symbol-div'>
                <p className='coin-symbol'>{symbol}</p>
            </div>
        </div>

        <div className='coin-data'>
            <div className='coin-price-div'>
                <p className='coin-price'>${Math.round(price*100)/100}</p>
                {/* <p className='coin-price'>${price}</p> */}
                {/* Math.round(num * 100) / 100 */}
            </div>
            <div className='coin-volume-div'>
                <p className='coin-volume'>${volume.toLocaleString()}</p>
            </div>
            <div className='price-change-div'>
                {priceChange < 0 ? (
                    <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                )}
            </div>
            <div className='coin-marketcap-div'>           
                <p className='coin-marketcap'>
                    ${marketcap.toLocaleString()}
                </p>
            </div>
        </div>
       
      </div>
    </div>

    </Link>
  );
};

export default Coin;