import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './CustomHooks/useCurrencyInfo.js';

function App() {
  let [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  
  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
          setConvertedAmount(amount * currencyInfo[to]);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950"
    // style={{backgroundImage : `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmligJWqc5qNMl2Fpj6UVn4BLVs5WIZtdiQ&s')`}}
    >
      
      <div className="relative w-full max-w-lg p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert()
                       
          }}
      >

      </form>
        
        {/* FROM */}
        <InputBox
          label="From"
          amount={amount}
          
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
        />

        {/* SWAP BUTTON */}
        <div className="flex justify-center my-4">
          <button 
          onClick={swap}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
            swap
          </button>
        </div>

        {/* TO */}
        <InputBox
          label="To"
          amount={convertedAmount}
          currency={to}
          currencyOptions={options}
          disabled
          onCurrencyChange={(currency) => setTo(currency)}
        />

        {/* CONVERT BUTTON */}
        <button 
        onClick={convert}
        className="w-full mt-6 py-3 text-lg font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>

    </div>
  );
}

export default App;

