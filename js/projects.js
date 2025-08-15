document.addEventListener("DOMContentLoaded", () => {
  // Project filter functionality with smooth fade in/out animation
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCategories = document.querySelectorAll(".project-category")

  // Mobile dropdown elements
  const dropdownToggle = document.getElementById("projectDropdown")
  const dropdownMenu = document.getElementById("dropdownMenu")
  const dropdownItems = document.querySelectorAll(".dropdown-item")
  const selectedFilter = document.getElementById("selectedFilter")

  // Initialize - show all categories on page load
  initializeCategories()

  // Desktop filter functionality
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")
      handleFilterChange(filter, this.textContent)

      // Update desktop buttons
      filterBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Mobile dropdown toggle
  dropdownToggle.addEventListener("click", function (e) {
    e.stopPropagation()
    dropdownMenu.classList.toggle("active")
    this.classList.toggle("active")
  })

  // Mobile dropdown item selection
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")
      const text = this.textContent

      handleFilterChange(filter, text)

      // Update mobile dropdown
      dropdownItems.forEach((i) => i.classList.remove("active"))
      this.classList.add("active")
      selectedFilter.textContent = text

      // Close dropdown
      dropdownMenu.classList.remove("active")
      dropdownToggle.classList.remove("active")
    })
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdownMenu.classList.remove("active")
    dropdownToggle.classList.remove("active")
  })

  // Initialize categories on page load
  function initializeCategories() {
    projectCategories.forEach((category) => {
      category.style.display = "none"
      category.style.opacity = "1"
      category.style.transform = "translateY(0)"
      category.classList.remove("fade-in", "fade-out")
    })
  }

  // Improved filter change handler with smooth fade in
  function handleFilterChange(filter, text) {
    // Reset all animation classes first
    projectCategories.forEach((category) => {
      category.classList.remove("fade-in", "fade-out")
    })

    // Get currently visible categories
    const visibleCategories = Array.from(projectCategories).filter(
      (category) => category.style.display !== "none" && window.getComputedStyle(category).display !== "none",
    )

    // If there are visible categories, fade them out first
    if (visibleCategories.length > 0) {
      visibleCategories.forEach((category) => {
        category.classList.add("fade-out")
      })

      // Wait for fade out to complete, then show new categories
      setTimeout(() => {
        showCategories(filter)
      }, 400) // Wait for fade out to complete
    } else {
      // No visible categories, show immediately
      showCategories(filter)
    }
  }

  // Function to show categories with smooth fade in
  function showCategories(filter) {
    projectCategories.forEach((category) => {
      const categoryType = category.getAttribute("data-category")

      // Reset classes
      category.classList.remove("fade-in", "fade-out")

      if (filter === "all") {
        // Show all categories with smooth fade in
        category.style.display = "block"
        category.style.opacity = "0" // Start invisible
        category.style.transform = "translateY(20px)" // Start from below

        // Use requestAnimationFrame to ensure display is applied
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            category.classList.add("fade-in")
          })
        })
      } else if (filter === categoryType) {
        // Show specific category with smooth fade in
        category.style.display = "block"
        category.style.opacity = "0" // Start invisible
        category.style.transform = "translateY(20px)" // Start from below

        // Use requestAnimationFrame to ensure display is applied
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            category.classList.add("fade-in")
          })
        })
      } else {
        // Hide category
        category.style.display = "none"
        category.style.opacity = ""
        category.style.transform = ""
      }
    })
  }
})