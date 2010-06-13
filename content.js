var settings = null;

document.addEventListener( 'beforeload', getSettings, true );

function getSettings() {
	if( !settings ) {
		settings = safari.self.tab.canLoad( event );
		
		console.log( 'Settings returned to content.js' );
		console.log( settings );
		
		console.log( 'Redirecting...' );
		redirect();
	}
}

function redirect() {
	var url = window.location.href;
	
	if( /feed:\/\//.test( url ) ) {
		if( !settings.igoogle ) {
			console.log( 'Bypassing iGoogle' );
			window.location = 'http://www.google.com/ig/addtoreader?feedurl=' + encodeURI( url.replace( 'feed://', 'http://' ) );
		}
		else {
			console.log( 'Displaying the iGoogle option' );
			window.location = 'http://www.google.com/ig/add?feedurl=' + encodeURI(url.replace('feed://', 'http://'));
		}
	}
}
