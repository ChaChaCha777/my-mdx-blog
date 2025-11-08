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
  const name = 'ChaCha'
  const handleClick = (e) => {
    setIsVisible(!isVisible)
  }
  return (
    <>
      <div className="p-20 space-y-4">
        <div>Hello, {name}</div>
        {isVisible && 
        <>
        <Card>親から文字列が渡されました</Card>
        <Card>
          <div>コンポーネントを渡しました</div>
          <Card>ネスト</Card>
        </Card>
        <Card/>
        <Card/>
        <Card/>
        </>
        }
        <button onClick={handleClick}>
         {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
    </>
  );
}
