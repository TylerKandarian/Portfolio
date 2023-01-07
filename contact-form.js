document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Initialize EmailJS
    emailjs.init('YOUR_USER_ID');

    // Get form data
    var name = form.elements.name.value;
    var email = form.elements.email.value;
    var message = form.elements.message.value;

    // Send the email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      name: name,
      email: email,
      message: message
    }).then(function(response) {
      console.log('Success!', response.status, response.text);
      form.reset();
    }, function(error) {
      console.log('Failed...', error);
    });
  });
});


