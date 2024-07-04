// Ini Javascript

function validateForm() {
  let name = document.getElementById("name").value;
  let born = document.getElementById("born").value;
  let male = document.getElementById("male").value;
  let female = document.getElementById("female").value;
  let message = document.getElementById("message").value;

  console.log(name);
  console.log(born);
  console.log(male);
  console.log(female);
  console.log(message);

  if (
    (name && born && male && female && message != null) ||
    (name && born && male && female && message != "")
  ) {
    alert("Pesan terkirim!");
  } else {
    alert("Silahkan input ulang data anda dengan benar!");
  }
}
