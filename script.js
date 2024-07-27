
document.getElementById('pin-generate').addEventListener('click', function () {
    const generateNumber = Math.random(1000) * 10000
    const roundNumber = Math.round(generateNumber)
    document.getElementById('random-number').innerText = roundNumber
    console.log(roundNumber);
})

function inputNumber(id) {
    const inputValue = document.getElementById(id).innerText;
    displayNumber(inputValue);
}
function displayNumber(number) {
    const prevNumber = document.getElementById('match-number').innerText;
    document.getElementById('match-number').innerText = prevNumber + number;
}
document.getElementById("button-c").addEventListener('click', function () {
    document.getElementById('match-number').innerText = "";
})

document.getElementById("submit-button").addEventListener('click', function () {
    const genaretedNumber = document.getElementById('random-number').innerText;
    const dialNumber = document.getElementById('match-number').innerText;

    if (genaretedNumber == dialNumber) {
        document.getElementById('successful').style.display = 'inline-block';
        document.getElementById('unsuccessful').style.display = 'none';
        document.getElementById('total-try-parent').style.display='none';
        
    }
    else {
        const totalTry = parseInt(document.getElementById('total-try').innerText);
        document.getElementById('total-try').innerText = totalTry - 1;
        if (totalTry <= 0) {
            alert("No Try Left");
            document.getElementById('total-try').innerText = 0;
            document.getElementById('unsuccessful').style.display = 'none';
        }
        document.getElementById('unsuccessful').style.display = 'inline-block';
        document.getElementById('successful').style.display = 'none';
    }
    document.getElementById('match-number').innerText = "";
})
