


interface prop{
    showComponet: (item:string) => void,
  buttons: string[],
   icons: string[],
    select: string,
  toggle: boolean,
  logIn:()=>void
   
   
}
export const SideHeader = ({ showComponet,buttons ,select,toggle,icons,logIn}: prop) => {
    
   

 
  return (
  <div
      className={`
      scheme-dark
     shadow-2xl
      transition-transform duration-300 ease-in-out
      fixed top-0 left-0 h-full 
      w-[70%] sm:w-[70%] md:w-[25%]
      overflow-hidden /shadow-xl/30 p-10
      bg-white
      z-50
      text-2xl 
      md:text-sm
      ${toggle ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"}
      
      lg:relative lg:translate-x-0
    `}
  >
    <div className="h-full flex flex-col justify-around md:justify-between  items-center">
        <div className="flex flex-col items-center">
          <img className='rounded-xl p-2 m-2 w-[40%]' src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg" alt="" />
          <p className="font-mono">Bienvenido, Alejandro!</p>
      </div>
        <ul className=" font-mono p-5 flex flex-col gap-2 w-full">
        {buttons.map((item, index) => (
          <li
            key={index}
            onClick={() => showComponet(item)}
            className={`
              transition duration-200 ease-in-out
              p-2 cursor-pointer flex items-center gap-2 w-full
              rounded-md
              ${item === select ? "bg-blue-200 scale-110" : "hover:bg-blue-200"}
            `}
          >
            <i className={`${icons[index]}`}></i>
            {item}
          </li>
        ))}
        </ul>
        
        <ul>
          <li onClick={logIn} className="border py-2 px-15  sm:py-2 sm:px-30 md:px-20 transition ease-in-out text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white hover:scale-110"><i className="bi bi-door-open"> </i>Log In</li>
        </ul>
    </div>
  </div>
);
}
