document.addEventListener( 'beforeload', getSettings, true );

var settings = null;
var url      = window.location.href;

function getSettings() {
	if( /feed:\/\//.test( url ) && !settings ) {
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
		window.location = 'http://www.google.com/ig/addtoreader?feedurl=' + encodeURI( url.replace( 'feed://', 'http://' ) );
	}
	else {
		console.log( 'Displaying the iGoogle option' );
		window.location = 'http://www.google.com/ig/add?feedurl=' + encodeURI(url.replace('feed://', 'http://'));
	}
}
