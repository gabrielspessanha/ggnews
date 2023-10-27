import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Providers from 'next-auth/providers'

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    })
  ]

})

export { handler as GET, handler as POST }