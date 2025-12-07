
import { HeaderTitle } from "./shared/HeaderTitle"
import { UseFadeIn } from "../hooks/UseFadeIn";
import { producto,  } from "../data/Data";

interface prop {
  icons: string[],
  buttons: string[],
  item: string | undefined,
 
}
export const Items = ({ icons, buttons,  }: prop) => {
  const { active, durClass } = UseFadeIn('Factura')
  const data = producto;
 
   return (
     <div
       className={`
         ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}
         transition-all ${durClass} ease-in-out
       `}
     >
       <HeaderTitle buttons={buttons} title="Productos" icon={icons} />
       <div className="flex mt-10 overflow-x-auto ">
         
           <table className=" w-full overscroll-x-auto">
             <thead className="p-10px bg-blue-200 text-white">
               <tr>
                 <th>Nombre</th>
                 <th>Tamano</th>
                 <th>Precio</th>
                 <th>Venta</th>
               <th>Mayor</th>
                <th></th>
               </tr>
             </thead>
           <tbody className="text-center">
             {
               data.map((e,i) => (
                 
                  <tr key={i}>
                   <td className="p-2">{e.name}</td>
                   <td className="p-2">{ e.size}</td>
                   <td className="p-2">{ e.model}</td>
                   <td className="p-2">${ e.purchasePrice}</td>
                   <td className="p-2">{ e.salePrice}</td>
                   <td className="p-2">
                     <button><i><i className="bi bi-pencil-fill"></i></i></button>
                   </td>
                   
                 </tr>
                 
                 
               ))
             }
                
                
                 
               
           
               
             </tbody>
           </table>
        
       </div>
       
     </div>
   )
}
