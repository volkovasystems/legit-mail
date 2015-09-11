/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2015 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license
	
	@module-configuration:
		{
			"packageName": "legit-mail",
			"fileName": "legit-mail.js",
			"moduleName": "legitMail",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/legit-mail.git",
			"testCase": "legit-mail-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation	
*/

var dns = require( "dns" );

var legitMail = function legitMail( eMail, callback ){
	dns.resolveMx( eMail.split( "@" )[ 1 ],
		function onResolved( error, addresses ){
			if( error ){
				callback( error );

			}else if( Array.isArray( addresses ) &&
				addresses.length > 0 )
			{	
				callback( null, true );

			}else{
				callback( null, false )
			}
		} );
};

module.exports = legitMail;