//reviews navigation button js
const track = document.querySelector(".reviewcarousel-track");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

function updateCarousel() {
  const itemWidth = items[0].clientWidth;
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});
//reviews navigation button js








//navbar hamburger menu navbar hamburger menu navbar hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click",()=>{
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }))





const form = document.querySelector('#contactForm');
const status = document.querySelector('#status');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // ← THIS kills the redirect

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = 'Message sent successfully';
      form.reset();
    } else {
      status.textContent = 'Something went wrong';
    }
  } catch (error) {
    status.textContent = 'Network error';
  }
});















// const contactForm = document.getElementById('contact-form');

// function initFormValidation() {

//  if (!contactForm) return;


//  contactForm.addEventListener('submit', function(e) {

//  e.preventDefault();

 

//  const formData = new FormData(contactForm);

//  const name = formData.get('name').trim();

//  const email = formData.get('email').trim();

// //  const phone = formData.get('phone').trim();

//  const message = formData.get('message').trim();

//  const company = formData.get('company')?.trim() || '';


//  formMessage.className = 'form__message';

//  formMessage.textContent = '';


//  let isValid = true;

//  let errorMessage = '';


//  if (!name || name.length < 2) {

//  isValid = false;

//  errorMessage = 'Please enter a valid name (at least 2 characters).';

//  } else if (!isValidEmail(email)) {

//  isValid = false;

//  errorMessage = 'Please enter a valid email address.';

//  } 
// //  else if (!isValidPhone(phone)) {

// //  isValid = false;

// //  errorMessage = 'Please enter a valid phone number.';

// //  } 
//  else if (!message || message.length < 10) {

//  isValid = false;

//  errorMessage = 'Please enter a message (at least 10 characters).';

//  }


//  if (!isValid) {

//  showFormMessage(errorMessage, 'error');

//  return;

//  }


//  const submitButton = contactForm.querySelector('button[type="submit"]');

//  const originalButtonText = submitButton.textContent;

//  submitButton.disabled = true;

//  submitButton.textContent = 'Sending...';


//  const formDataToSend = new FormData(contactForm);

 

//  fetch(contactForm.action, {

//   method: 'POST',

//   body: formDataToSend,

//   headers: {

//   'Accept': 'application/json'

//   }

//  })

//  .then(response => {

//  if (response.ok) {

//  showFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');

//  contactForm.reset();

//  } else {

//  return response.json().then(data => {

//      if (data.errors) {

//      showFormMessage(data.errors.map(error => error.message).join(', '), 'error');

//          } else {

//              showFormMessage('There was a problem sending your message. Please try again.', 'error');

//          }

//      });

//  }

//  })

//  .catch(error => {

//  showFormMessage('There was a problem sending your message. Please try again later.', 'error');

//  console.error('Form submission error:', error);

//  })

//  .finally(() => {

//  submitButton.disabled = false;

//  submitButton.textContent = originalButtonText;

//  });

//  });


//  const formInputs = contactForm.querySelectorAll('input, textarea');

//  formInputs.forEach(input => {

//  input.addEventListener('blur', function() {

//   validateField(input);

//  });


//  input.addEventListener('input', function() {

//  if (input.classList.contains('error')) {

//   validateField(input);

//  }

//  });

//  });

//  }

//  function validateField(field) {

//  const value = field.value.trim();

//  let isValid = true;


//  field.classList.remove('error');


//  if (field.hasAttribute('required') && !value) {

//      isValid = false;

//  } else if (field.type === 'email' && value && !isValidEmail(value)) {

//      isValid = false;

//  } 
// //  else if (field.type === 'tel' && value && !isValidPhone(value)) {

// // isValid = false;
// // } 
// else if (field.name === 'message' && value && value.length < 10) {

// isValid = false;

//  } else if (field.name === 'name' && value && value.length < 2) {

// isValid = false;

//  }


//  if (!isValid) {

//  field.classList.add('error');

// field.style.borderColor = 'var(--color-error)';

//  } else {

//  field.style.borderColor = '';

//  }


//  return isValid;

//  }


// function isValidEmail(email) {

//  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//  return emailRegex.test(email);
//  }


