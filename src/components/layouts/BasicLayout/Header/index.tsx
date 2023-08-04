import { memo } from 'react'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { AuthButton } from './AuthButton'

type Props = {
  isUser: boolean
}

export const Header = memo(function HeaderBase({ isUser }: Props) {
  return (
    <header className="h-20 bg-assets-white border-assets-ghostGray border-b-[1px] flex items-center justify-between px-4">
      <Heading />
      <div className="flex items-center gap-8">
        {isUser && <Nav />}
        <AuthButton isUser={isUser} />
      </div>
    </header>
  )
})
