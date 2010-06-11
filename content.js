document.addEventListener("beforeload", handleBeforeLoadEvent, true);

function handleBeforeLoadEvent(event)
{
    var url = window.location.href;
    
    if ( /feed:\/\//.test(url)) {
        window.location = 'http://www.google.com/ig/addtoreader?feedurl=' + encodeURI( url.replace( 'feed://', 'http://' ) );
    }
}
