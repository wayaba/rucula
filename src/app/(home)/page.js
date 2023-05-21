import HomeClient from './client'
import { getCotization } from '../services/dolarSi'

export const dynamic = 'force-dynamic'
export default async function Home() {
  const cotization = await getCotization()
  console.log('en el server', cotization)
  return (
    <HomeClient
      cotization={cotization.map((item, index) => {
        return { ...item, id: index }
      })}
    />
  )
}
