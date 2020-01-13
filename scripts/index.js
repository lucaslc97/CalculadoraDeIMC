
function CapturaSexo ()
{
    var sexo =  document.getElementById('sexo').value

    if(sexo== "Masculino")
    {
       return sexo
    }
    else if (sexo == "Feminino")
    {
        return sexo
    }
    else{
        window.alert("Selecione um sexo para continuar!")
    }

}
    


var calc = document.getElementById('calcular');
calc.addEventListener("click", () => {

    
    if(CapturaSexo()=="Masculino")
    {
        calcularImcHomem()
    }
    else if (CapturaSexo()=="Feminino")
    {
        calcularImcHomem()
    }
    
});

function calcularImcHomem()
{

    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    

    console.log("PESO "+peso)
    console.log("ALTURA "+altura)

    var imc = peso / (altura * altura )
    
    if (isNaN(peso) || isNaN(altura))
    {
        window.alert("Preencha todos os campos!")
    } 
    else {

        if (imc < 17 )
        {
            document.getElementById('alerta').innerHTML = "<strong> ALERTA!!!! <strong>"
            document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)}. <br>Você esta muito abaixo do peso.`
            document.getElementById('img').style.background = "red"

            
        } else if ( imc >= 17 && imc <= 18.49)
        {
            document.getElementById('alerta').innerHTML = "<strong> ALERTA!!!! <strong>"
            document.getElementById('img').style.background = "red"
            document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} . <br>Você está com o peso abaixo do normal.`
        } else if (imc >= 18 && imc <= 24.99)
        {
            document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} . <br>Você está com o peso normal.`
        }
        else if (imc >= 25 && imc <= 29.99)
        {
            document.getElementById('alerta').innerHTML = "<strong> ALERTA!!!! <strong>"
            document.getElementById('img').style.background = "red"
            document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} . <br>Você está acima do peso.`
        }
        else if (imc >= 30 && imc <= 34.99)
        {
            document.getElementById('alerta').innerHTML = "<strong> ALERTA!!!! <strong>"
            document.getElementById('img').style.background = "red"
            document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} . <br>Você está com obesidade nivel I. `
        }
        else 
        {
            document.getElementById('alerta').innerHTML = "<strong> ALERTA!!!! <strong>"
            document.getElementById('img').style.background = "red"
            document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} . <br><br>Você está com obesidade nivel II (Severa)`
        }
    }
    

}




