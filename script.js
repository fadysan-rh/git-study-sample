// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission handling
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Show success message
    alert(
      "お問い合わせありがとうございます。担当者より返信させていただきます。"
    );

    // Reset form
    contactForm.reset();
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(section);
});

// Add fade-in class for visible sections
document.addEventListener("DOMContentLoaded", () => {
  const addFadeInClass = () => {
    document.querySelectorAll(".section").forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.8;

      if (isVisible) {
        section.classList.add("fade-in");
      }
    });
  };

  // Initial check
  addFadeInClass();
});

// Add CSS for fade-in animation
const style = document.createElement("style");
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
