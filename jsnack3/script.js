const casualNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < casualNumbers.length; i++) {
    if(casualNumbers[i]%2 == 0) {
        document.getElementById("color-red").innerHTML += casualNumbers[i];
    } else {
        document.getElementById("color-green").innerHTML += casualNumbers[i];
    }
}

