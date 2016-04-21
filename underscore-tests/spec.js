'use strict';

describe('_.first', () => {
	it(`returns the first value in an array if n is undefined`, () => {
		expect( _.first( [1, 2, 3] )).to.equal(1);
		expect( _.first( [3] )).to.equal(3);
	});

	it(`returns the first n elements of an array`, () => {
		expect( _.first( [1, 2, 3, 4, 5], 3 )).to.eql([1, 2, 3]);
	});
});