
import { HeaderTitle } from "./shared/HeaderTitle"
import { UseFadeIn } from "../hooks/UseFadeIn";


export interface propComponent{
  icons: string[],
  buttons: string[],
  item:string
}

export const Factura = ({ icons, buttons,item }: propComponent) => {
  const {active,durClass} =UseFadeIn(item);
  

  return (
    <div
      className={`
        ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}
        transition-all ${durClass} ease-in-out
      `}
    >
      <HeaderTitle buttons={buttons} title="Factura" icon={icons} />
      <div>
        <div className="flex p-2 justify-around">
          <button className="py-3 px-10 text-white  cursor-pointer  bg-blue-500">Crear Factura</button>
            <button className=" sm:py-3 px-10  text-white  cursor-pointer bg-red-500"><i className="bi bi-eye"></i>Ver Facturas</button>
        </div>
      </div>
      <div></div>
    </div>
  )
}
