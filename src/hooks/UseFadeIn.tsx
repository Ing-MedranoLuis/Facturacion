import  { useEffect, useState } from 'react'

export const UseFadeIn = (item:string ) => {

 const [render, setRender] = useState(item === "Factura");
  const [active, setActive] = useState<boolean>(false);
  const duration = 1000; // ms — cámbialo a 10000 si quieres 10s

 useEffect(() => {
    let t:any;
    if (item === "Factura") {
      // montar y después del siguiente frame activar la clase final
      setRender(true);
      // dos requestAnimationFrame para asegurar que el browser registre el estado inicial
      requestAnimationFrame(() => requestAnimationFrame(() => setActive(true)));
    } else {
      // iniciar animación de salida
      setActive(false);
      // esperar a que termine la animación para desmontar
      t = setTimeout(() => setRender(false), duration);
    }
    return () => clearTimeout(t);
  }, [item, duration]);



  const durClass = `duration-[${duration}ms]`;


    return {
       active,durClass,render
    }
      
   
  
  
}
