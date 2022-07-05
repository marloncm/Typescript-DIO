	// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

    let botaoAtualizar = document.getElementById('atualizar-saldo')as HTMLButtonElement;
    let botaoLimpar = document.getElementById('limpar-saldo')as HTMLButtonElement;
    let soma = document.getElementById('soma') as HTMLInputElement;
    let campoSaldo = document.getElementById('campo-saldo') 

    
    var saldo = 0;
    console.log('teste')
    console.log('Saldo: '+ saldo)
    
    function somarAoSaldo(soma:number) {
        console.log('chamou soma')
        if(campoSaldo){
            console.log('tem saldo pra somar')
            saldo += soma;
            campoSaldo.innerHTML = saldo.toString()
            console.log("somou")
            limparCampoSoma()
        } 
    }
    
    function limparSaldo() {
        if(campoSaldo){
            console.log("tem saldo pra limpar")
            saldo = 0;
            campoSaldo.innerHTML = saldo.toString()
            console.log("limpou saldo")
        }
    }
    
    if(botaoAtualizar){
        console.log("clicou em atualizar")
        botaoAtualizar.addEventListener('click',  () => {
            if(soma)
            somarAoSaldo(Number(soma.innerHTML));
        });

    }
    
    
    if(botaoLimpar){
        console.log("clicou em limpar")

        botaoLimpar.addEventListener('click', () =>{
            limparSaldo();
        });
    }
    
    

    function limparCampoSoma(){
        soma.innerHTML = ''
        console.log("limpou soma")
    }

    /**
        <h4>Valor a ser adicionado: <input id="soma"> </h4>
        <button id="atualizar-saldo">Atualizar saldo</button>
        <button id="limpar-saldo">Limpar seu saldo</button>
        <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
     */