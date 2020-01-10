

var calc = document.getElementById('calcular');
calc.addEventListener("click", () => {

    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)

    var imc = peso / (altura * altura )

    if (imc < 17 )
    {
        document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} <br><br>Você esta muito abaixo do peso`
    } else if ( imc >= 17 && imc <= 18.49)
    {
        document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} <br><br>Você está com o peso abaixo do normal`
    } else if (imc >= 18 && imc <= 24.99)
    {
        document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} <br><br>Você está com o peso normal`
    }
    else if (imc >= 25 && imc <= 29.99)
    {
        document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} <br><br>Você está acima do peso`
    }
    else if (imc >= 30 && imc <= 34.99)
    {
        document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} <br><br>Você está com obesidade nivel I `
    }
    else if (imc >= 35 && imc <= 39.99)
    {
        document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} <br><br>Você está com obesidade nivel II (Severa)`
    }
    else 
    {
        document.getElementById('res').innerHTML = `Seu IMC é de: ${imc.toFixed(2)} <br><br>Você está com obesidade nivel III (Mórbida)`
    }

    
});





