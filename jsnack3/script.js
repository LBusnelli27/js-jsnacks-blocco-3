const casualNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Split the odd number in one div and the even number in another div
 * 
 * @param {*} arrayNumber Put the array of number
 */
function redOrGreen(arrayNumber) {
    for (let i = 0; i < arrayNumber.length; i++) {
        if(arrayNumber[i]%2 == 0) {
            document.getElementById("color-red").innerHTML += arrayNumber[i];
        } else {
            document.getElementById("color-green").innerHTML += arrayNumber[i];
        }
    }
}

redOrGreen(casualNumbers);