peso = document.getElementById('peso').value;
altura = document.getElementById('altura').value;
calc = document.getElementById('calcular');
pesoN = Number(peso);
alturaN = Number(altura);

calc.addEventListener("click", calcular)


function calcular()
{
    var  conta =  alturaN * alturaN;
    var imc = pesoN /conta;
    
    document.getElementById('teste2').innerHTML = conta
    document.getElementById('teste').innerHTML = imc

    if(imc < 18.5 )
        {
            document.getElementById('res').innerHTML = "Você está muito abaixo do peso!"
        }
        else if ((imc >= 18.5) && (imc < 24.9))
        {
            document.getElementById('res').innerHTML = "Você está com o peso normal. Continue assim!"
        }
            else if ((imc >= 24.9) && (imc  < 30))
            {
                document.getElementById('res').innerHTML = "Você está com sobrepeso. Procure um nutricionista!"
            }
                else if (imc > 30)
                {
                    document.getElementById ('res').innerHTML = "Você está com obesidade. Procure um nutricionista mais rapido possível!"
                }
                else 
                {
                    document.getElementById ('res').innerHTML = " "

                }

}

