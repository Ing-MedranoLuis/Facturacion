

export const LogIn = () => {
  return (
      <div>
          <div className={`opacity-0 hidden blur-3xl bg-gray-100  absolute z-60 h-full w-full top-0 left-0`}></div>
          <div className="opacity-0 hidden relative flex flex-col items-center p-10  shadow w-[50%] z-60 bg-white">
              <form action="" className="m-10 flex flex-col justify-araund">
                  <div className="my-2">
                      <input className="px-10 py-2 " type="text" name="" placeholder="username" id="" />
                  </div>
                  <div>
                      <input  className="px-10 py-2" type="text" name="" placeholder="password" id="" />
                  </div>
                  <div>
                      <button className="border px-30 py-2">Log In</button>
                  </div>
          </form>
          <button className="absolute right-5 top-0 cursor-pointer"><i className="bi bi-x"></i></button>
          </div>
    </div>
  )
}
