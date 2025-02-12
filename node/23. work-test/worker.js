function calc(num) {
    let total = 0;
    for(let i = 0; i< num; i++) {
        total += i;
    }
    return total
}

addEventListener('message', function(evt) {
    this.postMessage(calc(evt.data));
})