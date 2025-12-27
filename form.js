
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm');
  const status = document.querySelector('#status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = 'Message sent successfully!!';
      form.reset();
    } else {
      status.textContent = 'Oops! Submission failed.';
    }
  });
});

