// ==UserScript==
// @name        itte.me
// @namespace   http://itte.me/
// @description auto pager of itte.me articles
// @include     http://itte.me/article/*
// @version     1
// @grant       none
// ==/UserScript==

// delete form elements
(function(){
    var forms = document.getElementsByTagName("form");

    while (forms.length > 0) {
	var fm = forms[0];
	fm.parentNode.removeChild(fm);
    }
})();

// concatenate
(function(){
  var contents = "";
  
  var v = null; 
  var i = 1;
  
  do {
    var page_id = "page_"+i;

    v = document.getElementById(page_id);
    if (v == null) { break; }
    contents += "\n<!-- page " + i + " --> \n" + v.innerHTML;
    if (i == 1) {
      v.innerHTML = "";
    }
    else {
      v.parentNode.removeChild(v);
    }
    i++;
  } while(v!=null);
  document.getElementById("page_1").innerHTML = contents;
})();
