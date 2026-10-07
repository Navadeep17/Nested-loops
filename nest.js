
function displayResult(id, message) {
    console.log(message);

    let output = document.getElementById(id);

    output.innerText = message;
    output.style.display = "block";
}


// 1. Calculate the sum of Prime Numbers

function calculatePrimeSum() {

    let firstNumber = parseInt(
        document.getElementById("startPrime").value
    );

    let lastNumber = parseInt(
        document.getElementById("endPrime").value
    );

    let total = 0;

    for (let current = firstNumber; current <= lastNumber; current++) {

        let factors = 0;

        for (let divisor = 1; divisor <= current; divisor++) {

            if (current % divisor === 0) {
                factors++;
            }
        }

        if (factors === 2) {
            total += current;
        }
    }

    displayResult(
        "primeResult",
        `The sum of prime numbers between ${firstNumber} and ${lastNumber} is ${total}`
    );
}


// 2. Calculate the Average of Perfect Numbers

function calculatePerfectAverage() {

    let firstNumber = parseInt(
        document.getElementById("startPerfect").value
    );

    let lastNumber = parseInt(
        document.getElementById("endPerfect").value
    );

    let total = 0;
    let perfectCount = 0;

    for (let current = firstNumber; current <= lastNumber; current++) {

        let factorSum = 0;

        for (let divisor = 1; divisor < current; divisor++) {

            if (current % divisor === 0) {
                factorSum += divisor;
            }
        }

        if (factorSum === current) {

            total += current;
            perfectCount++;
        }
    }

    let average = perfectCount === 0 ? 0 : total / perfectCount;

    displayResult(
        "perfectResult",
        `The average of perfect numbers between ${firstNumber} and ${lastNumber} is ${average}`
    );
}


// 3. Display Palindrome Numbers

function showPalindromeNumbers() {

    let firstNumber = parseInt(
        document.getElementById("startPalindrome").value
    );

    let lastNumber = parseInt(
        document.getElementById("endPalindrome").value
    );

    let palindromeList = [];

    for (let current = firstNumber; current <= lastNumber; current++) {

        let original = current;
        let remaining = current;
        let reverse = 0;

        while (remaining > 0) {

            let digit = remaining % 10;

            reverse = reverse * 10 + digit;

            remaining = Math.floor(remaining / 10);
        }

        if (original === reverse) {
            palindromeList.push(current);
        }
    }

    displayResult(
        "palindromeResult",
        `Palindrome numbers between ${firstNumber} and ${lastNumber}: ${palindromeList.join(", ")}`
    );
}


// 4. Display Numbers Having Exactly 3 Factors

function showThreeFactorNumbers() {

    let firstNumber = parseInt(
        document.getElementById("startFactors").value
    );

    let lastNumber = parseInt(
        document.getElementById("endFactors").value
    );

    let threeFactorNumbers = [];

    for (let current = firstNumber; current <= lastNumber; current++) {

        let factors = 0;

        for (let divisor = 1; divisor <= current; divisor++) {

            if (current % divisor === 0) {
                factors++;
            }
        }

        if (factors === 3) {
            threeFactorNumbers.push(current);
        }
    }

    displayResult(
        "factorResult",
        `Numbers between ${firstNumber} and ${lastNumber} having exactly 3 factors: ${threeFactorNumbers.join(", ")}`
    );
}


// 5. Find the Number With Maximum Factors

function findMaximumFactorNumber() {

    let firstNumber = parseInt(
        document.getElementById("startMaximum").value
    );

    let lastNumber = parseInt(
        document.getElementById("endMaximum").value
    );

    let highestFactors = 0;
    let selectedNumber = firstNumber;

    for (let current = firstNumber; current <= lastNumber; current++) {

        let factors = 0;

        for (let divisor = 1; divisor <= current; divisor++) {

            if (current % divisor === 0) {
                factors++;
            }
        }

        if (factors > highestFactors) {

            highestFactors = factors;
            selectedNumber = current;
        }
    }

    displayResult(
        "maximumResult",
        `The number between ${firstNumber} and ${lastNumber} with the maximum factors is ${selectedNumber}, with ${highestFactors} factors.`
    );
}
