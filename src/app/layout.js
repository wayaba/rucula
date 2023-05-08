import './globals.css'
import { Trispace } from 'next/font/google'

const inter = Trispace({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Rúcula',
  description: 'Consulta cotización del dólar en Argentina 🧉'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-800 grid h-screen items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
