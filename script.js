const mapa = document.querySelector('#container');

for(let i = 0; i < 9; i++){

    const caixa = document.createElement('div');
    caixa.setAttribute('id', 'caixa');
    mapa.appendChild(caixa);

}

let clique = document.querySelectorAll('#caixa');

//ARRAY


//LOOP ADD EVENT LISTENER
for(let i = 0; i < clique.length; i++){

    clique[i].addEventListener('click', criar);

}

//FUNCTION CRIAR ELEMENTO

let round = 0;

function criar(){

    round++;
    
    let circulo = document.createElement('p');

    //validação pra nao repetir elementos

    if(event.target.innerText == ''){
        
        circulo.innerText = 'o';
        console.log('ESCREVEU O');
        event.target.appendChild(circulo);

        
        verificarJogo();

            //CASO DÊ VELHA

        velha();

        if(fim === false){ 

            let num = (Math.random() * 8).toFixed();

            while(clique[num].innerText != ''){
                
                num = (Math.random() * 8).toFixed();

            }
            
            clique[num].innerText = 'x'
            console.log('ESCREVEU X');

            verificarJogo();
        }
    }

}

//VALIDAÇÃO *ERRADA* PORÉM FUNCIONAL

const vencedor = 'ganhou'
const perdedor = 'perdeu'

function verificarJogo(){

        //SE GANHAR

    //horizontais

    if(clique[0].innerText == 'o' && clique[1].innerText == 'o' && clique[2].innerText == 'o'){terminou(vencedor);}
    if(clique[3].innerText == 'o' && clique[4].innerText == 'o' && clique[5].innerText == 'o'){terminou(vencedor);}
    if(clique[6].innerText == 'o' && clique[7].innerText == 'o' && clique[8].innerText == 'o'){terminou(vencedor);}

    //verticais

    if(clique[0].innerText == 'o' && clique[3].innerText == 'o' && clique[6].innerText == 'o'){terminou(vencedor);}
    if(clique[1].innerText == 'o' && clique[4].innerText == 'o' && clique[7].innerText == 'o'){terminou(vencedor);}
    if(clique[2].innerText == 'o' && clique[5].innerText == 'o' && clique[8].innerText == 'o'){terminou(vencedor);}

    //diagonais

    if(clique[0].innerText == 'o' && clique[4].innerText == 'o' && clique[8].innerText == 'o'){terminou(vencedor);}
    if(clique[2].innerText == 'o' && clique[4].innerText == 'o' && clique[6].innerText == 'o'){terminou(vencedor);}


        //SE PERDER


    //horizontais

    if(clique[0].innerText == 'x' && clique[1].innerText == 'x' && clique[2].innerText == 'x'){terminou(perdedor);}
    if(clique[3].innerText == 'x' && clique[4].innerText == 'x' && clique[5].innerText == 'x'){terminou(perdedor);}
    if(clique[6].innerText == 'x' && clique[7].innerText == 'x' && clique[8].innerText == 'x'){terminou(perdedor);}

    //verticais

    if(clique[0].innerText == 'x' && clique[3].innerText == 'x' && clique[6].innerText == 'x'){terminou(perdedor);}
    if(clique[1].innerText == 'x' && clique[4].innerText == 'x' && clique[7].innerText == 'x'){terminou(perdedor);}
    if(clique[2].innerText == 'x' && clique[5].innerText == 'x' && clique[8].innerText == 'x'){terminou(perdedor);}

    //diagonais

    if(clique[0].innerText == 'x' && clique[4].innerText == 'x' && clique[8].innerText == 'x'){terminou(perdedor);}
    if(clique[2].innerText == 'x' && clique[4].innerText == 'x' && clique[6].innerText == 'x'){terminou(perdedor);}

}

let fim = false;

function terminou(player){


    if(player == vencedor){

        fim = true;

        let intervalo = setInterval(() => {
            if(fim){
                clearInterval(intervalo);
                window.alert(`O jogo terminou. Você ${player}!`);
                location.reload();
            }
        }, 100);

    }
    
    if(player == perdedor){

        fim = true;

        let intervalo = setInterval(() => {
            if(fim){
                clearInterval(intervalo);
                window.alert(`O jogo terminou. Você ${player}!`);
                location.reload();
            }
        }, 100);

    }

}

function velha(){

    if(round >=5 && fim === false){

        fim = true;

        let intervalo = setInterval(() => {
            if(fim){
                clearInterval(intervalo);
                window.alert(`O jogo terminou. Ninguem ganhou!`);
                location.reload();
            }
        }, 100);

    }

}