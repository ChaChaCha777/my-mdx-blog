'use client'
import { useState } from "react"

function Card({children = "何も渡されていません"}) {
  return (
    <div className="border rounded-md border-gray-600 px-4">
      {children}
    </div>
  )
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)
  const [names, setNames] = useState(['名前1', '名前2', '名前3'])
  const name = 'ChaCha'
  const cards = isVisible && names.map((name, index) => <Card key={index}>{name}</Card>)
  const handleClick = (e) => {
    setIsVisible(!isVisible)
  }

  const handleAdd = () => {
    setNames([...names, 'New element'])
  }
  return (
    <>
      <div className="p-20 space-y-4">
        <div>Hello, {name}</div>
        {cards}
        <div className="flex space-x-4">
          <button onClick={handleClick}>
           {isVisible ? 'Hide' : 'Show'}
          </button>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </>
  );
}
