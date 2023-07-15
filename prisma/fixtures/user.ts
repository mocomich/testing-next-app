import { User } from '@prisma/client'

const userFixture = (name: string): UserData => ({
  name,
  bio: 'Hello World',
  githubAccount: `${name.toLowerCase()}`,
  twitterAccount: `${name.toLowerCase()}`,
  password: 'abcd1234',
  imageUrl: '/__mocks__/images/img01.jpg',
  email: `${name.toLowerCase()}@example.com`,
})
export type UserData = Omit<User, 'id' | 'createdAt' | 'updatedAt'>
export const userNames = ['SuzukiIchiro', 'TaroSato', 'TaroYamada'] as const
export type UserName = (typeof userNames)[number]

export const usersFixture = (): UserData[] => {
  return userNames.map((name) => userFixture(name))
}
