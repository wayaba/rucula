import HomeClient from './client'
import { getCotization } from '../services/dolarSi'

export default async function Home() {
  const cotization = await getCotization()
  console.log('ejecucion en el server', cotization)
  return (
    <HomeClient
      cotization={cotization.map((item, index) => {
        return { ...item, id: index }
      })}
    />
  )
}
