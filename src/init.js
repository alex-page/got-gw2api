/***************************************************************************************************************************************************************
 *
 * Init
 *
 * Initialise -
 *
 **************************************************************************************************************************************************************/


'use strict';


// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
import { SETTINGS }                   from './settings';
import { Log }                        from './helper';
import { GetTotalPages, GetBulkData } from './get';


// Check if the user is in verbose mode
if(process.argv.includes('-v') || process.argv.includes('--verbose')) {
	Log.verboseMode = true;
}

Log.welcome( `Starting the feast` );

GetTotalPages( SETTINGS.get().api.commerce )
	.then( totalPages => GetBulkData( SETTINGS.get().api.commerce, totalPages ) )
	// then send data to db with timestamp
	.then( data => Log.done( `The lions are full and go to sleep` ) )
	.catch( error => Log.error( `The lions went hungry: ${ error }` ) );


