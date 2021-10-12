window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop>1||document.documentElement.scrollTop>1)
    {
        document.getElementById("navbar").style.position="fixed";
        document.getElementById("navbar").style.top="0";
        document.getElementById("logo").style.width="100px";
        document.getElementById("navbarbuttons").style.top="10px";
        document.getElementById("whatsapp2").style.display="block";
       
    }
  
    else{
        document.getElementById("navbar").style.position="relative";
        document.getElementById("logo").style.width="150px";
        document.getElementById("navbarbuttons").style.top="20px";
        document.getElementById("whatsapp2").style.display="none";
    }
    
}

function opennavbar(){
  document.getElementById("navbarlink").style.display="block";
  document.getElementById("navbarclose").style.display="block";
  document.getElementById("navbaropen").style.display="none";
}
function closenavbar(){
    document.getElementById("navbarlink").style.display="none";
  document.getElementById("navbarclose").style.display="none";
  document.getElementById("navbaropen").style.display="block";
}


function onloadpage(){
  document.getElementById("onloadpage").style.display="none";
}