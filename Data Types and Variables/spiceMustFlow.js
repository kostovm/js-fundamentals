function spiceMustFlow(yield) {

    let spiceCollected = 0;
    let days = 0;

    while (yield >= 100) {
        days++;
        spiceCollected += yield - 26;
        yield -= 10;
    }

    spiceCollected -= 26;
    if (spiceCollected < 0) spiceCollected = 0;

    console.log(days);
    console.log(spiceCollected)

}