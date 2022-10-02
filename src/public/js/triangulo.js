const calcular = (b, h) => {
    return (b * h) / 2
}

const calcularAreaTriangulo = () => {
    const input = document.getElementById("base")
    const value = Number(input.value);
    
    const input2 = document.getElementById("altura");
    const value2 = Number(input2.value);

    const calculate = calcular(value, value2);

    const result = document.getElementById("result_02")

    result.innerText = `the result is: ` + calculate
}