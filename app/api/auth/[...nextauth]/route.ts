import NextAuth, {User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { handler } from "./auth-config";

export {handler as GET, handler as POST}