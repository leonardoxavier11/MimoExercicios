let input1 = document.querySelector("#input1");

let input2 = document.querySelector("#input2");

input1.focus();

function botao() {
    let res = 0;
    if (input1.value > 0 && input2.value > 0) {

        if (input1.value > input2.value) {
            res = (input1.value - input2.value);
            // alert("O aluguel em Paris é " + res + " reais mais caro em comparação à Barcelona");
            document.getElementById("trueOrFalse").innerHTML = "True";
            document.getElementById("awser").innerHTML = "O aluguel em Paris é " + res + " reais mais caro em comparação à Barcelona";
        }
        else if (input1.value < input2.value) {
            res = (input2.value - input1.value);
            // alert("O aluguel em Barcelona é " + res + " reais mais caro em comparação à Paris");
            document.getElementById("trueOrFalse").innerHTML = "False";
            document.getElementById("awser").innerHTML = "O aluguel em Barcelona é " + res + " reais mais caro em comparação à Paris";
        }
        else {
            // alert("Os alugueis são iguais!");
            document.getElementById("awser").innerHTML = "Os alugueis são iguais!";
        }

    } else {
        alert("Você digitou algum valor inválido!")
    }

}

let button = document.querySelector("button");
button.onclick = botao;

