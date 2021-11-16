adhar = document.getElementById("aadharnum").value;
var adharcard = /^\d{12}$/;
var adharsixteendigit = /^\d{16}$/;
if (adhar != '') {
     if (!adhar.match(adharcard))
     {
         alert("Invalid Aadhar Number");
         return false;
     }
 }
 if (adhar != '')
 {
     if(!adhar.match(adharsixteendigit))
     {
         alert("Invalid Aadhar Number");
         return false;
     }
 }