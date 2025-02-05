function loadingBar(percent) {

    if (percent === 100) {
        console.log(`100% Complete!\n[%%%%%%%%%%]`)
    } else {
        console.log(percent + "%" + " " + "[" + "%".repeat(percent / 10) + ".".repeat(10 - (percent / 10)) + "]");
        console.log(`Still loading...`)
    }

}