// Card hover animation already handled in CSS
// Adding simple interactions

// Booking form validation
function validateBooking() {
  let valid = true;

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value.trim();

  if (name === "") {
    document.getElementById("nameErr").innerText = "Name is required";
    valid = false;
  } else document.getElementById("nameErr").innerText = "";

  if (phone.length < 10 || isNaN(phone)) {
    document.getElementById("phoneErr").innerText = "Enter a valid phone number";
    valid = false;
  } else document.getElementById("phoneErr").innerText = "";

  if (service === "") {
    document.getElementById("serviceErr").innerText = "Please select a service";
    valid = false;
  } else document.getElementById("serviceErr").innerText = "";

  if (valid) alert("Your appointment is booked successfully!");

  return valid;
}
