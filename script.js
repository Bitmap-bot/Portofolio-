// Menambahkan event listener pada tombol
document.getElementById('scrollToAboutMe').addEventListener('click', function () {
  // Mendapatkan elemen About Me
  const aboutMeSection = document.getElementById('about-me');
  
  // Scroll ke elemen tersebut
  aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});

