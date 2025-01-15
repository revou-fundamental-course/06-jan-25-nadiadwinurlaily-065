document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submittedData = document.getElementById('submittedData');
    const displayFullName = document.getElementById('displayFullName');
    const displayEmail = document.getElementById('displayEmail');
    const displayGender = document.getElementById('displayGender');
    const displayMessage = document.getElementById('displayMessage');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Mencegah form reload halaman
  
      // Ambil data dari form
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const message = document.getElementById('message').value;
  
      // Tampilkan data di elemen hasil
      displayFullName.textContent = fullName;
      displayEmail.textContent = email;
      displayGender.textContent = gender;
      displayMessage.textContent = message;
  
      // Tampilkan div hasil
      submittedData.style.display = 'block';
  
      // Reset form (opsional)
      form.reset();
    });
  });
  