function scrollToSection(section) {
  const targetSection = document.querySelector(section);
  const targetPosition = targetSection.offsetTop - navbar.offsetHeight;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
  // Add highlight class to target section
  targetSection.classList.add('highlight');
  setTimeout(() => {
    targetSection.classList.remove('highlight');
  }, 3000);
}