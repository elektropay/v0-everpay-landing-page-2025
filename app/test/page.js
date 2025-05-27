export default function Test() {
  const items = ["Item 1", "Item 2", "Item 3"]

  return (
    <div>
      <h1>Test Page</h1>
      <p>Testing JSX patterns</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
