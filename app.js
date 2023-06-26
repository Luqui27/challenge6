//Preguntar edad, si es menor solo puede ingresar con un tutor
let edad=prompt("Ingrese su edad")
if(edad>=18){
    alert("Puede ingresar")
}else if(edad<18){
    alert("Usted es menor")
    let tutor=prompt("¿Viene con un tutor?")
    if(tutor.includes("si") || tutor.includes("SI") || tutor.includes("Si") || tutor.includes("sI")){
        alert("Puede Ingresar con su tutor")
    }else{
        alert("No puede ingresar")
    }
}