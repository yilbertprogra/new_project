const calculatorArea = (side) => {
    return side * side;
}

const calculatorAreaSquare = () => {
    const input = document.getElementById("sideSquire");
    const side = Number(input.value);

    const calculator = calculatorArea(side);

    const result = document.getElementById("resul");

    result.innerText =`the result is: ` + calculator;
}
