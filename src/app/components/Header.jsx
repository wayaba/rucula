export function Header({ dateTime }) {
  return (
    <header className="text-center">
      <h1 className="text-4xl">Cotización Dólar 💸</h1>
      <small className="opacity-50">{dateTime}</small>
    </header>
  )
}
