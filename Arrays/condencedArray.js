function condencedArray (arr) {

    let condenced = arr;

    while (condenced.length > 1){
        let newArray = [];
        for (let i = 1; i < condenced.length; i++){
            newArray.push(condenced[i] + condenced[i-1]);
        }
        condenced = newArray;
    }

    console.log(condenced[0]);

}