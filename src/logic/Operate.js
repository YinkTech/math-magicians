import Big from "big.js";

const Operate = (numberOne, numberTwo, operation) => {
    const one = Big(numberOne);
    const two = Big(numberTwo);
    
    if (operation === '÷') {
        try {
            return one.div(two).toString();
        } catch (err) {
            return "Can't divide by 0.";
        };
    };
    
    if (operation === "X"){
        return one.times(two).toString();
    };
    if (operation === "-"){
        return one.minus(two).toString();
    };
    if (operation === "+"){
        return one.plus(two).toString();
    };
    if (operation === "%"){
        return one.mod(two).toString();
    };
    throw Error (`invalid '${operation}'`);
};

export default Operate;