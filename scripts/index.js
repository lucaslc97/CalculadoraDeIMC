
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
        calcularImc();
        calcularPesoHomem();
    }
    else if (CapturaSexo()=="Feminino")
    {
        calcularImc();
        calcularPesoMulher();
    }
    
});

function calcularImc()
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
            document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} . <br>Você está com obesidade nivel II (Severa)`
        }
    }
    

}



function calcularPesoHomem()
{
    console.log("peso")
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (altura <= 1.57)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 52 - 55"
            console.log("olaa mundo")
        }
        else if (altura <= 1.60)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 54 - 58"
            console.log("olaa mundo")
        }
        else if (altura <= 1.63)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 57 - 52"
            console.log("olaa mundo")
        }
        else if (altura <= 1.65)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 59 - 66"
            console.log("olaa mundo")
        }
        else if (altura <= 1.68)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 61 - 69"
            console.log("olaa mundo")
        }
        else if (altura <= 1.70)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 63 - 73"
            console.log("olaa mundo")
        }
        else if (altura <= 1.73)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 66 - 77"
            console.log("olaa mundo")
        }
        else if (altura <= 1.75)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 68 - 80"
            console.log("olaa mundo")
        }
        else if (altura <= 1.78)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 70 - 84"
            console.log("olaa mundo")
        }
        else if (altura <= 1.80)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 72 - 85"
            console.log("olaa mundo")
        }
        else if (altura <= 1.83)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 75 - 91"
            console.log("olaa mundo")
        }
        else if (altura <= 1.85)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre  77 - 95"
            console.log("olaa mundo")
        }
        else if (altura <= 1.88)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre  79 - 98"
            console.log("olaa mundo")
        }
        else if (altura <= 1.91)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre  82 - 102"
            console.log("olaa mundo")
        }
        else 
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre  84 - 106"
            console.log("olaa mundo")
        }


}

function calcularPesoMulher()
{
    console.log("peso")
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (altura <= 1.50)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 45 - 52"
            console.log("olaa mundo")
        }
        else if (altura <= 1.52)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 44 - 46"
            console.log("olaa mundo")
        }
        else if (altura <= 1.55)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 47 - 48"
            console.log("olaa mundo")
        }
        else if (altura <= 1.57)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 48 - 51"
            console.log("olaa mundo")
        }
        else if (altura <= 1.60)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 49 - 53"
            console.log("olaa mundo")
        }
        else if (altura <= 1.63)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 51 - 56"
            console.log("olaa mundo")
        }
        else if (altura <= 1.65)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 52 - 59"
            console.log("olaa mundo")
        }
        else if (altura <= 1.68)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 53 - 62"
            console.log("olaa mundo")
        }
        else if (altura <= 1.70)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 55 - 64"
            console.log("olaa mundo")
        }
        else if (altura <= 1.73)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 56 - 67"
            console.log("olaa mundo")
        }
        else if (altura <= 1.75)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre 58 - 69"
            console.log("olaa mundo")
        }
        else if (altura <= 1.78)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre  60 - 76"
            console.log("olaa mundo")
        }
        else if (altura <= 1.80)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre  61 - 77"
            console.log("olaa mundo")
        }
        else if (altura <= 1.83)
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre  83 - 80"
            console.log("olaa mundo")
        }
        else 
        {
            document.getElementById('ResP').innerHTML = "Seu peso ideal é entre  65 - 82"
            console.log("olaa mundo")
        }


}

