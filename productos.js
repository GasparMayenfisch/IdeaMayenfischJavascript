const carrito= []
let entrada = prompt("por favor seleccionar los productos que desea")
const productos =[
            {nombre:'thiner industrial hydra 5l', precio:2000},
            {nombre:'desengrasante industrial', precio:1500},
            {nombre:'lubricante industrial', precio:800},
            {nombre:'tornillos', precio:300},
            {nombre:'soldadora', precio:17000},
            {nombre:'atornillador', precio:23000},
            {nombre:'lijadora', precio:27000}
]
const indexproducto = productos.indexOf(entrada)
const productosselec =productos.slice(indexproducto,indexproducto) 
class Producto {
        constructor (nombre,precio){
            this.nombre= nombre
            this.precio= precio
            this.vendido=false
        }

}
function chequeodestock() {
            if (cantidad!=0) {
                console.log("hay stock");
                
            } else {
                console.log("no hay stock");
            }
}
function recargomediodepago1 (){
        return precio * 1.20
}
function recargomediodepago2 (){
        return precio * 1.15
}
function recargomediodepago3 (){
        return precio * 0.90
}
function recargoamericanexpress(carrito,recargomediodepago1) {
    for (const el of carrito) {
        recargomediodepago1(el)
        
    }
    
}
function recargomastercard(carrito,recargomediodepago2) {
    for (const el of carrito) {
        recargomediodepago2(el)
        
    }
    
}
function recargovisa(carrito,recargomediodepago3) {
    for (const el of carrito) {
        recargomediodepago3(el)
        
    }
    
}

