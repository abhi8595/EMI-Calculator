var interest=()=>{
    var code=data();
    document.querySelector("#total").innerHTML="&#8377;"+Math.round(code);
}
var data=()=>{
var p=document.querySelector("#txtamount").value;
var y=document.querySelector("#txtyear").value;
var r=document.querySelector("#txtrate").value;
r=r/(12*100);
y=y*12;
var emi = (p*r*Math.pow(1+r,y))/(Math.pow(1+r,y)-1);
console.log(emi)
return emi;
}