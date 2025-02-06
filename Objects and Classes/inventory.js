// Initial solution

function inventory(input) {

    let hallOfHeroes = [];

    for (let el of input) {
        let heroInfo = el.split(" / ");
        let newHero = {
            Hero: heroInfo[0],
            level: heroInfo[1],
            items: heroInfo[2]
        }
        hallOfHeroes.push(newHero);
    }
    hallOfHeroes.sort((heroA, heroB) => heroA.level - heroB.level);
    for (let el of hallOfHeroes) {
        console.log(`Hero: ${el.Hero}`)
        console.log(`level => ${el.level}`)
        console.log(`items => ${el.items}`)
    }
}

// Solution after revisiting the task

function inventory(input) {

    let listOfHeroes = [];

    for (let line of input) {
        let [name, level, items] = line.split(' / ');

        let newHero = {
            name,
            level: Number(level),
            items
        }

        listOfHeroes.push(newHero);

    }

    listOfHeroes.sort((a, b) => a.level - b.level);

    listOfHeroes.forEach(hero => console.log(`Hero: ${hero.name} \nlevel => ${hero.level} \nitems => ${hero.items}`));

}