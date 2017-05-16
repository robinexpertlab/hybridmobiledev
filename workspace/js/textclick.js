function textboxclicked(e)
{
alert("Clicked Textbox -" +e.data.msg.value);
}

$("#UserName").on("click",{msg:this.document.getElementById('UserName')},textboxclicked);
