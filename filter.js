function cleanup () {
    let shitToRemove = [];
    shitToRemove.push(document.getElementsByClassName('js-todos-count'));
    shitToRemove.push(document.getElementsByClassName('js-merge-requests-count'));
    if (shitToRemove.length > 0) {
        for (key in shitToRemove) {
            if (shitToRemove[key].length === 1) {
                shitToRemove[key][0].remove();
            }
        }
    }
}

cleanup()
