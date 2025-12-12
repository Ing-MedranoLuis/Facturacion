import React, { useState } from "react"
import { UseFadeIn } from "./hooks/UseFadeIn"

export interface Uprop {
  userName: string
  password: string
}

export const LogIn = () => {
  const { durClass, logIn, logintab } = UseFadeIn("Factura")

  const [user, setuser] = useState<Uprop>({
    userName: "",
    password: "",
  })

  const getValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setuser((prev) => ({
      ...prev,
      [name]: value,
    }))
  
  }

  return (
    <div className="r">
      <div
        className={`${
          !logintab ? "hidden" : ""
        } bg-gradient-to-br from-blue-50 border absolute w-full h-full top-0 left-0 z-60`}
      ></div>

      <div
        className={`${
          logintab ? "opacity-100 translate-y-0 flex" : "opacity-0 translate-y-20"
        }
          transition-all ${durClass}
          ease-in-out
          md:top-60 md:left-90
          top-[500px] absolute left-30
          bg-white flex flex-col items-center p-10 shadow
          w-[70%] md:w-[40%] z-60`}
      >
        <form className="m-10 flex flex-col justify-around">
          <div className="my-2">
            <input
              onChange={getValues}
              value={user.userName}
              className="border-blue-200 border px-10 py-2"
              type="text"
              name="userName"
              placeholder="username"
            />
          </div>

          <div className="my-2">
            <input
              onChange={getValues}
              value={user.password}
              className="border-blue-200 border px-10 py-2"
              type="password"
              name="password"
              placeholder="password"
            />
          </div>

          <div className="my-2">
            <button
              type="button"
              onClick={()=>logIn(user)}
              className="border-blue-200 border px-25 py-2"
            >
              Log In
            </button>
          </div>
        </form>

       
      </div>
    </div>
  )
}
