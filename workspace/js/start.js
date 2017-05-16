function callme(e){
    alert("clicked me - " +e.data.msg.value);
}

$("#userName").on("click",{msg:this.document.getElementById('userName')},callme);