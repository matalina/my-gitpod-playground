let Room = require('../src/room');

describe('# Test Rooms', () => {
    test('Get room with no exists', () => {
        let info = {
            name: 'room 1',
            description: 'test room',
            exits: [],
        };
    
        let room = new Room(info);

        expect(room.name).toBe(info.name);
        expect(room.description).toBe(info.description);
        expect(room.exits.length).toBe(0);
    });
});