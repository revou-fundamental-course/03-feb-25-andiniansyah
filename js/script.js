document.getElementById("form-convertion").addEventListener("submit", function (event) {
    event.preventDefault();
    // nilai dari input
    let celcius = parseFloat(document.getElementById("input-celcius").value);

    if (!isNaN(celcius)) {
        let fahrenheit = (celcius * 9/5) + 32;
        document.getElementById("input-fahrenheit").value = fahrenheit.toFixed(2);
        document.getElementById("result-calculation").value = celcius + '°C' + ' × ' + '9/5 + 32 = ' + fahrenheit + '°F'; 
    }     else {
        document.getElementById("input-fahrenheit").value = "";
    }

});