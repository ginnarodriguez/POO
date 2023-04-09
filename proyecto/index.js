

import {CuentaCorriente} from "./CuentaCorriente.js";
import {Cliente} from "./Cliente.js";

const cliente1= new Cliente("Gabi", "52639852", "52639852" );
/*console.log(cliente1); */

const cuentaCorriente1 = new CuentaCorriente(cliente1,"266", "001");
console.log(cuentaCorriente1);


let saldo = cuentaCorriente1.verSaldo();
saldo = cuentaCorriente1.depositoEnCuenta(100);
/*console.log("El saldo actual es " + saldo);*/



const cliente2= new Cliente();
 cliente2.nombreCliente = "María";
 cliente2.identiCliente = "20856396";
 cliente2.rutCliente = "20856396"

const cuentaCorriente2 = new CuentaCorriente();
cuentaCorriente2.numeroCuenta = "257";
cuentaCorriente2.agencia = "001";
cuentaCorriente2.cliente = cliente2;
/*console.log(cuentaCorriente2.cliente);*/

/*cuentaCorriente1.transferirParaCuenta(50,cuentaCorriente2)
let saldoMaria = cuentaCorriente2.verSaldo();
console.log("El saldo actual es " + saldoMaria);

let saldoGabi = cuentaCorriente1.verSaldo();
console.log("El saldo actual es " + saldoGabi);*/


console.log(CuentaCorriente.cantidadCuentas);






