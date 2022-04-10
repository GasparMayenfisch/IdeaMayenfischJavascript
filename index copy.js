
var seleccservicio=prompt("Por favor seleccionar el indice del servicio que quiere adquirir con el prefijo serv delante (1-7)");
var selecchorario=prompt("Por favor seleccionar el turno que usted prefiera");
var selecctiempo=parseInt(prompt("Por favor seleccionar la cantidad de dias en el que desea que se realice el servicio"));
let recargo1=6000
let recargo2=8000
let recargo3=5000
let descuento1=5000

let servicio
let costoadicional1
let costoadicional
let costofinal
var servicio1=17000
var servicio2=25000
var servicio3=14000
var servicio4=23000
var servicio5=34000
var servicio6=22000
var servicio7=19000

if (seleccservicio==="serv1") {
    
    alert("Limpieza de motores")      
}
else if (seleccservicio==="serv2") {
    
    alert("Mantenimiento de motores")
} 
else if (seleccservicio==="serv3") {
    
    alert("Inspeccion de sistema electrico")
} 
else if (seleccservicio==="serv4") {
    
    alert("Control y Mantenimiento de valvulas de presion")
} 
else if (seleccservicio==="serv5") {
    alert("Mantenimiento de linea de montaje")
}
else if (seleccservicio==="serv6") {
    alert("Limpieza de Bateas")
} 
else if (seleccservicio==="serv7") {
    alert("Certificaciones de Seguridad")
} 
else if (seleccservicio==="serv8") {
    alert("Capacitacion Protocolos de evacuacion")
} else {
    alert("Por favor ingrese un Servicio Valido")
}
if (selecchorario==="Mañana") {
    alert("No hay adcionales")
}
else if (selecchorario==="Tarde") {
    alert("No hay adicionales")
} 
else if (selecchorario==="Noche") {
    alert("Recargo del 25%")
} else {
    alert("Por favor seleccione un horario")
}
if (selecctiempo==1) {
    alert("Se realizara en el dia con llevara cargos adicionales")
}
else if (selecctiempo==2) {
    alert("Se realizara en 2 dias con llevara cargos adicionales")
} 
else if (selecctiempo==3) {
    alert("Se realizara en 3 dias")
} 
else if (selecctiempo==4) {
    alert("Se realizara en 4 dias")
} 
else if (selecctiempo==5) {
    alert("Se realizara en  5 dias")
} 
else if (selecctiempo==7) {
    alert("Se realizara en 7 dias")
} 
else if (selecctiempo==8) {
    alert("Se realizara en 8 dias se les hara un descuento")
} else {
    alert("Por favor seleccione el tiempo a realizarse el servicio")
}

function serv() {
    if (seleccservicio==="serv1") {
        servicio=servicio1
    }
    else if (seleccservicio==="serv2") {
        servicio=servicio2
    }
    else if (seleccservicio==="serv3") {
        servicio=servicio3
    }
    else if (seleccservicio==="serv4") {
        servicio=servicio4
    }
    else if (seleccservicio==="serv5") {
        servicio=servicio5
    }
    else if (seleccservicio==="serv6") {
        servicio=servicio6
    }
    else if (seleccservicio==="serv7") {
        servicio=servicio7
    }
    
    
}
function recargos(){
    serv();
    if (selecchorario=="Noche") {
        costoadicional1=(servicio+recargo1)
        
    }
    else{
        costoadicional1=0
    }    
    if (selecctiempo==1) {
        costoadicional=(costoadicional1+recargo2)
    }
    else if (selecctiempo==2) {
        costoadicional=(costoadicional1+recargo3)
    }   
    else{
        costoadicional=0
    }
}
function descuento(){
    serv();
    if (selecctiempo==8) {
        preciodescuento=(servicio-descuento1)
    }
    else{
        preciodescuento=0
    }
}
if (seleccservicio=="serv1") {
    serv();  
    recargos();
    descuento();
   if ((preciodescuento !=0) || (costoadicional !=0)){
    costofinal=(costoadicional-preciodescuento)  
}
    else{
        costofinal=servicio
    }
   alert("su costo final es" + costofinal)
   
    
}
else if (seleccservicio=="serv2") {
    serv();
    recargos();
    descuento();
    if ((preciodescuento !=0) || (costoadicional !=0)){
        costofinal=(costoadicional-preciodescuento)  
    }
    
     else{
         costofinal=servicio
     }
    alert("su costo final es" + costofinal)
    
} 
    

else if (seleccservicio=="serv3") {
    serv();
    recargos();
    descuento();
    if ((preciodescuento !=0) || (costoadicional !=0)){
        costofinal=(costoadicional-preciodescuento)  
    }
     else{
         costofinal=servicio
     }
    alert("su costo final es" + costofinal)
    
}
    

else if (seleccservicio=="serv4") {
    serv();
    recargos();
    descuento();
    if ((preciodescuento !=0) || (costoadicional !=0)){
        costofinal=(costoadicional-preciodescuento)  
    }
     
     else{
         costofinal=servicio
     }
    alert("su costo final es" + costofinal)
    
} 
    

else if (seleccservicio=="serv5") {
    serv();
    recargos();
    descuento();
    if ((preciodescuento !=0) || (costoadicional !=0)){
        costofinal=(costoadicional-preciodescuento)  
    }
     else{
         costofinal=servicio
     }
    alert("su costo final es" + costofinal)
    console.log(costofinal);
    
} 
    

else if (seleccservicio=="serv6") {
    serv();
    recargos();
    descuento();
    if ((preciodescuento !=0) || (costoadicional !=0)){
        costofinal=(costoadicional-preciodescuento)  
    }
     else{
         costofinal=servicio
     }
    alert("su costo final es" + costofinal)
    
} 
    

else if (seleccservicio=="serv7") {
    serv();
    recargos();
    descuento();
    if ((preciodescuento !=0) || (costoadicional !=0)){
        costofinal=(costoadicional-preciodescuento)  
    }
     else{
         costofinal=servicio
     }
    alert("su costo final es" + costofinal)
    
} 
    
else{
 alert("por favor reintente el proceso")
}



