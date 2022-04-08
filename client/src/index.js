import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51KF1JjEAAoEQmAmLZ4JLFRx2GCI3uNpw8TZGfvwIMCJg87cKEfsKRZJOtMNwGo5HpfjxPWWi5lX6N7i4LgP6Wgnx00SUKtRqJH")

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
