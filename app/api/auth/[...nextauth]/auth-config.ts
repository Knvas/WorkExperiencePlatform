import NextAuth, {User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {label: "email", type: "email"},
        password: {label: "password", type: "password"}
      },
      authorize: async (credentials, req) : Promise<User | null> => {
        if(credentials && credentials.email === 'admin@admin.com' && credentials.password === 'admin'){
          return {
            id: credentials.email,
            email: credentials.email,
            name: JSON.stringify({
              name: 'John Doe',
              type: 'admin'
            })
          }
        }

        if(credentials && credentials.email === 'student@student.com' && credentials.password === 'student'){
          return {
            id: credentials.email,
            email: credentials.email,
            name: JSON.stringify({
              name: 'John Doe',
              type: 'student'
            })
          }
        }

        if(credentials && credentials.email === 'school@school.com' && credentials.password === 'school'){
          return {
            id: credentials.email,
            email: credentials.email,
            name: JSON.stringify({
              name: 'John Doe',
              type: 'school'
            })
          }
        }

        return null
      }
    }),
  ],
  callbacks: {
    session({session, token, user}){
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },
  session:  {strategy: "jwt" }
})