if( window === window.top ) {
	// console.log( 'Thinking about subscribing' );
	
	if( /^feed:/.test( window.location.href ) ) {
		// console.log( 'It\'s a feed. Dispatching the subscribe message' );
		safari.self.tab.dispatchMessage( 'subscribe', window.location.href );
	}
}
