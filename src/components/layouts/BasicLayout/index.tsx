import { ReactElement } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { ToastProvider } from '@/components/providers/ToastProvider'
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client'

const BasicLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <ToastProvider>{children}</ToastProvider>
    </UserProvider>
  )
}

export const BasicLayout = (page: ReactElement) => {
  const { ...userData } = useUser()

  return (
    <BasicLayoutProvider>
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <Header isUser={!!userData.user} />
        <main className="flex-grow bg-assets-white px-4">{page}</main>
      </div>
      <Footer />
    </BasicLayoutProvider>
  )
}
