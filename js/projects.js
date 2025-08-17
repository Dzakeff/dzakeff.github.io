document.addEventListener("DOMContentLoaded", () => {
  // Project filter functionality with empty state management
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCategories = document.querySelectorAll(".project-category")
  const emptyState = document.getElementById("emptyState")

  // Mobile dropdown elements
  const dropdownToggle = document.getElementById("projectDropdown")
  const dropdownMenu = document.getElementById("dropdownMenu")
  const dropdownItems = document.querySelectorAll(".dropdown-item")
  const selectedFilter = document.getElementById("selectedFilter")

  // Track current active filter
  let currentFilter = null

  // Initialize - show empty state on page load
  initializeCategories()

  // Desktop filter functionality
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")
      handleFilterChange(filter, this.textContent, this)

      // Update desktop buttons
      filterBtns.forEach((b) => b.classList.remove("active"))

      // Toggle functionality - if clicking same filter, deactivate it
      if (currentFilter === filter) {
        currentFilter = null
        showEmptyState()
      } else {
        this.classList.add("active")
        currentFilter = filter
      }
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

      handleFilterChange(filter, text, this)

      // Update mobile dropdown
      dropdownItems.forEach((i) => i.classList.remove("active"))

      // Toggle functionality - if clicking same filter, deactivate it
      if (currentFilter === filter) {
        currentFilter = null
        selectedFilter.textContent = "Pilih Kategori"
        showEmptyState()
      } else {
        this.classList.add("active")
        selectedFilter.textContent = text
        currentFilter = filter
      }

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
    showEmptyState()
  }

  // Show empty state
  function showEmptyState() {
    emptyState.style.display = "block"
    projectCategories.forEach((category) => {
      category.style.display = "none"
    })
  }

  // Hide empty state
  function hideEmptyState() {
    emptyState.style.display = "none"
  }

  // Improved filter change handler with empty state management
  function handleFilterChange(filter, text, clickedElement) {
    // If clicking the same filter, toggle it off
    if (currentFilter === filter) {
      return // Let the click handler manage the toggle
    }

    // Hide empty state when showing projects
    hideEmptyState()

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