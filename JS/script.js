document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        document.querySelectorAll('.highlight').forEach(el => {
          el.classList.remove('highlight');
        });
        targetElement.classList.add('highlight');
      }
    });
  });
});
const style = document.createElement('style');
style.innerHTML = `
  .highlight {
    background-color: #e6ffee;
    border: 2px solid #00cc66;
    padding: 10px;
    transition: all 0.3s ease-in-out;
  }
`;
document.head.appendChild(style);
