// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {

//   const [data, setData] = useState([]);

//   const endpoint = "https://streaming.bitquery.io/graphql";

//   const QUERY = `subscription MyQuery {
//   Tron {
//     DEXTradeByTokens(
//       where: {Trade: {Currency: {SmartContract: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}}}, TransactionStatus: {Success: true}}
//     ) {
//       Block {
//         Time
//       }
//       Trade {
//         AmountInUSD
//         PriceInUSD
//         Currency {
//           Symbol
//         }
//       }
//     }
//   }
// }`;

// // Fetch function to call the GraphQL API
// const fetchTrades = async () => {
//   console.log("endpoint: ", endpoint)
//   const response = await fetch(endpoint, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-API-KEY': 'ory_at_utHxV4TA-KLdv3NM0h8m_88KHUAuxLMeByYb62vF_iU.Pxe5noJx__EZgsTKxHmmAsG7SC8wNLD5nWzW60fN_J4', 
//     },
//     body: JSON.stringify({ query: QUERY })
//   }).then((response) => {
//     if (response.status >= 400) {
//       throw new Error("Error fetching data");
//     } else {
//       return response.json();
//     }
//   })
//   .then((data) => setData(data.data));
// }

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
  

//   // useEffect(() => {
    
//   //   const message = JSON.stringify({
//   //     "type": "start",
//   //     "id": "1",
//   //     "payload": {
//   //       "query": "subscription {\n Tron {\n DEXTradeByTokens(\n where: {Trade: {Currency: {SmartContract: {is: \"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t\"}}}, TransactionStatus: {Success: true}}\n ) {\n Block {\n Time\n }\n Trade {\n AmountInUSD\n PriceInUSD\n Currency {\n Symbol\n }\n }\n }\n }\n }",
//   //     },
//   //     "headers": {
//   //       "Authorization": "ory_at_utHxV4TA-KLdv3NM0h8m_88KHUAuxLMeByYb62vF_iU.Pxe5noJx__EZgsTKxHmmAsG7SC8wNLD5nWzW60fN_J4"
//   //     }
//   //   });

//   //    let ws = new WebSocket(url, 'graphql-ws');

//   //   const connect = () => {
//   //     // let ws = new WebSocket(url, 'graphql-ws');

//   //     ws.onopen = () => {
//   //       ws.send(message);
//   //     };

//   //     ws.onmessage = (event) => {
//   //       const response = JSON.parse(event.data);

//   //       console.log("refahsgdiyagsdiyasd");
//   //       console.log(response);
//   //       if (response.type === 'data') {
//   //         setData(response.payload.data.EVM.Transfers.map(t => t.Transfer));
//   //       }
//   //     };

//   //     ws.onclose = () => {
//   //       console.log("WebSocket disconnected. Retrying in 5 seconds...");
//   //       setTimeout(connect, 5000);
//   //     };
//   //   };

//   //   connect();

//   //   return () => {
//   //     ws.close();
//   //     console.log("WebSocket disconnected.");
//   //   };
//   // }, []);

// useEffect(() => {
//   fetchTrades();
// },[]);

//     return (
//     <div className="App">
//       <h1>Realtime TRON Token Price -- React</h1>
      
//     </div>
//   );
// }

// export default App;
