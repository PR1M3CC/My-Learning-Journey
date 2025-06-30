import { useState } from "react"

function App() {
    
  const [color, setColor] = useState("black")
  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none bg-red-800 hover:cursor-pointer px-4 py-1 rounded-full text-white shadow-lg"
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none bg-green-600  hover:cursor-pointer px-4 py-1 rounded-full text-white shadow-lg"
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none bg-blue-800  hover:cursor-pointer px-4 py-1 rounded-full text-white shadow-lg"
          >Blue</button>
          <button
          onClick={() => setColor("oklch(59.2% 0.249 0.584)")}
          className="outline-none bg-pink-600  hover:cursor-pointer px-4 py-1 rounded-full text-white shadow-lg"
          >Pink</button>
          <button
          onClick={() => setColor("#5d0ec0")}
          className="outline-none bg-violet-800  hover:cursor-pointer px-4 py-1 rounded-full text-white shadow-lg"
          >Violet</button>
          <button
          onClick={() => setColor("grey")}
          className="outline-none bg-gray-800  hover:cursor-pointer px-4 py-1 rounded-full text-white shadow-lg"
          >Grey</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none bg-yellow-500  hover:cursor-pointer px-4 py-1 rounded-full text-white shadow-lg"
          >Yellow</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
