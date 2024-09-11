import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function Trondata() {
    const [trondata, setTRONData] = useState([]);
        
    const fetchData = () => {
        const  query = `subscription MyQuery {
                    Tron {
                        DEXTradeByTokens(
                        where: {Trade: {Currency: {SmartContract: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}}}, TransactionStatus: {Success: true}}
                        ) {
                        Block {
                            Time
                        }
                        Trade {
                            AmountInUSD
                            PriceInUSD
                            Currency {
                            Symbol
                            }
                        }
                        }
                    }
                    }`;
  
        const data = JSON.stringify({ query });
  
        const config = {
            method: 'post',
            url: 'https://streaming.bitquery.io/eap',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer ory_**Your OAuth Token here**",
            },
            data: data
        };

        axios(config).then((res) => {
            setTRONData(res.data.data.Tron.DEXTradeByTokens); 
        }).catch((error) => {
            console.error('Error:', error); 
        });
      
    }
  
   
    useEffect(() => {
        fetchData();
    },[]);
  
    return (
        <div>
          <h1>Real Time TRON Token Price</h1>
          <table>
            <thead>
                <tr><td>Time</td><td>Currency</td><td>Amount In USD</td><td>Price In USD</td></tr>
            </thead>
            <tbody>
                  {trondata.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Block.Time}</td> <td>{item.Trade.Currency.Symbol} </td><td>{item.Trade.AmountInUSD}</td> <td>{item.Trade.PriceInUSD}</td>
                    </tr>
                  ))} 
            </tbody>
        </table>
        </div>
      );
    }
    
    export default Trondata;