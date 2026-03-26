document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearEl = document.getElementById("current-year")
  if (yearEl) yearEl.textContent = new Date().getFullYear()

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")
  const navLinks = document.querySelectorAll(".nav-link")

  window.addEventListener("scroll", () => {
    if (!navbar) return

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }

    // Highlight active section in navbar
    let current = ""
    const sections = document.querySelectorAll("section")
    const scrollPos = window.scrollY + window.innerHeight

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (scrollPos >= document.body.scrollHeight - 10) {
        current = "contact"
      } else if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") && link.getAttribute("href").substring(1) === current) {
        link.classList.add("active")
      }
    })
  })

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      menuToggle.innerHTML = navMenu.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>'
    })

    // Close mobile menu when clicking a nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
      })
    })
  }

  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle")

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme")
      const isDark = document.body.classList.contains("dark-theme")
      themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'
      localStorage.setItem("theme", isDark ? "dark" : "light")
    })

    // Check for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-theme")
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId === "#") return
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  // Animation on scroll — use CSS classes instead of inline styles
  const animatedElements = document.querySelectorAll(".profile-content, .certificate-card, .project-card")

  // Set initial CSS class for animation
  animatedElements.forEach((el) => el.classList.add("animate-hidden"))

  const animateOnScroll = () => {
    animatedElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3
      if (elementPosition < screenPosition) {
        element.classList.remove("animate-hidden")
        element.classList.add("animate-visible")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll()
})

// Dynamic duration calculator
function calculateDuration(startDate) {
    const start = new Date(startDate + "-01") // Add day for valid date
    const now = new Date()
    
    let months = (now.getFullYear() - start.getFullYear()) * 12
    months += now.getMonth() - start.getMonth()
    
    // Ensure at least 1 month
    if (months < 1) months = 1
    
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    
    return { years, months: remainingMonths, totalMonths: months }
}

function formatDuration(duration, lang = "id") {
    const { years, months, totalMonths } = duration
    
    if (lang === "id") {
        if (years > 0 && months > 0) {
            return `${years} yr ${months} mos`
        } else if (years > 0) {
            return `${years} yr`
        } else {
            return `${totalMonths} mos`
        }
    } else {
        if (years > 0 && months > 0) {
            return `${years} thn ${months} bln`
        } else if (years > 0) {
            return `${years} thn`
        } else {
            return `${totalMonths} bln`
        }
    }
}

function formatStartDate(startDate, lang = "id") {
    const date = new Date(startDate + "-01")
    const monthsID = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]
    const monthsEN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    const months = lang === "id" ? monthsEN : monthsID
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    
    return `${month} ${year}`
}

function updateDynamicDurations() {
    const lang = localStorage.getItem("language") || "id"
    const presentText = lang === "id" ? "Present" : "Sekarang"
    
    const durationElements = document.querySelectorAll("[data-present='true']")
    
    durationElements.forEach((el) => {
        const startDate = el.getAttribute("data-start")
        if (!startDate) return
        
        const duration = calculateDuration(startDate)
        const formattedDuration = formatDuration(duration, lang)
        const formattedStart = formatStartDate(startDate, lang)
        
        el.textContent = `${formattedStart} - ${presentText} · ${formattedDuration}`
    })
}

// Scroll to email with highlight (email + social icons)
document.addEventListener("DOMContentLoaded", function() {
    const scrollToEmailBtn = document.querySelector(".scroll-to-email")
    const emailBtn = document.querySelector(".email-btn")
    const socialIcons = document.querySelectorAll(".social-icons a")
    
    if (scrollToEmailBtn && emailBtn) {
        scrollToEmailBtn.addEventListener("click", function(e) {
            e.preventDefault()
            
            // Calculate position to center email in viewport
            const emailRect = emailBtn.getBoundingClientRect()
            const emailTop = window.scrollY + emailRect.top
            const viewportHeight = window.innerHeight
            const scrollPosition = emailTop - (viewportHeight / 2) + (emailRect.height / 2)
            
            // Smooth scroll to center email
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            })
            
            // After scroll completes, highlight email and social icons
            setTimeout(() => {
                // Highlight email
                emailBtn.classList.add("highlight")
                
                // Highlight social icons
                socialIcons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.classList.add("highlight")
                    }, index * 100) // Staggered effect
                })
                
                // Remove highlights
                setTimeout(() => {
                    emailBtn.classList.remove("highlight")
                    socialIcons.forEach((icon) => {
                        icon.classList.remove("highlight")
                    })
                }, 1000)
            }, 800)
        })
    }
})

// Run on page load
document.addEventListener("DOMContentLoaded", updateDynamicDurations)

// Export for use in language.js
window.updateDynamicDurations = updateDynamicDurations