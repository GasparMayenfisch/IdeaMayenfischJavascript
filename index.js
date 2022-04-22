
const servicios = [           
                {id:1,nombre:"Mantenimiento de motores" ,  costo:25000},
                {id:2,nombre:"Limpieza de Bateas" ,  costo:22000},                
                {id:3,nombre:"Inspeccion y regulacion sistemas" ,  costo:23000},
                {id:4,nombre:"Mantenimiento de sistemas de vapor ,agua y gas" ,  costo:34000},
                {id:5,nombre:"Revision lineas de montaje" ,  costo:22000},
                {id:6,nombre:"Revision y mantenimiento de instalaccion electrica" ,  costo:14000},
                
];
const cliente = [
            {condicion:"empresa",costo:0},
            {condicion:"particular",costo:3500},
]
const tiempo = [
         {cantidad:"4 dias",costo:5000},
         {cantidad:"1 semana",costo:0},
         {cantidad:"2 semanas",costo:0},
         {cantidad:"1 mes",costo:-6000}
]

function empresa() {
    return costo * 0.85
}
function particular() {
    return costo * 1.10
}
function tipocliente1(servicio,empresa) {
    for (const el of servicio){
        empresa(el)
    }
}
function tipocliente2(servicio,particular) {
    for (const el of servicio){
        particular(el)
    }
}

function tiempo4dias() {
    return costo * 1.25
}
function tiempo1mes() {
    return costo * 0.70
}

function recargodias(servicio,tiempo4dias) {
    for (const el of servicio ){
        tiempo4dias(el)
    }
    
}
function descuentoodias(servicio,tiempo1mes) {
    for (const el of servicio ){
        tiempo1mes(el)
    }
    
}



