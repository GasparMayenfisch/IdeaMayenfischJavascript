
var seleccservicio =prompt("Por favor seleccionar el servicio que quiere cotizar");
var condicioncliente=prompt("Por favor indique si es una Empresa o particular");
var selecctiempo=prompt("Por favor seleccionar la cantidad de dias en el que desea que se realice el servicio");
const servicios = [
                {nombre:'Limpieza de motores' ,  costo:17000},
                {nombre:'Mantenimiento de motores' ,  costo:25000},
                {nombre:'Inspeccion de sistema electrico' ,  costo:14000},
                {nombre:'Control y Mantenimiento de valvulas de presion' ,  costo:23000},
                {nombre:'Mantenimiento de linea de montaje' ,  costo:34000},
                {nombre:'Limpieza de Bateas' ,  costo:22000},
                {nombre:'Certificaciones de Seguridad'  , costo:19000}
];
const cliente = [
            {condicion:'empresa',costo:0},
            {condicion:'particular',costo:3500},
]
const tiempo = [
         {cantidad:'4 dias',costo:5000},
         {cantidad:'1 semana',costo:0},
         {cantidad:'2 semanas',costo:0},
         {cantidad:'1 mes',costo:-6000}
]

const servicioselec = servicios.map((el) => el.nombre === seleccservicio)
const defcliente = cliente.map((el) => el.condicion === condicioncliente)
const canttiempo = tiempo.map((el) => el.cantidad === selecctiempo)
const mitadcotizacion = servicioselec.concat(defcliente)
const cotizacion = mitadcotizacion.concat(canttiempo)
const total = cotizacion.reduce((acc, el) => acc + el.costo, 0)
console.log(total)
alert ("Su costo sera de" + total)





