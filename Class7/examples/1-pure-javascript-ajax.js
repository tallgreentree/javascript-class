var getInfo = function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', 'text.xml', false);
        xmlhttp.send();
        var xmlDoc = xmlhttp.responseXML;
        var link = document.getElementById('thelink');
        var text = xmlDoc.getElementsByTagName('text')[0];
        link.innerHTML = text.childNodes[0].nodeValue;
        return false;
};

window.onload = function() {
        var link = document.getElementById('thelink');
        link.onclick = getInfo;
}
