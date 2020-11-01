function checkpword(str1) 
{
  var n1=0;
  var n2=0;
  var n3=0;
  for(i=0;i<str1.length;i++){
    if(str1[i]>='a' && str1[i]<'z')
    n1++;
    else if(str1[i]>='A' && str1[i]<'Z')
    n2++;
    else if(str1[i]>='0' && str1[i]<'9')
    n3++;
  }
  if(n1>0 && n2>0 && n3>0)
  return true;
  else
  return false;
}

function checkmail(str2)
{
  var posat=str2.indexOf("@");
  var posdot=str2.indexOf(".");

  if(posat!=-1 && posdot!=-1){
    if(posat>=1 && (posdot-posat)>=2 && (str2.length-1-posdot)>=2 && (str2.length-1-posdot)<=5){
      return true;
    }
  }
  else{
    return false;
  }
}
function validateForm(){
  var nam=document.myform.name.value;
  var password=document.myform.password.value;
  var cpassword=document.myform.cpassword.value;
  var email=document.myform.email.value;
  var mobile=document.myform.mobile.value;
  if(nam=="" || nam==null){
    document.getElementById("nam1").innerHTML="Name should not be blank";
    return false;
  }
  else if(nam.length<3){
     document.getElementById("nam1").innerHTML="Name length should be 3-30";
    return false;
  }
  else if(nam.length>30){
     document.getElementById("nam1").innerHTML="Name length should be 3-30";
    return false;
  }
  else if(isNaN(nam)==false){
    document.getElementById("nam1").innerHTML="Name should not be Numeric";
    return false;
  }
  else if(password=="" || password==null){
    document.getElementById("pword").innerHTML="Password should not be blank";
    return false;
  }
  else if(password.length<6){
    document.getElementById("pword").innerHTML="Password should be minimun of 6 characters";
    return false;
  }
  else if(!checkpword(password)){
    document.getElementById("pword").innerHTML="Password should have at least 1 capital letter,1 small letter,1 number";
    return false;
  }
  else if(password!=cpassword){
    document.getElementById("cpword").innerHTML="Password doesn't matched";
    return false;
  }
  else if(email=="" || email==null){
     document.getElementById("mail").innerHTML="Email should not be blank";
    return false;
  }
  else if(!checkmail(email)){
     document.getElementById("mail").innerHTML="Email not valid";
    return false;
  }
  else if(mobile=="" && mobile==null){
     document.getElementById("mn").innerHTML="Mobile number should not be blank";
    return false;
  }
  else if(mobile.length!=10){
     document.getElementById("mn").innerHTML="Please enter 10 digits Mobile Number";
    return false;
  }
  else if(mobile[0]<'6'){
     document.getElementById("mn").innerHTML="Mobile number is invalid";
    return false;
  }
  
}


var row =1;
var entry = document.getElementById("mybtn");
entry.addEventListener("click", displayDetails);

function displayDetails(){
  var name = document.getElementById("n").value;
  var email = document.getElementById("e").value;
  var mno = document.getElementById("mono").value;

  if(!name || !email || !mno){
    alert("Please fill all details");
    return;
  }

  var display = document.getElementById("display");

  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = mno;

  row++;

}
