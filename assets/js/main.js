window.onload = function(){

    var els = document.getElementsByClassName("founder_card");

    Array.prototype.forEach.call(els, function(el) {
        el.addEventListener('click', function() {
            toggleClass(this, 'active');
        });
    });
}

function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}