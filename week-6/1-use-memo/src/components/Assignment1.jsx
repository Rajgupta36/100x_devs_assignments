import { useState } from "react";
import { useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here

    const factorial = useMemo(() => {
        function calculateFactorial(n) {
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }
        return calculateFactorial;
    }, [input])
    let expensiveValue = 0;
    // Your solution ends here
    expensiveValue = factorial(input);

    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}