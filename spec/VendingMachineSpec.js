var machine;

describe("Jasmine Test Runner", function () {

	describe("Vending Machine", function () {

		beforeEach(function () {
			machine = new Machine();
		});

		it("should show a status of INSERT COIN", function () {
			expect(machine.display()).toBe("INSERT COIN");
		});

	// 	it("should accept nickels", function () {
	// 		machine.insertNickel();
	// 		expect(machine.display()).toBe("5");
	// 	});

	// 	it("should accept dimes", function () {
	// 		machine.insertDime();
	// 		expect(machine.display()).toBe("10");
	// 	});

	// 	it("should accept quarters", function () {
	// 		machine.insertQuarter();
	// 		expect(machine.display()).toBe("25");
	// 	});

	// 	it("should accept a quarter, a dime, and a nickel", function () {
	// 		machine.insertQuarter();
	// 		machine.insertDime();
	// 		machine.insertNickel();
	// 		expect(machine.display()).toBe("40");
	// 	});

	// 	it("rejects pennies", function () {
	// 		machine.insertPenny();
	// 		expect(machine.coinReturn()).toBe("PENNY");
	// 	});
		
 //        describe("when trying to buy cola without paying", function () {
	// 		it("should fail to buy cola", function () {
	// 			machine.failToStealCola();
	// 			expect(machine.itemContainer()).toBe("EMPTY");
	// 		});
			
	// 		it("should tell you how much to pay", function () {
	// 			machine.failToStealCola();
	// 			expect(machine.display()).toBe("100");
	// 		});
	// 	});

	// 	describe("when trying to buy cola with too many coins inserted", function () {
	// 		it("should dispense a cola", function () {
	// 			machine.buyCola();
	// 		});
	// 	});
	});
});
