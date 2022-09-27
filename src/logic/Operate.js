import Big from "big.js";

export default function Operate(numberOne, numberTwo, Operation) {
    const one = Big(numberOne);
    const two = Big(numberTwo);
    if (Operation == "/"){
        return one.div(two).toString();
    }
    if (Operation == "*"){
        return one.times(two).toString();
    }
    if (Operation == "-"){
        return one.minus(two).toString();
    }
    if (Operation == "+"){
        return one.plus(two).toString();
    }
    if (Operation == "%"){
        return one.mod(two).toString();
    }
    throw Error (`invalid '${Operation}'`)
}