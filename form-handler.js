document.querySelectorAll('form[action="#"]').forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();

    let message = form.querySelector(".form-success");
    if (!message) {
      message = document.createElement("p");
      message.className = "form-success";
      form.appendChild(message);
    }

    message.textContent = "Thank you. Your submission has been received.";
  });
});
