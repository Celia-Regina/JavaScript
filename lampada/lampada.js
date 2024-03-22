const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

//funcao: imagem quebrada
//quando tiver quebrada para todas as outras acoes e nao volta ao normal mais
//so é verdadeira quando achar a imagem quebrada
function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1 //procura a palavra quebrada
}

//so quando o liga e desliga SE NAO TIVER QUEBRADA

//funcao: imagem ligada
function lampOn () {
    if ( !isLampBroken () ) {//se nao tiver quebrada troca
        lamp.src = './img/ligada.jpg';
    }
}
//funcao: imagem desligada
function lampOff () {
    if ( !isLampBroken () ) {//se nao tiver quebrada troca
        lamp.src = './img/desligada.jpg';
    }
}
//funcao: imagem desligada
function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}
//quando clicar liga
turnOn.addEventListener ( 'click', lampOn );
//quando clicar desliga
turnOff.addEventListener ( 'click', lampOff );
//quando passar o mouse liga
lamp.addEventListener ( 'mouseover', lampOn );
//passar o mouse fora
lamp.addEventListener ( 'mouseleave', lampOff );
//duplo click quebra
lamp.addEventListener ( 'dblclick', lampBroken );
