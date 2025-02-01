function gladiatorExpenses(fights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let timesShieldBreaks = 0;

    for (let i = 1; i <= fights; i++) {
        let brokenHelmet = false;
        let brokenSword = false;
        let brokenShield = false;

        if (i % 2 === 0) {
            brokenHelmet = true;
            expenses += helmetPrice;
        }

        if (i % 3 === 0) {
            brokenSword = true;
            expenses += swordPrice;
        }

        if (brokenHelmet === true && brokenSword === true) {
            brokenShield === true;
            timesShieldBreaks++;
            expenses += shieldPrice;
        }

        if (timesShieldBreaks === 2) {
            expenses += armorPrice;
            timesShieldBreaks = 0;
        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}