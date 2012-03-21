var position = 0;
var interval;
var move = function() {
        if(position < 100) { 
                position += 1;
                document.getElementById('wat').setAttribute('style', 'position: absolute; top: '+position+'px');
        } else {
                clearInterval(interval);
        }
};

window.onload = function() {
        var div = document.getElementById('wat');
        div.onclick = function() {
                interval = setInterval(move, 10);
        };
};