let boton1 =document.getElementById(serv1)
let boton2 =document.getElementById(serv2)
let boton3 =document.getElementById(serv3)
let boton4 =document.getElementById(serv4)
let boton5 =document.getElementById(serv5)
let boton6 =document.getElementById(serv6)
boton1.addEventListener("click",seleccionservicio1)
boton2.addEventListener("click",seleccionservicio2)
boton3.addEventListener("click",seleccionservicio3)
boton4.addEventListener("click",seleccionservicio4)
boton5.addEventListener("click",seleccionservicio5)
boton6.addEventListener("click",seleccionservicio6)
function seleccionservicio1(){
    const indexservicio =servicios.indexOf ("Mantenimiento de motores")
    const servicio =servicios.slice(indexservicio,indexservicio)
    if (condicioncliente==="empresa" && cantidadtiempo==="4dias") {
        tipocliente1()
        recargodias()
        alert(servicio)
        
    } else if (condicioncliente==="empresa") {
        tipocliente1()
        alert(servicio)
    }
     else if (selecctiempo==="4dias") {
        recargodias()
        alert(servicio)
    
    } else if (condicioncliente==="particular" && cantidadtiempo==="1mes") {
            tipocliente2()
            descuentoodias()
            alert(servicio)
        
    
    } else if (cantidadtiempo==="1mes") {
        descuentoodias()
        alert(servicio)
    
    } else if (condicioncliente==="particular") {
        tipocliente2()
        alert(servicio)
        
    }
    else{
        alert(servicio)
    }
}
function seleccionservicio2(){
    const indexservicio =servicios.indexOf("Limpieza de bateas")
const servicio =servicios.slice(indexservicio,indexservicio)
if (condicioncliente==="empresa" && cantidadtiempo==="4dias") {
    tipocliente1()
    recargodias()
    alert(servicio)
    
} else if (condicioncliente==="empresa") {
    tipocliente1()
    alert(servicio)
}
 else if (selecctiempo==="4dias") {
    recargodias()
    alert(servicio)

} else if (condicioncliente==="particular" && cantidadtiempo==="1mes") {
        tipocliente2()
        descuentoodias()
        alert(servicio)
    

} else if (cantidadtiempo==="1mes") {
    descuentoodias()
    alert(servicio)

} else if (condicioncliente==="particular") {
    tipocliente2()
    alert(servicio)
    
}
else{
    alert(servicio)
}
}
function seleccionservicio3(){
    const indexservicio =servicios.indexOf("Inspeccion y regulacion sistemas")
const servicio =servicios.slice(indexservicio,indexservicio)
if (condicioncliente==="empresa" && cantidadtiempo==="4dias") {
    tipocliente1()
    recargodias()
    alert(servicio)
    
} else if (condicioncliente==="empresa") {
    tipocliente1()
    alert(servicio)
}
 else if (selecctiempo==="4dias") {
    recargodias()
    alert(servicio)

} else if (condicioncliente==="particular" && cantidadtiempo==="1mes") {
        tipocliente2()
        descuentoodias()
        alert(servicio)
    

} else if (cantidadtiempo==="1mes") {
    descuentoodias()
    alert(servicio)

} else if (condicioncliente==="particular") {
    tipocliente2()
    alert(servicio)
    
}
else{
    alert(servicio)
}
}
function seleccionservicio4(){
    const indexservicio =servicios.indexOf("Mantenimiento sistemas de vapor,agua y gas")
    const servicio =servicios.slice(indexservicio,indexservicio)
    if (condicioncliente==="empresa" && cantidadtiempo==="4dias") {
        tipocliente1()
        recargodias()
        alert(servicio)
        
    } else if (condicioncliente==="empresa") {
        tipocliente1()
        alert(servicio)
    }
     else if (selecctiempo==="4dias") {
        recargodias()
        alert(servicio)
    
    } else if (condicioncliente==="particular" && cantidadtiempo==="1mes") {
            tipocliente2()
            descuentoodias()
            alert(servicio)
        
    
    } else if (cantidadtiempo==="1mes") {
        descuentoodias()
        alert(servicio)
    
    } else if (condicioncliente==="particular") {
        tipocliente2()
        alert(servicio)
        
    }
    else{
        alert(servicio)
    }
}
function seleccionservicio5(){
    const indexservicio =servicios.indexOf("Revision de lineas de montaje")
    const servicio =servicios.slice(indexservicio,indexservicio)
    if (condicioncliente==="empresa" && cantidadtiempo==="4dias") {
        tipocliente1()
        recargodias()
        alert(servicio)
        
    } else if (condicioncliente==="empresa") {
        tipocliente1()
        alert(servicio)
    }
     else if (selecctiempo==="4dias") {
        recargodias()
        alert(servicio)
    
    } else if (condicioncliente==="particular" && cantidadtiempo==="1mes") {
            tipocliente2()
            descuentoodias()
            alert(servicio)
        
    
    } else if (cantidadtiempo==="1mes") {
        descuentoodias()
        alert(servicio)
    
    } else if (condicioncliente==="particular") {
        tipocliente2()
        alert(servicio)
        
    }
    else{
        alert(servicio)
    }
}
function seleccionservicio6(){
    const indexservicio =servicios.indexOf("Revision y mantenimiento instalaciones electricas")
    const servicio =servicios.slice(indexservicio,indexservicio)
    if (condicioncliente==="empresa" && cantidadtiempo==="4dias") {
        tipocliente1()
        recargodias()
        alert(servicio)
        
    } else if (condicioncliente==="empresa") {
        tipocliente1()
        alert(servicio)
    }
     else if (selecctiempo==="4dias") {
        recargodias()
        alert(servicio)
    
    } else if (condicioncliente==="particular" && cantidadtiempo==="1mes") {
            tipocliente2()
            descuentoodias()
            alert(servicio)
        
    
    } else if (cantidadtiempo==="1mes") {
        descuentoodias()
        alert(servicio)
    
    } else if (condicioncliente==="particular") {
        tipocliente2()
        alert(servicio)
        
    }
    else{
        alert(servicio)
    }
}
let condicionc =document.getElementById(formulariocliente)
condicionc.addEventListener("click",seleccliente)
function seleccliente(e) {
    e.preventdefault();
    let condicioncliente= e.target
    console.log(condicioncliente);
}
let cantidadt =document.getElementById(formulariocliente)
condicionc.addEventListener("submit",selectiempo)
function selectiempo(e) {
    e.preventdefault();
    let cantidadtiempo = e.target
    console.log(cantidadtiempo);
}

let formulariosugerencia = document.getElementById(formulariosugerencia);
formulariosugerencia.addEventListener("submit",procesarformulario);

function procesarformulario(e) {
        e.preventdefault();
        let sugerencia = e.target
        sugerencias.push=(sugerencia)  
}
const sugerencias = []