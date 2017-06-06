
function ocultar(){   
    var imgn = document.images[0];
    if(document.getElementById('1').innerHTML==="mostrar"){
        document.getElementById('2').style.display = 'block';
        document.getElementById('1').innerHTML="ocultar"; 
        
        alert("1");
       
        if(imgn===undefined){
        var imagen= document.createElement("img");
        imagen.setAttribute("src","imagenes/carro2.jpeg");
        var new_parrafo = document.createElement('p').appendChild(imagen);      
        var oculImagen= document.getElementById('A').getElementsByTagName('p')[1];
        document.getElementById('A').insertBefore(new_parrafo,oculImagen);
        }else{
            imgn.style.display='block';
        }
         
        
    }else{
         document.getElementById('2').style.display = 'none';
        document.getElementById('1').innerHTML="mostrar";      
        alert("1");
       if(imgn!==undefined){
           imgn.style.display='none';
       }      
    }
}

function printDOM(node, prefix) {
console.log(node.nodeName);
for (let i = 0; i < node.childNodes.length; i++) {
printDOM(node.childNodes[i], prefix + ' ');
}
}
//printDOM(document, '');


function cambiarColor(){ 
    document.getElementById('2').style.background="#336699";
}

function cambiarColorTag(){
    var etiqueta =document.getElementsByTagName('p');
    for (let i = 0; i < etiqueta.length; i++) {
        etiqueta[i].style.background="red";
    }
}
/*cambiarColorTag()*/

function buscarPalabra(){
    var nodos = document.getElementsByTagName('*');
    //console.log(nodos);
    for(var i=0;i< nodos.length;i++){
        for(j=0;j<nodos[i].childNodes.length;j++){
            var hijos= nodos[i].childNodes[j];
            console.log(hijos);
            //hijos.style.background="#336699";
            /*for(k=0;k<hijos[j].length;k++){
                console.log(hijos[k]);
                 for(l=0;l<hijos[k].childNodes.length;l++){
                    var hijos2=hijos[k].childNodes[l];
                     console.log(hijos2);
                }
            }*/
            /*if(hijos[j]==="Lorem"){
                hijos[j].style.backgroundColor="blue";
            }*/
        }
    }
}
buscarPalabra();

var texto="";
function buscar(){
        var encontro=0;
        var donde=0;
        valor=document.getElementById('palabra').value;
        reemplazar=RegExp(valor,"i");
        por="<span style=\u0022background-Color:red;\u0022>"+valor+"</span>";
        if(texto==""){texto=document.body.innerHTML};
        txt=texto.split(">");
        for (x=0;x<txt.length;x++){
            desde=(txt[x].indexOf("<")!=-1)?txt[x].indexOf("<"):0;
            tempP=txt[x].slice(0,desde);
            tempU=txt[x].slice(desde);
            tempPx=tempP.split(" ");
            for(y=0;y<tempPx.length;y++){
                if(tempPx[y].search(reemplazar)!=-1){
                    tempPx[y]=tempPx[y].replace(reemplazar,por);
                    encontro+=1;
                }
            }
            txt[x]=tempPx.join(" ")+tempU;
        }
        document.body.innerHTML=txt.join(">");
        alert((encontro==0)?"No se encontro ''"+valor+"''":"Se encontraton "+encontro+" coincidencias");
        encontro=null;
        donde=null;
    }


function ONOFF(){
    if(document.getElementById('boton').innerHTML==="encender"){
        var encontro=0;
        var donde=0;
        valor=document.getElementById('palabra').value;
        reemplazar=RegExp(valor,"i");
        por="<span style=\u0022background-Color:red;\u0022>"+valor+"</span>";
        if(texto==""){texto=document.body.innerHTML};
        txt=texto.split(">");
        for (x=0;x<txt.length;x++){
            desde=(txt[x].indexOf("<")!=-1)?txt[x].indexOf("<"):0;
            tempP=txt[x].slice(0,desde);
            tempU=txt[x].slice(desde);
            tempPx=tempP.split(" ");
            for(y=0;y<tempPx.length;y++){
                if(tempPx[y].search(reemplazar)!=-1){
                    tempPx[y]=tempPx[y].replace(reemplazar,por);
                    encontro+=1;
                }
            }
            txt[x]=tempPx.join(" ")+tempU;
        }
        document.body.innerHTML=txt.join(">");
        document.getElementById('boton').innerHTML="apagar"; 
    }else{
        var encontro=0;
        var donde=0;
        valor=document.getElementById('palabra').value;
        reemplazar=RegExp(valor,"i");
        por="<span style=\u0022background-Color:white;\u0022>"+valor+"</span>";
        if(texto==""){texto=document.body.innerHTML};
        txt=texto.split(">");
        for (x=0;x<txt.length;x++){
            desde=(txt[x].indexOf("<")!=-1)?txt[x].indexOf("<"):0;
            tempP=txt[x].slice(0,desde);
            tempU=txt[x].slice(desde);
            tempPx=tempP.split(" ");
            for(y=0;y<tempPx.length;y++){
                if(tempPx[y].search(reemplazar)!=-1){
                    tempPx[y]=tempPx[y].replace(reemplazar,por);
                    encontro+=1;
                }
            }
            txt[x]=tempPx.join(" ")+tempU;
        }
        document.body.innerHTML=txt.join(">");
        
    }
}