const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Validate the form data
  if (!name || !email || !message) {
    // One or more fields are empty. Display an error message.
    alert('Error: All fields are required.');
  } else {
    // All fields have been filled out. Proceed with form submission.
    // (In a real application, you would likely perform additional validation,
    // such as checking that the email address is in a valid format.)

    // Set the recipient email address
    const to = "Tyler.kand2@gmail.com";

    // Set the subject and message
    const subject = "New Contact Form Submission";
    const body = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    // Send the form data as a POST request
    fetch('/submit-form', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // The form was submitted successfully
          alert('Success: Your message has been sent.');
        } else {
          // There was an error submitting the form
          alert('Error: There was a problem sending your message.');
        }
      })
      .catch((error) => {
        // There was an error sending the request
        alert(`Error: ${error.message}`);
      });
  }
});

