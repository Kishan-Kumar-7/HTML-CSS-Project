function MyFormVali() {
    myfname();
    myLname();
    myTele();
    myEmail();
}

function myfname() { 
      let check = document.forms["custForm"]["fname"].value;
      if (check == "") {
        alert("Please Fill First Name...");
        return false;
      }
}

function myLname() {
  let check = document.forms["custForm"]["lname"].value;
  if (check == "") {
    alert("Please Fill Last Name...");
    return false;
  }
}

function myTele() {
  let check = document.forms["custForm"]["tele"].value;
    if (isNaN(check)) {
        alert("Please Enter Numbers Only...");
        return false;
    } else if (check == "") { 
        alert("Please Fill Mobile Number...");
        return false;
    }
}

function myEmail() {
  let check = document.forms["custForm"]["email"].value;
  if (check == "") {
    alert("Please Fill Email Address...");
    return false;
  }
}
