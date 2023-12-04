import React from 'react';
import LoginClient from "@/app/(auth)/login/loginClient";
import {getServerSession, User} from "next-auth";
import {handler} from "@/app/api/auth/[...nextauth]/auth-config";
import {redirect} from "next/navigation";

const Login = async () => {

  const userSession: User | null = await getServerSession(handler)
  if(userSession){
    redirect('/')
  }

  return <LoginClient />
};

export default Login;