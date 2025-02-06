function songs(input) {

    let howManySongs = input[0];
    let type = input[input.length - 1]

    class Song {
        constructor(typeList, name, time) {
            this.list = typeList,
                this.title = name,
                this.duration = time
        }

        print() {
            if (type === "all") {
                console.log(this.title);
            } else if (type === this.list) {
                console.log(this.title);
            }
        }
    }

    for (let i = 1; i <= howManySongs; i++) {
        let [typeList, name, time] = input[i].split("_");
        let newSong = new Song(typeList, name, time);
        newSong.print();
    }
}