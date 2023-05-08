export function Header({ dateTime }) {
  return (
    <header className="text-center m-3">
      <h1 className="text-4xl">Cotización Dolar 💸</h1>
      <small className="opacity-50">{dateTime}</small>
    </header>
  )
}
