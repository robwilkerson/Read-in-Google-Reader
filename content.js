document.addEventListener("beforeload", handleBeforeLoadEvent, true);

function handleBeforeLoadEvent(event)
{
	const element = event.target;
    var url = element.ownerDocument.URL;

    if ( /feed:\/\//.test(url)) {
        window.location = 'http://www.google.com/ig/add?feedurl=' + encodeURI(url.replace('feed://', 'http://'));
    }
}
