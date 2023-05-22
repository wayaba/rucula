import HomeClient from './client'
import { getCotization } from '../services/dolarSi'

export const dynamic = 'force-dynamic'
export default async function Home() {
  const cotization = await getCotization()
  return (
    <HomeClient
      dateTime={new Date().toLocaleString()}
      cotization={cotization.map((item, index) => {
        return { ...item, id: index }
      })}
    />
  )
}
