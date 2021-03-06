class Room {
    constructor(info) {
        this.name = info.name;
        this.description = info.description;
        this.exits = info.exits;
        this.objects = info.objects;
        this.npcs = info.npcs;
    }

    getExits() {
        return this.exits;
    }

    getObjects() {
        return this.objects;
    }

    getNPCs() {
        return this.npcs;
    }

}

//export default Room;
module.exports = Room;
