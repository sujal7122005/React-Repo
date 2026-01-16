import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [Numbersadded, setNumbersadded] = useState(false);
  const [Charactersadded, setCharactersadded] = useState(false);

  const passwordRef = useRef(null);

  const GeneratePassword = useCallback(() => {
    // Password generation logic will go here
    let generatedPassword = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-+';

    if (Numbersadded) str += numbers;

    if (Charactersadded) str += specialCharacters;

    // if (generatedPassword === '') {
    //   generatedPassword = characters;
    // }

    
    for (let i = 0; i < length; i++) {
      let char =  Math.floor(Math.random() * str.length);
      generatedPassword += str.charAt(char);
    }

    setPassword(generatedPassword);
  }, [length, Numbersadded, Charactersadded, setPassword]);

  useEffect(() => {
    GeneratePassword();
  }, [ length, Numbersadded, Charactersadded]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-800 rounded-xl shadow-lg p-6">
        
        {/* Title */}
        <h1 className="text-center text-xl font-semibold text-white mb-6">
          Password generator
        </h1>

        {/* Password Input + Copy */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Generated password"
            className="flex-1 px-4 py-2 rounded-full bg-white text-orange-500 font-medium outline-none"
            value={password}
            onChange={GeneratePassword}
            ref={passwordRef}
            readOnly
          />
          
          <button 
          onClick={copyPasswordToClipboard}
          className="px-4 py-2 m-1 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            copy
          </button>
        </div>

        {/* Slider */}
        <div className="flex items-center gap-3 mb-4">
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full cursor-pointer"
          />
          <span className="text-orange-400 text-sm whitespace-nowrap">
            {length} 
          </span>
        </div>

        {/* Options */}
        <div className="flex items-center gap-6 text-orange-400 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox"
            defaultChecked = {false}
            onClick={() => setNumbersadded((prev) => !prev)}
            className="accent-blue-500" />
            Numbers
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox"
            defaultChecked = {Charactersadded}
            onClick={() => setCharactersadded((prev) => !prev)}
            className="accent-blue-500" />
            Characters
          </label>
        </div>

      </div>
    </div>
  );
}



export default App
