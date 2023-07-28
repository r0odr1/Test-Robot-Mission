const createRobot = require('./robot.js');

describe('createRobot', () => {
	test('Shoul return error with message invalid orientation', () => {
		const message = 'Invalid orientation'
		const robotA = createRobot([2, 1], 'Nort')
		expect(robotA.message).toBe(message)
	});

	test('should return error with message invalid coordinates', () => {
		const message = 'Invalid coordinates'
		const robotA = createRobot([11, 1], 'West')
		expect(robotA.message).toBe(message)
	})

	test('Should return with message robot created', () => {
		const message = 'Robot created'
		const robotA = createRobot([7, 3], 'North')
		expect(robotA.message).toBe(message)
	})
});

describe('getPosition', () => {
	test('should return error whit message out of limits', () => {
		const message = 'out of limit'
		const robotA = createRobot([11, 11], 'South')
		const result = robotA.getPosition()
		expect(result).toBe(message)
	})
	test('should return place correctly', () => {
		const place = { coordinates: [5, 7], orientation: 'East'}
		const robotA = createRobot([5, 7], 'East')
		const result = robotA.getPosition()
		expect(result).toHaveProperty('coordinates')
		expect(result).toMatchObject(place)
	})
})

describe('advance', () => {
	test('should advance with coordinates [3, 6] and orientation "North" and return coordinates [3, 7]', () => {
		const place = { coordinates: [3, 7], orientation: 'North' }
		const robotA = createRobot([3, 6], "North")
		robotA.advance()
		const result = robotA.getPosition()
		expect(result).toMatchObject(place)
	})
	test('should advance with coordinates [3, 6] and orientation "West" and return coordinates [2, 6]', () => {
		const place = { coordinates: [2, 6], orientation: 'West' }
		const robotA = createRobot([3, 6], "West")
		robotA.advance()
		const result = robotA.getPosition()
		expect(result).toMatchObject(place)
	})
})

describe('turnRight', () => {
	test('should start at the same position but turn orientation to "Weast', () => {
		const place = { coordinates: [3, 6], orientation: 'West' }
		const robotA = createRobot([3, 6], 'South')
		robotA.turnRight()
		const result = robotA.getPosition()
		expect(result).toMatchObject(place)
	})
})

describe('turnLeft', () => {
	test('should start at the same position but turn orientation to "East', () => {
		const place = { coordinates: [3, 6], orientation: 'East' }
		const robotA = createRobot([3, 6], 'South')
		robotA.turnLeft()
		const result = robotA.getPosition()
		expect(result).toMatchObject(place)
	})
})

describe('instructions', () => {
	test('After executing the instructions, the position and orientation should be [2, 2] and "North" respectively', () => {
		const place = { coordinates: [2, 2], orientation: 'North' }
		const robotA = createRobot([0, 0], 'North')
		robotA.instructions("AARAAL")
		const result = robotA.getPosition()
		expect(result).toMatchObject(place)
	})

	test('After executing the instructions, the position and orientation should be [8, 2] and "North" respectively', () => {
		const place = { coordinates: [8, 2], orientation: 'South' }
		const robotA = createRobot([5, 5], 'North')
		robotA.instructions("RRAAALAAAR")
		const result = robotA.getPosition()
		expect(result).toMatchObject(place)
	})
})