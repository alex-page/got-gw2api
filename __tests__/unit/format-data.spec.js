/***************************************************************************************************************************************************************
 *
 * format-data.js unit tests
 *
 * @file src/format-data.js
 *
 * Tested methods:
 * - FormatData
 *
 **************************************************************************************************************************************************************/


// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
const Test  = require( 'ava' );
const Sinon = require( 'sinon' );
const Log   = require( 'lognana' );


// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
const FormatData = require( '../../src/format-data' );


// ----------------------------------------------------------------
// FormatData
// ----------------------------------------------------------------
Test( 'FormatData: should take a function and data', test => {

	const testData = [{ "a": 24, "b": 15 }, { "a": 12, "b": 99 }, { "a": 1, "b": 1 } ];

	const TestFunction = ( item ) => {
		return item.a + item.b;
	};

	test.deepEqual( FormatData( testData, TestFunction ), [ 39, 111, 2 ] );

});


Test( 'FormatData: should catch an error in the function', test => {

	const spy = Sinon.spy( console, 'error' );

	const testData = [{ "a": 24, "b": 15 } ];

	const TestFunction = ( item ) => {
		Log.error( 'This was made to fail' );
	};

	FormatData( testData, TestFunction );

	console.log( spy.calledWith( 'This was made to fail' ) );

	// test.is( spy, '' );
});
