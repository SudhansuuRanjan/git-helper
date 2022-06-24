function copy1(){
    var copyText = document.getElementById("text1");
    copyText.select();
    document.execCommand("Copy")
    alert("Text copied : "+copyText.value);
}
function copy2(){
    var copyText = document.getElementById("text2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Text copied : "+copyText.value);
}
