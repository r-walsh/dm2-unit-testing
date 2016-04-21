'use strict';

describe(`homeCtrl`, () => {
	let $controller;

	beforeEach(module(`ngTests`));

	beforeEach(inject( _$controller_ => {
		$controller = _$controller_;
	}));

	describe(`$scope.returnOne`, () => {
		it(`returns the number one`, () => {
			let controller = $controller(`homeCtrl`, { $scope: {} });

			expect( controller.scope.returnOne() ).to.equal(1);
		});
	});
});