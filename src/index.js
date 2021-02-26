import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { Loading } from './components/loading/loading';
import Wheel from './components/wheel/index'

import './styles.css';

export const App = ()=>{
  const [loading, setLoading] = useState(false);
  const [wheel, setWheel] = useState(null);
  useEffect(()=>{
    setLoading(true);
    // getWheelConfigTest();
    getWheelConfig();
  },[])
  const getWheelConfigTest = ()=>{
    setTimeout(()=>{
      setWheel({
        "wheelConfig": {
          "ruls": "A simple text",
          "result": "Congratulations",
          "sections": [
            {
              "sectionId": 1,
              "gameName": "Lucky Ladys Charm ",
              "priceText": "Free Spins",
              "priceValue": 5,
              "curency": "USD",
              "display": "1",
              "image": "1.jpg"
            },
            {
              "sectionId": 2,
              "gameName": "Bananas Go Bahamas",
              "priceText": "Free Spins",
              "priceValue": 10,
              "curency": "USD",
              "display": "2",
              "image": null
            },
            {
              "sectionId": 3,
              "gameName": "Lord Of the Ocean",
              "priceText": "Free Spins",
              "priceValue": 15,
              "curency": "USD",
              "display": "3",
              "image": null
            },
            {
              "sectionId": 4,
              "gameName": "Book Of Ra Deluxe",
              "priceText": "Free Spins",
              "priceValue": 20,
              "curency": "USD",
              "display": "4",
              "image": null
            },
            {
              "sectionId": 5,
              "gameName": "Lucky Hunter",
              "priceText": "Free Spins",
              "priceValue": 25,
              "curency": "USD",
              "display": "5",
              "image": null
            },
            {
              "sectionId": 6,
              "gameName": "Resident",
              "priceText": "Free Spins",
              "priceValue": 50,
              "curency": "USD",
              "display": "6",
              "image": null
            },
            {
              "sectionId": 7,
              "gameName": "Dolphins Pearl",
              "priceText": "Free Spins",
              "priceValue": 100,
              "curency": "USD",
              "display": "7",
              "image": null
            },
            {
              "sectionId": 8,
              "gameName": "Book Of Ra Deluxe",
              "priceText": "Free Spins",
              "priceValue": 500,
              "curency": "USD",
              "display": "8",
              "image": null
            },
            {
              "sectionId": 6,
              "gameName": "Resident",
              "priceText": "Free Spins",
              "priceValue": 50,
              "curency": "USD",
              "display": "9",
              "image": null
            },
            {
              "sectionId": 7,
              "gameName": "Dolphins Pearl",
              "priceText": "Free Spins",
              "priceValue": 100,
              "curency": "USD",
              "display": "10",
              "image": null
            },
            {
              "sectionId": 8,
              "gameName": "Book Of Ra Deluxe",
              "priceText": "Free Spins",
              "priceValue": 500,
              "curency": "USD",
              "display": "11",
              "image": null
            }
          ]
        },
        "wheelConfigID": 3,
        "message": "Ready to spin",
        "wheelStatus": "Active",
        "spinsLeft": 10
      })
      console.log('came here to ');
      setLoading(false);
    }, 500)
  }

  const getWheelConfig = ()=>{
    axios.get('https://cors-anywhere.herokuapp.com/https://spinwheel.betsense.ge/Wheel/User/spinwheel_2/testUser1312/testSpin_dsadas', {
      headers: {
        Authorization: '3uA2FpK4tdWtC1Ex',
      }
    })
    .then(res => {
      setWheel(res.data);
      setLoading(false);
    })
    .catch(e =>{
      console.log('error ocured   ', {e});
    })
  }
  if(wheel){
    console.log(wheel);
    return (
      <div className="App">
        <Wheel items={wheel.wheelConfig.sections} selected={0} totalSpins={wheel.spinsLeft}/>
      </div>
    );
  } else {
    return <Loading/>
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
