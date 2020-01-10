var peso = ParseFloat(document.querySelector('input#peso').value);
var altura = ParseFloat(document.querySelector('input#altura').value);

var calc = document.getElementById('calcular');
calc.addEventListener("click", calcular);


altura = altura.replace(",", ".");
peso = altura.replace(",", ".");

function calcular()
{
    
    var  imc = peso / (altura * altura);

    

    document.getElementById('teste2').innerHTML = imc
    document.getElementById('teste').innerHTML = imc

    if(imc < 18.5 )
        {
            document.getElementById('res').innerHTML = "Você está muito abaixo do peso!"
        }
        else if (imc >= 18.5 && imc < 24.9)
        {
            document.getElementById('res').innerHTML = "Você está com o peso normal. Continue assim!"
        }
            else if (imc >= 24.9 && imc  < 30)
            {
                document.getElementById('res').innerHTML = "Você está com sobrepeso. Procure um nutricionista!"
            }
                else if (imc > 30)
                {
                    document.getElementById ('res').innerHTML = "Você está com obesidade. Procure um nutricionista mais rapido possível!"
                }
                else 
                {
                    document.getElementById ('res').innerHTML = "  "

                }

}

