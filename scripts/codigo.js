/*If simple 
let edad = 19;
if(edad >= 18){
    console.log("Es mayor de edad");
}
//If - else
let x = 10;
if(x > 0){
    console.log("Esun numero positivo");
}else{
    console.log("El numero es negativo o 0");
}
//Else - if
let hora = 11;
if(hora < 12){
    console.log("Buenos dias");
}else if(hora < 19){
    console.log("Buenas tardes");
}else{
    console.log("Buenas noches");
}*/
//While
/*let i = 8;
while(i <= 10){
    console.log(i);
    i += 1;
} */
//Do - while 
/*let x = 5;
do{
    console.log(x);
    x -= 1;

}while(x > 1);*/

//FOR 
/*let numeros = ["a","b","c","d"];
for (i = 0; i<numeros.length; i++){
    console.log(numeros[i]);
}*/

//CONTINUE - BREAK 
/*let i = 0;
while(i < 5){

    if(i == 2){
        console.log(i); 
        continue; hace que el bloque de codigo se siga ejecutando
    } 
    
    
    i+=1;
} */
   /* let i = 0;
    while(i < 5){
    
        if(i == 2){
            console.log(i); 
            break; 
        } 
        
        
        i+=1;
    }*/


/*
primera vuelta
0
0<5 = true
    0 == 2 = no
0 + 1 = 1
Segunda vuelta 
1
1<5 = si
    1 == 2 = no
1 + 1 = 2
Tercera vuelta 
2 < 5 = yes 
    2 == 2 = yes
    imprime 2 
    rompe bloque (break)


*/

// SWITCH CASE 

let dia = 100;
switch(dia){
    case 1: 
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3: 
        console.log("Hoy es miercoles");
        break;
    case 4:
        console.log("Hoy es juebebes");
        break;
    case 5: 
        console.log("Viernes de ahorcar rukas");
        break;
    case 6:
        console.log("Hoy es sabadrinks");
        break;
    case 7: 
        console.log("Domingo de ir a misa");
        break;
    default:
        console.log("Este dia no existe");
        break;
    
    
}