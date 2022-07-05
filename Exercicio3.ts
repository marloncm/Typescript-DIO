	// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

    let botaoAtualizar = document.getElementById('atualizar-saldo')as HTMLButtonElement;
    let botaoLimpar = document.getElementById('limpar-saldo')as HTMLButtonElement;
    let soma = document.getElementById('soma') as HTMLInputElement;
    let campoSaldo = document.getElementById('campo-saldo') //as HTMLTextAreaElement;

    
    if(campoSaldo)
    var saldo = Number(campoSaldo.innerHTML);
    
    
    //saldo = 0// String(0) ;

   
    
    function somarAoSaldo(soma:number) {
        if(campoSaldo)
        campoSaldo.innerHTML += soma;
    }
    
    function limparSaldo() {
        if(campoSaldo)
        saldo = 0;
    }
    
    if(botaoAtualizar)
    botaoAtualizar.addEventListener('click',  () => {
        if(soma)
        somarAoSaldo(Number(soma.innerHTML));
    });
    
    if(botaoLimpar)
    botaoLimpar.addEventListener('click', () =>{
        limparSaldo();
    });
    
    /**
        <h4>Valor a ser adicionado: <input id="soma"> </h4>
        <button id="atualizar-saldo">Atualizar saldo</button>
        <button id="limpar-saldo">Limpar seu saldo</button>
        <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
     */