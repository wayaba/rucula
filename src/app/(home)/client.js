import { Footer } from '../components/Footer'
import { Body } from '../components/Body'

export default function HomeClient({ cotization }) {
  return (
    <>
      <Body cotization={cotization} />
      <Footer author="Pablo Pedraza" github="wayaba" />
    </>
  )
}
