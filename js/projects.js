document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectCategories = document.querySelectorAll(".project-category")
    const emptyState = document.getElementById("emptyState")
    const unifiedGrid = document.getElementById("unifiedGrid")

    // Mobile dropdown elements
    const dropdownToggle = document.getElementById("projectDropdown")
    const dropdownMenu = document.getElementById("dropdownMenu")
    const dropdownItems = document.querySelectorAll(".dropdown-item")
    const selectedFilter = document.getElementById("selectedFilter")

    // Guard: exit early if required elements are missing
    if (!dropdownToggle || !dropdownMenu) return

    // Track current active filter
    let currentFilter = "all"

    // Initialize: show all projects on page load
    initializeCategories()

    // Desktop filter buttons
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter")

            if (currentFilter === filter) return

            currentFilter = filter
            filterBtns.forEach((b) => b.classList.remove("active"))
            this.classList.add("active")
            handleFilterChange(filter)
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

            dropdownMenu.classList.remove("active")
            dropdownToggle.classList.remove("active")

            if (currentFilter === filter) return

            currentFilter = filter
            dropdownItems.forEach((i) => i.classList.remove("active"))
            this.classList.add("active")
            if (selectedFilter) selectedFilter.textContent = text
            handleFilterChange(filter)
        })
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
        if (dropdownMenu) dropdownMenu.classList.remove("active")
        if (dropdownToggle) dropdownToggle.classList.remove("active")
    })

    // Build unified grid with all project cards
    function buildUnifiedGrid() {
        if (!unifiedGrid) return
        
        unifiedGrid.innerHTML = ""
        
        // Clone all project cards from all categories
        projectCategories.forEach((category) => {
            const cards = category.querySelectorAll(".project-card")
            cards.forEach((card) => {
                const clonedCard = card.cloneNode(true)
                unifiedGrid.appendChild(clonedCard)
            })
        })
    }

    function initializeCategories() {
        // Hide empty state
        if (emptyState) emptyState.style.display = "none"

        // Build unified grid
        buildUnifiedGrid()

        // Show unified grid, hide individual categories
        if (unifiedGrid) {
            unifiedGrid.style.display = "grid"
            unifiedGrid.style.opacity = "1"
        }

        projectCategories.forEach((category) => {
            category.style.display = "none"
        })

        // Set "all" filter as active
        filterBtns.forEach((btn) => {
            if (btn.getAttribute("data-filter") === "all") {
                btn.classList.add("active")
            } else {
                btn.classList.remove("active")
            }
        })

        dropdownItems.forEach((item) => {
            if (item.getAttribute("data-filter") === "all") {
                item.classList.add("active")
            } else {
                item.classList.remove("active")
            }
        })

        // Update dropdown text
        if (selectedFilter) {
            const lang = localStorage.getItem("language") || "id"
            selectedFilter.textContent = lang === "id" ? "Semua Proyek" : "All Projects"
        }
    }

    function handleFilterChange(filter) {
        // Hide empty state
        if (emptyState) emptyState.style.display = "none"

        if (filter === "all") {
            // Fade out individual categories, show unified grid
            projectCategories.forEach((cat) => {
                cat.classList.add("fade-out")
            })

            setTimeout(() => {
                projectCategories.forEach((cat) => {
                    cat.style.display = "none"
                    cat.classList.remove("fade-out")
                })

                if (unifiedGrid) {
                    unifiedGrid.style.display = "grid"
                    unifiedGrid.style.opacity = "0"
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            unifiedGrid.classList.add("fade-in")
                            unifiedGrid.style.opacity = "1"
                        })
                    })
                    setTimeout(() => unifiedGrid.classList.remove("fade-in"), 400)
                }
            }, 300)
        } else {
            // Fade out unified grid (if visible) or other categories
            if (unifiedGrid && unifiedGrid.style.display !== "none") {
                unifiedGrid.classList.add("fade-out")
            }

            projectCategories.forEach((cat) => {
                if (cat.style.display !== "none") {
                    cat.classList.add("fade-out")
                }
            })

            setTimeout(() => {
                // Hide unified grid
                if (unifiedGrid) {
                    unifiedGrid.style.display = "none"
                    unifiedGrid.classList.remove("fade-out")
                }

                // Hide all categories first
                projectCategories.forEach((cat) => {
                    cat.style.display = "none"
                    cat.classList.remove("fade-out")
                })

                // Show only selected category
                projectCategories.forEach((category) => {
                    const categoryType = category.getAttribute("data-category")
                    if (filter === categoryType) {
                        category.style.display = "block"
                        category.style.opacity = "0"
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                category.classList.add("fade-in")
                                category.style.opacity = "1"
                            })
                        })
                        setTimeout(() => category.classList.remove("fade-in"), 400)
                    }
                })
            }, 300)
        }
    }
})