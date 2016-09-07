// $('body, html').scrollTop(0);
var debounce = function (func, waitTime, executeNow) {

    var timeout;

    return function debounced () {
        var obj = this;
        var args = arguments;
        function delayed () {
            if (!executeNow){
                console.log('before timeout ' +timeout);
                func.apply(obj, args);
                console.log('after timeout ' +timeout);}
            timeout = null;
            console.log('null timeout ' +timeout);
        }

        if (timeout){
          console.log('before cleared timeout ' +timeout);
            clearTimeout(timeout);
            console.log('cleared timeout ' +timeout);}
        else if (executeNow)
            func.apply(obj, args);

        timeout = setTimeout(delayed, waitTime || 100);
        console.log('timeout ' +timeout);
    };

};

// document.onmousemove = function(e) {
//     var div = document.getElementById('normal');
//
//     div.innerHTML += 'Mouse moving<br>';
//     console.log(e);
// };
//
// window.onmousemove = debounce(function (e) {
//     var div = document.getElementById('debounce');
//
//     div.innerHTML += e.clientX+ ' by ' + e.clientY + '<br>';
//     console.log(e);
// }, 250, false);


function getScrollPercent() {
    var element = document.documentElement;
    var body = document.body;
    var st = 'scrollTop';
    var sh = 'scrollHeight';
    return Math.round((body[st] / ((body[sh]) - element.clientHeight) * 100));
}

window.onscroll = function (e) {
    var div = document.getElementById('normal');

    div.innerHTML += getScrollPercent()+'%<br>';
    console.log(getScrollPercent());
    // console.log(e);
};

document.onscroll = debounce(function (e) {
    var div = document.getElementById('debounce');

    div.innerHTML += 'Debounced scroll ' + getScrollPercent()+'%<br>';
    console.log(getScrollPercent());
    console.log(e);
}, 350, false);
