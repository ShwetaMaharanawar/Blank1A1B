// $(document).ready(function () {
//   getData();
// });

// function getData() {
//   let localStorageData = localStorage.getItem("student");
//   let studentObj = JSON.parse(localStorageData);
//   console.log(studentObj);
 
//   $("#name").text(studentObj.Name);
//   $("#email").text(studentObj.Email);
//   $("#text").text(studentObj.Phone);
//   $("#url").text(studentObj.Website);
//   $("#subject").text(studentObj.Subject);
//   $("#message").text(studentObj.Message);
  
// }
$(document).ready(function () {
  getData();
});

function getData() {
  let localStorageData = localStorage.getItem("student");
  let studentObj = JSON.parse(localStorageData);
  console.log(studentObj);
 
  $("#firstName").text(studentObj.firstName);
  $("#lastName").text(studentObj.lastName);
  $("#Mobno").text(studentObj.Mobno);
  $("#add").text(studentObj.add);
  $("#mailid").text(studentObj.mailid);
  $("#pincode").text(studentObj.pincode);
  $("#category").text(studentObj.category);
}