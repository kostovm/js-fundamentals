function nonDecreasing (arr) {

    let max = Number.NEGATIVE_INFINITY;

    let output = arr.filter((el) => {
        if (el >= max){
            max = el;
            return true;
        } else {
            return false;
        }
    })

    console.log(output.join(' '));

}