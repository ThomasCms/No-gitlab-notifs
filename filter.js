// Runs cleanup on the document title
let cleanup = word => {
    let shitToRemove = document.getElementsByClassName('todos-count');
    if (shitToRemove.length === 1) {
        shitToRemove[0].remove();
    }
}

// Set up a mutation observer to listen for title changes
// Will fire if framework AJAX stuff switches page title
let createObserver = function() {
    let observer = new MutationObserver((mutations) => {
        // Disconnect the MO so there isn't an infinite title update loop
        // Run title cleanup again
        // Create a new MO to listen for more changes
        observer.disconnect()
        observer = null
        cleanup()
        createObserver()
    })

    observer.observe(
        document.querySelector('title'),
        { subtree: true, characterData: true, childList: true }
    )
}
createObserver()

// Kick off initial page load check
cleanup()