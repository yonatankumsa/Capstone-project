// import React, { useState, useEffect } from 'react';


// function MyComponent() {
//     // const [error, setError] = useState(null);
//     // const [isLoaded, setIsLoaded] = useState(false);
//     // const [items, setItems] = useState([]);
  
//     // // Note: the empty deps array [] means
//     // // this useEffect will run once
//     // // similar to componentDidMount()
//     // useEffect(() => {
//     //   fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=64cc2cfa35834f30a8dfeb28eb217bda")
//     //     .then(res => res.json())
//     //     .then(
//     //       (result) => {
//     //         console.log(result)
//     //       },
//     //       (error) => {
//     //         setIsLoaded(true);
//     //         setError(error);
//     //       }
//     //     )
//     // }, [])
//     fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=64cc2cfa35834f30a8dfeb28eb217bda')
//     .then(response2 => response2.json())
//     .then(response2 => {console.log(response2)

    
    
    
  
//       return (
//         <div>
       
//            <p>
//               {articles[0].author} 
     
//               </p>

//         </div>
//       );
//     })
//     .catch(err => console.error(err));
//     }

//  export default MyComponent;