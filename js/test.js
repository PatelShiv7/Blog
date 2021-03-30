function insertName (name1, name2) {
    alert(`Hello ${name1} ${name2}`)
}

insertName('Shiv', 'Patel');
insertName('Bill', 'Gates');
insertName('Steve', 'Jobs');


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

document.getElementById("demo").innerHTML = toCelsius(77);

