document.getElementById("form-convertion").addEventListener("submit", function (event) {
    event.preventDefault(); });
    
    function convertToFahrenheit() {
        let celcius = parseFloat(document.getElementById("input-celcius").value);
    if (!isNaN(celcius)) {
        let fahrenheit = (celcius * 9/5) + 32;
        let resultFieldcelcius = document.getElementById("result-field");
        let resultFahrenheit = document.getElementById("result-calculation");
        let resultHeader = document.querySelector("label[for='result-calculation']");
        console.log(celcius + '°C sudah dikonversi menjadi ' + fahrenheit + '°F');
        document.getElementById("input-fahrenheit").value = fahrenheit.toFixed(1);
        document.getElementById("result-calculation").value = '(' + celcius + '°C' + ' × ' + '9/5) + 32 = ' + fahrenheit.toFixed(1) + '°F'; 
        resultFieldcelcius.style.backgroundColor = "#7fc8f8";
        resultFahrenheit.style.color = "black";
        resultFahrenheit.style.backgroundColor ="#ffe45e";
        resultHeader.style.color = "black";
    }     else {
        document.getElementById("input-fahrenheit").value = "";
    }

}

    function convertToCelcius() {
        let fahrenheit = parseFloat(document.getElementById("input-fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        let celcius = (fahrenheit - 32) / (9/5);
        let resultFieldcelcius = document.getElementById("result-field");
        let resultCelcius = document.getElementById("result-calculation");
        let resultHeader = document.querySelector("label[for='result-calculation']");
        console.log(fahrenheit + '°C sudah dikonversi menjadi ' + celcius.toFixed(1) + '°F');
        document.getElementById("input-celcius").value = celcius.toFixed(1);
        document.getElementById("result-calculation").value = '(' + fahrenheit + '°F' + ' - 32) ' + '/ (9/5) = ' + celcius.toFixed(1) + '°C'; 
        resultFieldcelcius.style.backgroundColor = "#ffe45e";
        resultCelcius.style.color = "black";
        resultCelcius.style.backgroundColor ="#7fc8f8";
        resultHeader.style.color = "black";
    }     else {
        document.getElementById("input-fahrenheit").value = "";
    }
}

