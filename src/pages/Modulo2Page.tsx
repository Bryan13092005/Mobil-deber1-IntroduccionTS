import { use, useState } from "react";

type ContadorProps={
    inicial?:number;
    step?:number;
}
export const Modulo2Page=({inicial=0,step=1}:ContadorProps) =>{
    const [count,setCount]=useState<number>(inicial);
    const inc =()=>setCount((c)=>c+step);
    const dec =()=>setCount((c)=>c-step);
    //inferidos
    const [tazas,setTazas]=useState(1);
    //EL TYPE PERMITE AGRUPAR TYPOS PARA NO DECLARARLOS POR SEPARADO Y Solo existe en tiempo de desarrollo, en tiempo de ejecucion como se pasa a JS ya no existe porque es propio de TS

    //Tipaado explicito con literales restringidos = union literal
    type ingredientes="agua"|"cafe"|"azucar"

    type recetaCafe={
        agua:number;
        cafe:number;
        azucar:number;
    }

    type cafePreparado={
        mensaje:string;
        intensidad: "suave"|"fuerte";
    }

    //explicito con union literal
    const [intensidadUI,setintensidadUI]=useState<cafePreparado['intensidad']>("suave");

    //explicito con valores nulos
    const [ultimoCafe,setUltimoCafe]=useState<cafePreparado | null>(null);

    //indefinidos
    const [azucarIn,setAzucarIn]=useState<number|undefined>(undefined);

    //INTERFACE
    //sin igual, permite fusionar varios tiops declarados en otros momentos, no necesariamente todos en la misma declaracion

    interface recetaBase{
        agua:number;
    }

    interface recetaBase{
        cafe:number;
    }
    //Como en POO se puede heredar las propiedades de un Padre a un hijo y agregar segun la necesidad
    interface recetaAzucar extends recetaBase{azucar:number}
    //Poner ? despues de una propiedad de una interface hace que no sea obligatoria
    interface maquinaCafe{
        modelo:string;
        aguaMax:number;    
    }
    //MERGIN = fusionar propiedades pornombre
    const maquina:maquinaCafe={modelo:"Kame-500",aguaMax:2000}

    function prepararCafe(receta:recetaCafe):cafePreparado {
        const intensidad=receta.cafe>10?"fuerte":"suave";

        return{
            mensaje:`Cafe listo con ${receta.agua}ml de agua y ${receta.cafe}g de cafe ${receta.azucar?`+ ${receta.azucar}g de azucar`:``}`,
            intensidad:intensidad
        }
    }

    interface cafePreparadoI{
        mensaje:string;
        intensidad:"suave"|"fuerte"
    }

    function prepararCafeI(receta:recetaAzucar):cafePreparadoI{
        const intensidad:cafePreparadoI['intensidad']=receta.cafe>10?'fuerte':'suave'

        return {mensaje:`CAFE CON INTERFAZ LISTO: con ${receta.agua}ml de agua + ${receta.cafe}g de cafe + ${receta.azucar}g de azucar`,
        intensidad:intensidad
    }
    }
    //Se puede desestructurar una interfaz para declarar valores por defecto
    function prepararCafeI2({agua=0,cafe=0,azucar=0}:recetaAzucar):cafePreparadoI{
        const intensidad:cafePreparadoI['intensidad']=cafe>10?'fuerte':'suave'

        return {mensaje:`CAFE CON INTERFAZ LISTO: con ${agua}ml de agua + ${cafe}g de cafe + ${azucar}g de azucar`,
        intensidad:intensidad
    }
    }

    const onCafeI=()=>{
        const resultado=prepararCafeI({agua:200,cafe:15,azucar:5});
        alert(`CAFE PREPARADO:${resultado.mensaje}\nINTENSIDAD: ${resultado.intensidad}`);
    }

    const onCafe=()=>{
        const resultado=prepararCafe({agua:200,cafe:15,azucar:5});
        alert(`CAFE PREPARADO:${resultado.mensaje}\nINTENSIDAD: ${resultado.intensidad}`);
    }

    //intersecciones
    type A={
        nombre:string
    }

    type B={
        edad:number
    }

    type C={
        state?:boolean
    }

    type Persona=A&B&C

    const bryanObject:Persona={nombre:'Bryan',edad:20,state:false}

  return (
    <div className="min-h-screen bg-amber-300 text-black flex flex-col items-center gap-5 p-6">
        <span>HACER CAFE CON TYPE</span>
    <button className="bg-amber-950 text-white rounded-2xl px-4 py-2" onClick={onCafe}>PREPARAR</button>
    <span>HACER CAFE Interface</span>
    <button className="bg-black text-white rounded-2xl px-4 py-2" onClick={onCafeI}>PREPARAR Con interfaz</button>
    <span>state tipados</span>
    {intensidadUI}
    <button className="rounded-md px-3 py-1" onClick={()=>setintensidadUI('fuerte')}>cambiar state</button>

    <span>Contador</span>
    <button onClick={dec} className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-50">-</button>
    <span className="min-w-[3ch] text-center text-2xl font-semibold text-black">{count}</span>
    <button onClick={inc} className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-50">+</button>
    <h2>Interseccion (&)</h2>
    {bryanObject.nombre} + {bryanObject.edad} + {bryanObject.state}

    <pre>{JSON.stringify(bryanObject,null,2)}</pre>
    </div>
  )
}