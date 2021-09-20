console.log("page loaded...");

function on(element){
    element.muted = true
    element.play();
}

function off(element){
    element.pause();
}