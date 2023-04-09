import { Cliente } from "./Cliente.js";


export class CuentaCorriente
{
    #cliente;
    numeroCuenta;
    #saldoCuenta;
    agencia;
    static cantidadCuentas = 0;/*significa que este atributo es igual para todas las cuentas*/

    set cliente(valor){
        if(valor instanceof Cliente)
        this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente, numeroCuenta,agencia){
        this.#cliente=cliente;
        this.numeroCuenta = numeroCuenta;
        this.#saldoCuenta=0;
        this.agencia = agencia;
        CuentaCorriente.cantidadCuentas++;/*cada vez que se cree una cuenta lo va sumando*/
    }

    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldoCuenta += valor;
        return this.#saldoCuenta;
        }
        
    }

    retirarDeCuenta(valor){
        if(valor <= this.#saldoCuenta){
            this.#saldoCuenta -= valor;
        return this.#saldoCuenta;
        }
        
    }

    verSaldo(){
        return this.#saldoCuenta;
    }

    transferirParaCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}