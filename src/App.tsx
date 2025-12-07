import { useState } from 'react'
import './App.css'
import { MainContent } from './MainContent'
import { SideHeader } from './SideHeader'

function App() {
  const [active, setactive] = useState(false)
  const [selected, setSelected] = useState('Factura')

  const buttons = ['Factura', 'Productos', 'Conduce', 'Clientes', 'Pagos','Settings']
   const icons=['bi bi-receipt','bi bi-box-seam','bi bi-file-earmark-excel','bi bi-person','bi bi-cash-coin','bi bi-gear']
    const showComponet = (item:string) => {
      
      setSelected(item)

     
      
     
    }
  const switchToggle = () => {
  setactive(!active);
  }
  const logIn = () => {
    
  }
  return (
    <>
      <div className='flex   h-[100vh]'>
        <button className={`flex absolute top-0 right-[10px] z-1 lg:hidden`} onClick={switchToggle}><i className={`text-[30px] ${!active?'bi bi-list':'bi bi-x-octagon'}`}></i></button>
       <SideHeader logIn={logIn} icons={icons} buttons={buttons} select={selected} toggle={active} showComponet={showComponet}/>
        <MainContent buttons={buttons} icons={icons} status={active} item={selected} />
      </div>
    </>
  )
}

export default App
