function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);

    let nextDateYear = date.getFullYear();
    let nextDateMonth = date.getMonth() + 1;
    let nextDateDay = date.getDate();

    console.log(`${nextDateYear}-${nextDateMonth}-${nextDateDay}`)

}

