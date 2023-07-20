import { ReactElement } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { ToastProvider } from '@/components/providers/ToastProvider'

const BasicLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return <ToastProvider>{children}</ToastProvider>
}

export const BasicLayout = (page: ReactElement) => {
  return (
    <BasicLayoutProvider>
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <Header />
        <main className="flex-grow bg-assets-white px-4">{page}</main>
      </div>
      <Footer />
    </BasicLayoutProvider>
  )
}
