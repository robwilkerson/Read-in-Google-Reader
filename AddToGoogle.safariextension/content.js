const DEBUG = true;

if( window === window.top ) {
	clog( 'Determining whether ' + window.location.href + ' is a feed...' );
	
	if( /^feed:/.test( window.location.href ) ) {
		clog( '--> It is. Redirecting...' );
		
		base_uri = 'http://www.google.com/reader/view/feed/';
		feed_uri = window.location.href.replace( /^feed:(http(s):)?\/\//, 'http$2://' );
		
		clog( '----> Redirecting to ' + base_uri + encodeURIComponent( feed_uri ) );
		
		window.location.replace( base_uri + encodeURIComponent( feed_uri ) );
	}
	else {
		clog( '--> It\'s not. Moving on.' );
	}
}

function clog( msg ) {
	if( DEBUG ) {
		console.log( msg );
	}
}
