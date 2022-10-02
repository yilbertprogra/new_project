const calculate = (p, r) => {
    return p * (r * r)
}

const calcularAreaCirculo = () => {
    const input = document.getElementById("radio");
    const radio = Number(input.value)

    const input02 = document.getElementById("pi")
    const pi = Number(input02.value)

    const calculator = calculate(pi, radio)

    const result = document.getElementById("result_03");

    result.innerText = `the result is: ` + calculator
}