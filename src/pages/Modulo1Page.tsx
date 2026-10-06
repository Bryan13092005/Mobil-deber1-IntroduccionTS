import {calcularDanioFlecha} from '../utils/CalcularDanioFlecha'
export const Modulo1Page = () => {
    //valor inferido cuando TS asume el tipo de dato
    let saga="Saiyan Saga";
    //valor anotado
    let horasEntrenamiento:number=36;

    //TIPOS BASICOS
    let guerrero:string="Goku";
    let ki:number=9001;
    const enCombate:boolean=true

    //ARRAYS, LISTAS ETC
    //array
    const equipoZ:string[]=["Goku","Vegeta", "Gohan","Piccolo"];
    //tupla
    //varios datos anotado el tipo para limitar el numero de elementos
    const coordenadas:[number,number,string]=[42,17,'holiiiii'];
    //array con varios datos anotados con diferente tipo en cualquier posicion
    const varios:(string|boolean|number)[]=["hola",true,1,5,8,false];

    //funciones tipadas
    //si pones en los parametros el tipeo no es necesario poner para el return
    function calcularDanio(base:number,multiplicador:number):number{
        return base*multiplicador
    }



    //valor null
    //string no puede ser nulo, pero puedo ponerle que TS acepte otro valor :string|number|...
    let transformacion:string|null =null
    transformacion='Super Saiyan'
    let estrategia:string|undefined=undefined
    estrategia='Transformarse a ultra instinto'

    //any (anula el tipado JS normal) y unknow (mas controlado permite hacer validaciones especificas segun el caso)
    let variableLibre:any="Semilla del Ermitanio"
    variableLibre=5

    let evento:unknown='Refuezo'
    let eventoMayus:string|null=null

    if(typeof evento==="string"){
        eventoMayus=evento.toUpperCase();
    }

  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-100 antialiased'>
        <div className='mx-auto max-w-3xl p-8'>
            <header>
                <h1 className="text-3xl font-semibold text-blue-500">
                    REACT + TS - MODULO 1
                </h1>
                <p className="text-sm text-neutral-400">
                    Fundamentos: tipos basicos, arrays y tuplas
                </p>
            </header>
            <section className="mb-8">
                <h2 className="text-xl font-medium text-blue-300 mb-2">Inferencia y Basicos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
                    <div> Saga: {saga}</div>
                    <div> Horas de Entrenamiento: {horasEntrenamiento}</div>
                    <div>Guerrero: {guerrero}</div>
                    <div>Ki: {ki}</div>
                    <div>En Combate: {enCombate?'SI':'NO'}</div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-medium text-blue-300 mb-2">Arrays</h2>
                <div>
                    Equipo Z: {equipoZ.join(',')}
                </div>
                <h2 className="text-xl font-medium text-blue-300 mb-2">Arrays</h2>
                <div>
                    Coordenadas [num,num,hola]: x={coordenadas[0]}, y={coordenadas[1]}, saludo={coordenadas[2]}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-medium text-blue-300 mb-2">Funciones tipadas</h2>
                <div>
                    <p>Danio (base 450 x mul.2 )</p>
                    <span>{calcularDanio(450,2)}</span>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-medium text-blue-300 mb-2">Any y Desconocido (unknow)</h2>
                <div>
                    <div>Any: {variableLibre}</div>
                    <div>Unknow: {eventoMayus}</div>
                </div>
            </section>
        </div>
    </main>
)
}
