// Importing React hooks for managing state, effects, DOM refs, and memoized functions
import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  // State to manage password length (controlled by the slider)
  let [length, setLength] = useState(8);

  // Checkbox state: allow numbers?
  let [numAllowed, setNumAllowed] = useState(false);

  // Checkbox state: allow special characters?
  let [charAllowed, setCharAllowed] = useState(false);

  // Final generated password string
  let [password, setPassword] = useState("");

  // useRef to directly access the input DOM element for copying
  let passwordRef = useRef(null);

  // Function to generate a random password, re-created only if dependencies change
  let passwordGenerator = useCallback(() => {
    let pass = ""; // final password string
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // base characters

    // Add numbers if enabled
    if (numAllowed) str += "0123456789";

    // Add special characters if enabled
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    // Generate password by randomly picking characters from str
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); // random index
      pass += str.charAt(char); // add random character
    }

    // Save generated password to state
    setPassword(pass);
  }, [length, numAllowed, charAllowed,]);

  // Function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // highlight the text
    window.navigator.clipboard.writeText(password); // copy to clipboard
  }, [password]);

  // Auto-generate password whenever length or options change
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md mx-auto rounded-lg shadow-md px-5 py-4 text-orange-500 bg-gray-700">
          <h1 className="text-white text-center my-3">Password Generator</h1>

          {/* Password display + Copy button */}
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              placeholder="Password"
              className="outline-none bg-white w-full py-1 px-3"
              ref={passwordRef} // attach ref so we can select it later
              readOnly
            />
            <button
              className="outline-none bg-blue-700 hover:cursor-pointer hover:bg-blue-400 transition-all duration-200 hover:scale-105 active:scale-95 text-white px-3 py-0.5 shrink-0"
              onClick={copyPasswordToClipboard} // copy password on click
            >
              copy
            </button>
          </div>

          {/* Controls section: slider + checkboxes */}
          <div className="flex text-sm gap-x-2">
            {/* Length slider */}
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={18}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(Number(e.target.value)); // update password length
                }}
              />
              <label>Length: {length}</label>
            </div>

            {/* Numbers checkbox */}
            <div className="flex gap-x-1 items-center">
              <input
                type="checkbox"
                checked={numAllowed}
                id="numberInput"
                onChange={() => {
                  setNumAllowed((prev) => !prev); // toggle number inclusion
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            {/* Characters checkbox */}
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev); // toggle character inclusion
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
