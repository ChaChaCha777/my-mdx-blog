function Card(props) {
  return (
    <div className="border rounded-md border-gray-600 px-4">
      {props.text}
    </div>
  )
}

export default function Home() {
  const name = 'ChaCha'
  return (
    <>
      <div className="p-20 space-y-4">
        <div>Hello, {name}</div>
        <Card text="親から渡された文字列"/>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
