
//Variável

let sinal = 'verde';

switch(sinal){

case 'verde':
    console.log('pode passar');
break;

case 'amarelo':
    console.log ('atenção, prestes a fechar');
break;

case 'vermelho':
    console.log('Fechado, pare!');
break;

// Se a informação inserida na varíavel não corresponder as informações contidas nos cases, a console irá exibir a mensagem "Sinal Inválido) 
      
default:
    console.log('Sinal Inválido')
}
