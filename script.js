function compute()
{
    //to get the value from the textbox
   var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   //calculate the compound interest
   var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);
   //if enter amount value is zero or negative value display error
   if (principal<=0) {
                alert("Enter a positive number");
            document.getElementById("principal").focus();}
    else{
var result=document.getElementById("result").innerHTML="If you deposit <mark> "+principal+"</mark>,\<br\>at an interest rate of <mark> "+rate+"</mark>.\<br\>You will receive an amount of <mark> "+interest+"</mark>,\<br\>in the year <mark> "+year+" </mark>\<br\>"   
document.getElementById("principal").focus();   
}
    
     
    
}
//this code update the range value when move slidebar
  function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
