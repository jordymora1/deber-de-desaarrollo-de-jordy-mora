

var caja=document.getElementById('puntos');

caja.innerHTML+="<div class='nuevo' ><ol type='A'><li id='sus nombres'></li><li></li><li id='borrar'></li><li></li><li id='modificar'></li></ol> </div>"

var nombre=document.getElementById(' sus nombres');
nombre.innerHTML=`jordy mora`;

document.getElementById('parrafo').setAttribute("id","parrafos");
var parrafos=document.getElementsByTagName('p');


var borrar=document.getElementById('borrar');
let texto= 'edad';
const boto=document.createElement('button');
boto.innerHTML =`${texto}`;

boto.addEventListener('click',function(){

    const n = ()=>{
        for(let x=0;x<parrafo.length;x++){
            parrafo[x].innerHTML=``;
        }
    }
    n();
}
 
);

borrar.appendChild(boto)

var modificar=document.getElementById('modificar');
modificar.innerHTML=`babahoyo`;

const bot=document.createElement('button');
bot.innerHTML =`Modificar el elemento requerido `;

bot.addEventListener('click',function(){

    const n = ()=>{
        let texto=prompt('Ingrese texto: ')
        modificar.innerHTML=texto;
        alert(' se cambio con exito')
    }
    n();
}
 
);

punto.appendChild(bot);