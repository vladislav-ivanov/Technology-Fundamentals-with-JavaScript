function perfect(num) {
    let numOption = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            numOption += i;

        }
    }
    if (numOption === num && numOption !== 0) {
        console.log("We have a perfect number!")

    } else {
        console.log("It’s not so perfect.")
    }
}
perfect(6)