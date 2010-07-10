if( window === top.window ) {
	document.addEventListener( 'beforeload', getSettings, true );
	
	var settings = null;
	var url      = window.location.href;
	var feed_url = url.replace( /^feed:(http(s):)?\/\//, 'http$2://' );
	
	function getSettings() {
		if( /^feed:(https:)?\/\//.test( url ) && !settings ) {
			settings = safari.self.tab.canLoad( event );
			
			console.log( 'Settings returned to content.js' );
			console.log( settings );
			
			console.log( 'Redirecting...' );
			redirect();
		}
	}
	
	function redirect() {
		if( !settings.igoogle ) {
			console.log( 'Bypassing iGoogle' );
			window.location = 'http://www.google.com/ig/addtoreader?feedurl=' + encodeURI( feed_url );
		}
		else {
			console.log( 'Displaying the iGoogle option' );
			window.location = 'http://www.google.com/ig/add?feedurl=' + encodeURI( feed_url );
		}
	}
}
