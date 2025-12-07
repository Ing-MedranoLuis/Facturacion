interface prop{
    title: string,
    icon: string[],
    buttons:string[]
}
export const HeaderTitle = ({ title, icon, buttons }: prop) => {
    
     const index = buttons.findIndex((e) => e === title);
     const iconClass = index !== -1 && icon[index];
  return (
      <div className=" text-center flex-col">
          <i className={`text-blue-300 text-[50px] ${iconClass}` }></i>
          <h1 className="text-blue-300">{title.toLocaleUpperCase()}</h1>
      </div>
  )
}
