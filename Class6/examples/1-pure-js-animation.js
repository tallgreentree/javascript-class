var position = 0;
var move = function() {
        if(position < 100) { 
                position += 1;
                document.getElementById('wat').setAttribute('style', 'position: absolute; top: '+position+'px');
        } else {
                clearInterval(interval);
        }
};

window.onclick = function() {
        var div = document.getElementById('wat');
        div.onclick = function() {
                setInterval(move, 10);
        };
}