// function isValidPhone(phone) {

//  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;

//  return phoneRegex.test(phone);
//  }


// function showFormMessage(message, type) {
//     formMessage.textContent = message;
//     formMessage.className = `form__message ${type}`;
//     formMessage.style.display = 'block';

//     formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
// }

// (function() {
//     'use strict';

//     const contactForm = document.getElementById('contact-form');


//  function initFormValidation() {
//         if (!contactForm) return;

//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const formData = new FormData(contactForm);
//             const name = formData.get('name').trim();
//             const email = formData.get('email').trim();
//             const phone = formData.get('phone').trim();
//             const message = formData.get('message').trim();
//             const company = formData.get('company')?.trim() || '';

//             formMessage.className = 'form__message';
//             formMessage.textContent = '';

//             let isValid = true;
//             let errorMessage = '';

//             if (!name || name.length < 2) {
//                 isValid = false;
//                 errorMessage = 'Please enter a valid name (at least 2 characters).';
//             } else if (!isValidEmail(email)) {
//                 isValid = false;
//                 errorMessage = 'Please enter a valid email address.';
//             } else if (!isValidPhone(phone)) {
//                 isValid = false;
//                 errorMessage = 'Please enter a valid phone number.';
//             } else if (!message || message.length < 10) {
//                 isValid = false;
//                 errorMessage = 'Please enter a message (at least 10 characters).';
//             }

//             if (!isValid) {
//                 showFormMessage(errorMessage, 'error');
//                 return;
//             }

//             const submitButton = contactForm.querySelector('button[type="submit"]');
//             const originalButtonText = submitButton.textContent;
//             submitButton.disabled = true;
//             submitButton.textContent = 'Sending...';

//             const formDataToSend = new FormData(contactForm);
            
//             fetch(contactForm.action, {
//                 method: 'POST',
//                 body: formDataToSend,
//                 headers: {
//                     'Accept': 'application/json'
//                 }
//             })
//             .then(response => {
//                 if (response.ok) {
//                     showFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
//                     contactForm.reset();
//                 } else {
//                     return response.json().then(data => {
//                         if (data.errors) {
//                             showFormMessage(data.errors.map(error => error.message).join(', '), 'error');
//                         } else {
//                             showFormMessage('There was a problem sending your message. Please try again.', 'error');
//                         }
//                     });
//                 }
//             })
//             .catch(error => {
//                 showFormMessage('There was a problem sending your message. Please try again later.', 'error');
//                 console.error('Form submission error:', error);
//             })
//             .finally(() => {
//                 submitButton.disabled = false;
//                 submitButton.textContent = originalButtonText;
//             });
//         });

//         const formInputs = contactForm.querySelectorAll('input, textarea');
//         formInputs.forEach(input => {
//             input.addEventListener('blur', function() {
//                 validateField(input);
//             });

//             input.addEventListener('input', function() {
//                 if (input.classList.contains('error')) {
//                     validateField(input);
//                 }
//             });
//         });
//     }

//     function validateField(field) {
//         const value = field.value.trim();
//         let isValid = true;

//         field.classList.remove('error');

//         if (field.hasAttribute('required') && !value) {
//             isValid = false;
//         } else if (field.type === 'email' && value && !isValidEmail(value)) {
//             isValid = false;
//         } else if (field.type === 'tel' && value && !isValidPhone(value)) {
//             isValid = false;
//         } else if (field.name === 'message' && value && value.length < 10) {
//             isValid = false;
//         } else if (field.name === 'name' && value && value.length < 2) {
//             isValid = false;
//         }

//         if (!isValid) {
//             field.classList.add('error');
//             field.style.borderColor = 'var(--color-error)';
//         } else {
//             field.style.borderColor = '';
//         }

//         return isValid;
//     }

//     function isValidEmail(email) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }

//     function isValidPhone(phone) {
//         const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
//         return phoneRegex.test(phone);
//     }

//     function showFormMessage(message, type) {
//         formMessage.textContent = message;
//         formMessage.className = `form__message ${type}`;
//         formMessage.style.display = 'block';

//         formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//             }
//         })();



