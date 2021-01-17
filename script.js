function idCard() {
  
 var firstName = document.getElementById("firstName").value;
 var lastName = document.getElementById("lastName").value;
 var address = document.getElementById("address").value;
 var postFullName = firstName + " " + lastName;
 var postAddress = address;
 
 document.getElementById("postFullName").innerHTML = postFullName;
 document.getElementById("postAddress").innerHTML = postAddress;

 var postAge = parseInt(document.getElementById('age').value);
 var postPhoneNumber = document.getElementById("phoneNumber").value;

 var numberArray = [];

 numberArray.push(postAge, postPhoneNumber);

 for (var i = 0; i < numberArray.length; i++) {

  if (numberArray[i] <= 100) {

  document.getElementById('postAge').innerHTML = "Age: " + postAge;

  }

  else if (numberArray[i] > 100) {

  document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + postPhoneNumber;

  }

 }

}
