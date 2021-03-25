export function add(x, y) {
    return (x + y);
}

export function subtract(x, y) {
    return (x - y);
}
export function multiply(x, y) {
    return (x * y);
}

export function divide(x, y) {
    if (y === 0) {
        return (0);
    }
    return (x / y);
}

export function toNumber(input) {
    if (!input) {
        return (0);
    }
    return Number(input.value);
}

export function operation(x, sign, y) {
    if (sign === '+')
        return (add(x, y));
    if (sign === '-')
        return (subtract(x, y));
    if (sign === '*')
        return (multiply(x, y));
    if (sign === '/') {
        return (divide(x, y));
    }
}