import './Spinner.css'
export function Spinner() {
  return (
    <div className="fixed inset-5 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="orbit"></div>
    </div>
  )
}
