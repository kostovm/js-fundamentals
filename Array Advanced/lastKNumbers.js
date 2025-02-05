function kSequence(n, k) {

    let sequence = [1];

    for (let i = 2; i <= n; i++) {
        let sum = 0;
        if (i <= k) {
            sum = sequence.reduce((a, n) => a + n, 0);
        } else {
            let lastK = sequence.slice(-k);
            sum = lastK.reduce((a, n) => a + n, 0);
        }

        sequence.push(sum);
    }

    console.log(sequence.join(' '));

}