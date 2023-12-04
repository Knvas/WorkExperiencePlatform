import Student from "@/app/(dashboard)/components/student";
import School from "@/app/(dashboard)/components/school";
import SuperAdmin from "@/app/(dashboard)/components/super-admin";
import {getServerSession, Session} from "next-auth";
import {handler} from "@/app/api/auth/[...nextauth]/auth-config";
import {UserType} from "@/types";

const Home = async () => {
  const session: Session | null = await getServerSession(handler)
  if(!session || !session.user){
   return undefined
  }

  const user: UserType = JSON.parse(session.user.name as string)

  if (user.type === 'admin') return <SuperAdmin />
  if (user.type === 'school') return <School />
  if (user.type === 'student') return <Student />

  return  undefined
};

export default Home;