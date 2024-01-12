//class Cliente{
//    nome;
//    cpf;
//    agencia;
//    saldo;
//}

//cliente1 = new Cliente();
//cliente2 = new Cliente();

//cliente1.nome = "Gustavo";
//cliente1.cpf = 11122233309;
//cliente1.agencia = 1010;
//cliente1.saldo = 0;

//cliente2.nome = "Nathalia";
//cliente2.cpf = 77722233309;
//cliente2.agencia = 1010;
//cliente2.saldo = 0;

//cliente3.nome = "Bruna";
//cliente3.cpf = 44422233309;
//cliente3.agencia = 1010;
//cliente3.saldo = 0;

//app.js

class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    saldo;

    sacar (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
    depositar (valor) {
        if (valor>0) {
            this.saldo = this.saldo + valor;
        }
        console.log(ContaCorrenteGustavo.saldo);
    }
};

cliente1 = new Cliente();
cliente2 = new Cliente();
//cliente3 = new Cliente();

cliente1.nome = "Gustavo";
cliente1.cpf = 11122233309;

cliente2.nome = "Nathalia";
cliente2.cpf = 77722233309;

//cliente3.nome = "Bruna";
//cliente3.cpf = 44422233309;
//cliente3.agencia = 1010;
//cliente3.saldo = 1000;

const ContaCorrenteGustavo = new ContaCorrente();
ContaCorrenteGustavo.saldo = 0;
ContaCorrenteGustavo.agencia = 1001;


console.log(ContaCorrenteGustavo.saldo);
ContaCorrenteGustavo.saldo = 100;
console.log(ContaCorrenteGustavo.saldo);
//let valorSacado = 200;
//ContaCorrenteGustavo.saldo -= valorSacado;
ContaCorrenteGustavo.sacar(50);
console.log(ContaCorrenteGustavo.saldo)

console.log(ContaCorrenteGustavo.saldo);
ContaCorrenteGustavo.depositar(100);
ContaCorrenteGustavo.depositar(200);
ContaCorrenteGustavo.depositar(-1);



console.log(cliente1, cliente2);