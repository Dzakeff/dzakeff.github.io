document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectCategories = document.querySelectorAll(".project-category")
    const emptyState = document.getElementById("emptyState")
    const unifiedGrid = document.getElementById("unifiedGrid")

    const dropdownToggle = document.getElementById("projectDropdown")
    const dropdownMenu = document.getElementById("dropdownMenu")
    const dropdownItems = document.querySelectorAll(".dropdown-item")
    const selectedFilter = document.getElementById("selectedFilter")

    if (!dropdownToggle || !dropdownMenu) return

    let currentFilter = "all"

    // Initialize: show all projects sorted by year
    initializeCategories()

    // ─── Desktop filter buttons ───────────────────────────────────────────
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

    // ─── Mobile dropdown ──────────────────────────────────────────────────
    dropdownToggle.addEventListener("click", function (e) {
        e.stopPropagation()
        dropdownMenu.classList.toggle("active")
        this.classList.toggle("active")
    })

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

    document.addEventListener("click", () => {
        if (dropdownMenu) dropdownMenu.classList.remove("active")
        if (dropdownToggle) dropdownToggle.classList.remove("active")
    })

    // ─── Build unified grid sorted by year (newest first) ─────────────────
    function buildSortedGrid() {
        if (!unifiedGrid) return

        // Collect all project cards from all categories
        const allCards = []
        projectCategories.forEach((category) => {
            category.querySelectorAll(".project-card").forEach((card) => {
                allCards.push(card.cloneNode(true))
            })
        })

        // Sort by data-year descending (newest first)
        allCards.sort((a, b) => {
            const yearA = parseInt(a.getAttribute("data-year") || "0")
            const yearB = parseInt(b.getAttribute("data-year") || "0")
            return yearB - yearA
        })

        // Clear and re-render
        unifiedGrid.innerHTML = ""
        allCards.forEach((card) => unifiedGrid.appendChild(card))
    }

    // ─── Helpers ──────────────────────────────────────────────────────────
    function initializeCategories() {
        if (emptyState) emptyState.style.display = "none"

        // Build sorted grid and show it
        buildSortedGrid()
        showAllView(false)

        // Set "all" as active
        filterBtns.forEach((btn) => {
            btn.classList.toggle("active", btn.getAttribute("data-filter") === "all")
        })
        dropdownItems.forEach((item) => {
            item.classList.toggle("active", item.getAttribute("data-filter") === "all")
        })

        if (selectedFilter) {
            const lang = localStorage.getItem("language") || "id"
            selectedFilter.textContent = lang === "id" ? "Semua Proyek" : "All Projects"
        }
    }

    function handleFilterChange(filter) {
        if (emptyState) emptyState.style.display = "none"

        // Fade out currently visible elements
        const visibleEls = []
        if (unifiedGrid && unifiedGrid.style.display !== "none") visibleEls.push(unifiedGrid)
        projectCategories.forEach((cat) => {
            if (cat.style.display !== "none") visibleEls.push(cat)
        })

        if (visibleEls.length > 0) {
            visibleEls.forEach((el) => el.classList.add("fade-out"))
            setTimeout(() => {
                visibleEls.forEach((el) => el.classList.remove("fade-out"))
                applyFilter(filter)
            }, 300)
        } else {
            applyFilter(filter)
        }
    }

    function applyFilter(filter) {
        if (filter === "all") {
            // Rebuild sorted grid (in case language changed the cloned cards)
            buildSortedGrid()
            showAllView(true)
        } else {
            hideAllView()
            showCategory(filter, true)
        }
    }

    function showAllView(animate) {
        if (!unifiedGrid) return
        hideCategories()
        unifiedGrid.style.display = "grid"

        if (animate) {
            unifiedGrid.style.opacity = "0"
            unifiedGrid.style.transform = "translateY(20px)"
            requestAnimationFrame(() => requestAnimationFrame(() => {
                unifiedGrid.classList.add("fade-in")
                unifiedGrid.style.opacity = "1"
                unifiedGrid.style.transform = "translateY(0)"
            }))
            setTimeout(() => unifiedGrid.classList.remove("fade-in"), 400)
        } else {
            unifiedGrid.style.opacity = "1"
            unifiedGrid.style.transform = "translateY(0)"
        }
    }

    function hideAllView() {
        if (!unifiedGrid) return
        unifiedGrid.style.display = "none"
        unifiedGrid.style.opacity = ""
        unifiedGrid.style.transform = ""
        unifiedGrid.classList.remove("fade-in", "fade-out")
    }

    function hideCategories() {
        projectCategories.forEach((cat) => {
            cat.style.display = "none"
            cat.style.opacity = ""
            cat.style.transform = ""
            cat.classList.remove("fade-in", "fade-out")
        })
    }

    function showCategory(filter, animate) {
        projectCategories.forEach((category) => {
            const type = category.getAttribute("data-category")
            if (type === filter) {
                category.style.display = "block"
                if (animate) {
                    category.style.opacity = "0"
                    category.style.transform = "translateY(20px)"
                    requestAnimationFrame(() => requestAnimationFrame(() => {
                        category.classList.add("fade-in")
                        category.style.opacity = "1"
                        category.style.transform = "translateY(0)"
                    }))
                    setTimeout(() => category.classList.remove("fade-in"), 400)
                } else {
                    category.style.opacity = "1"
                    category.style.transform = "translateY(0)"
                }
            } else {
                category.style.display = "none"
            }
        })
    }

    // Expose rebuild for language.js to call after translation updates
    window.rebuildSortedGrid = buildSortedGrid
})