var a;
function show_hide() {
    if(a==1){
        document.getElementById("text-box").style.display="inline";
        document.querySelector('#loginBtn').textContent = 'Hide Text!';
        return a=0;
    }

    else {
        document.getElementById("text-box").style.display="none";
        document.querySelector('#loginBtn').textContent = 'Show Text!';
        return a=1;
    }
}


    

