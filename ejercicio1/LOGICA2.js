const lista=document.querySelector('ul');
let nuevo;

const boton=document.createElement('button');
boton.innerHTML =`añadir nuevo elemento`;

boton.addEventListener('click',function(){

    const n = ()=>{
        
        let texto=prompt('por favor colocque el  nuevo tipo de dato: ');
        const item= document.createElement('li');
        item.innerHTML=texto;  
        lista.appendChild(item);
    }
    n();
}
 
);

botn.appendChild(boton);