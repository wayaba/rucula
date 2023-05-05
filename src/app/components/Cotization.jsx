export function Cotization({ cotization }) {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {cotization.map(({ name, buy, sell }) => (
          <li key={name} className="flex items-center justify-between gap-4">
            <div className="text-white">{name}</div>
            <div className="text-3xl font-bold text-white">
              {Number(buy).toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS'
              })}
            </div>
            <div className="text-3xl font-bold text-white">
              {Number(sell).toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS'
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
