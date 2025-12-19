// Toggle mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Simple form submission simulation
const orderForm = document.getElementById('orderForm');
const formStatus = document.getElementById('formStatus');

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Gather form data
  const data = {
    name: orderForm.name.value.trim(),
    phone: orderForm.phone.value.trim(),
    message: orderForm.message.value.trim()
  };

  // Basic validation (already required fields check)
  if (!data.name || !data.phone) {
    formStatus.textContent = 'দয়া করে প্রয়োজনীয় তথ্য পূরণ করুন।';
    formStatus.style.color = 'red';
    return;
  }

  // Here, connect to your backend or WhatsApp link as needed.
  // For demo: show success message.
  formStatus.textContent = 'ধন্যবাদ! আপনার অনুরোধ পাঠানো হয়েছে। শীঘ্রই যোগাযোগ করা হবে।';
  formStatus.style.color = 'green';

  // Optionally reset form
  orderForm.reset();
});
