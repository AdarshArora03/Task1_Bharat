function convertToCelsius() {
    const celsiusInput = document.getElementById('celsius').value;
    if (!isNaN(celsiusInput)) {
        const fahrenheit = (celsiusInput * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    }
}

function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    if (!isNaN(fahrenheitInput)) {
        const celsius = (fahrenheitInput - 32) * 5 / 9;
        document.getElementById('celsius').value = celsius.toFixed(2);
    }
}
