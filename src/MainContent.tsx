

import { Factura } from "./Components/Factura"
import { Items } from "./Components/Items"
import { Conducer } from "./Components/Conducer"
import { LogIn } from "./LogIn"

interface prop{
 
  item: string,
  icons: string[],
  buttons: string[],

  
}

export const MainContent = ({  item, icons, buttons }: prop) => {
 
  const render = () => {
   
    switch (item) {
      case 'Factura': return <Factura buttons={buttons} item={item} icons={ icons} />
      case 'Productos': return <Items icons={icons} item={item} buttons={buttons} />
      case 'Conduce': return <Conducer icons={icons} item={item} buttons={buttons} />
     
     }
   }
  return (
      
    
      <div className="font-mono scheme-dark shadow-xl/30 p-10 w-[100%] lg:w-[80%] ">
        
      <div className="transition">
        
        {
          render()
        }
        <LogIn  />
            
          </div>
    </div>
  )
}
