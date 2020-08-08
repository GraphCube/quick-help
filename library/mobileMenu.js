function toggle(id,sz) {
    var el = document.getElementById(id);
    var box = el.getAttribute("class");
	//alert(vmx);
    if(box == "hide"){
		el.setAttribute("class", "show");
        el.style.width=sz;
    }
    else{
		el.setAttribute("class", "hide");
        el.style.width='40px';
    }
	
}
function delay(elem, src, delayTime){
    window.setTimeout(function() {elem.setAttribute("src", src);}, delayTime);
}