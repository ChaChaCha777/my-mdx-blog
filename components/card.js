'use client'

export default function Card({children = "何も渡されていません"}) {
  return (
    <div className="border rounded-md border-gray-600 px-4">
      {children}
    </div>
  )
}

