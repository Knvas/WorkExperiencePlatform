'use client'

import React from 'react';
import Input from "@/components/input";
import {Button} from "@nextui-org/react";
import {Formik} from "formik";
import * as Yup from 'yup'
import {getSession, signIn, useSession} from "next-auth/react"

const LoginClient = () => {

  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required()
  })

  const session = async () => {
    const user = await getSession()
  }


  return (
    <Formik
      validateOnChange={false}
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const signin = await signIn('credentials', {
          email: values.email,
          password: values.password,
          redirect: false
        })

        if (signin && signin.ok) {
          window.location.reload()
        }

      }}
    >
      {
        (formik) => (
          <div className="text-gray-900 mt-10 space-y-10">
            <div>
              <h1 className="text-center text-2xl font-semibold text-gray-800">
                Welcome to Knvas
              </h1>
              <p className="text-center text-sm">
                All-in-one platform that helps schools to place
                their students with employers seamlessly, devoid
                of any paperwork.
              </p>

            </div>


            <div className="space-y-5">
              <Input
                label={'E-mail'}
                labelclass={`text-black after:content-['*'] after:ml-0.5 after:text-red-500 text-sm md:text-base`}
                name={'email'}
                type={'email'}
                placeholder={'Email'}
                value={formik.values.email}
                onChange={formik.handleChange}
                // onBlur={handleBlur}
                disabled={formik.isSubmitting}
                error={!!formik.errors.email}
              />

              <Input
                label={'Password'}
                labelclass={`text-black after:content-['*'] after:ml-0.5 after:text-red-500 text-sm md:text-base`}
                name={'password'}
                type={'password'}
                placeholder={'******'}
                value={formik.values.password}
                onChange={formik.handleChange}
                // onBlur={handleBlur}
                disabled={formik.isSubmitting}
                error={!!formik.errors.password}
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="newsLetter"
                  id="newsLetter"
                  // value={values.newsLetter}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className=" mr-[10px] h-[15px] w-[15px]  rounded border bg-[#F0F0FA] p-2 checked:border-none checked:bg-accountBut"
                />
                <p className="text-blackOpacity ">
                  I am not a robot
                </p>
              </div>
              <Button
                radius={'none'}
                color="primary"
                size={'lg'}
                className="w-full rounded-md"
                isLoading={formik.isSubmitting}
                onClick={() => formik.handleSubmit()}
              >
                Sign in
              </Button>
            </div>

          </div>
        )
      }
    </Formik>

  );
};

export default LoginClient;