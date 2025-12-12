import  { useEffect, useState } from 'react'
import { users } from '../data/Data';
import type { Uprop } from '../LogIn';

export const UseFadeIn = (item:string ) => {

 const [render, setRender] = useState(item === "Factura");
  const [active, setActive] = useState<boolean>(false);
  const duration = 1000; // ms — cámbialo a 10000 si quieres 10s
  const [logintab, setlogintab] = useState(false)
  const [username, setusername] = useState<string>('invitado')
  
 
 useEffect(() => {
    let t:any;
    if (item === "Factura") {
      // montar y después del siguiente frame activar la clase final
      setRender(true);
      // dos requestAnimationFrame para asegurar que el browser registre el estado inicial
      requestAnimationFrame(() => requestAnimationFrame(() => setActive(true)));
       requestAnimationFrame(() => requestAnimationFrame(() => setlogintab(true)));
    } else {
      // iniciar animación de salida
      setActive(false);
     
      // esperar a que termine la animación para desmontar
      t = setTimeout(() => setRender(false), duration);
    }
    return () => clearTimeout(t);
  }, [item, duration]);

  const logIn = (user:Uprop) => {
   
    users.find((e) => {
      console.log(e,user);
      if (e.userName.toLocaleLowerCase() == user.userName.toLocaleLowerCase() && e.password == user.password) {
        setusername(e.userName); setlogintab(!logintab);
        return
      } 
       
   
   alert('failed')
    })
  
    
  }

  const durClass = `duration-[${duration}ms]`;


    return {
       active,durClass,render,logintab,logIn,setlogintab,username
    }
      
   
  
  
}
