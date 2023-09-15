import './globals.css'
import { Trispace } from 'next/font/google'

const inter = Trispace({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Rúcula',
  description:
    'Consultá la cotización del dólar en Argentina 🧉 y fijate cuantos pesos vale cada tipo de dólar'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-800 grid min-main-screen items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
