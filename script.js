// Handle hero form submission
document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault()
  
    const emailInput = this.querySelector('input[type="email"]')
    const email = emailInput.value
  
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)
  
    // Show success message
    alert("🎉 Success! You're on the waitlist. We'll notify you when CORPTUBE launches!")
  
    // Clear the form
    emailInput.value = ""
  })
  
  // Handle CTA form submission
  document.getElementById("ctaEmailForm").addEventListener("submit", function (e) {
    e.preventDefault()
  
    const emailInput = this.querySelector('input[type="email"]')
    const email = emailInput.value
  
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)
  
    // Show success message
    alert("🎉 Success! You're on the waitlist. We'll notify you when CORPTUBE launches!")
  
    // Clear the form
    emailInput.value = ""
  })
  
  // Smooth scroll for any future anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
  
  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)
  
  // Observe feature cards and stat cards
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".feature-card, .stat-card")
    cards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(card)
    })
  })
  