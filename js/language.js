document.addEventListener("DOMContentLoaded", () => {
  const languages = {
    en: {
      siteTitle: "Dzakeff - Portfolio",
      nav: ["Profile", "Experience", "Projects", "Certificates", "Contact"],
      hero: {
        name: "Dzakwan Efendi",
        subtitle: "Cyber Security & IT Enthusiast",
        downloadCV: "My CV",
        contactMe: "Contact Me",
        cvPath: "/Documents/New CV Muhamad Dzakwan Ar Efendi - English (Cyber).pdf",
      },
      profile: {
        title: "About Me",
        greeting: "Hi, I'm Muhamad Dzakwan Ar Efendi",
        description:
          "Cybersecurity and network security enthusiast with hands-on experience in network deployment, troubleshooting, and infrastructure security. Currently working as a Technical Support at PT Maxindo Mitra Solusi, handling network installations, onsite troubleshooting, and router hardening in production environments. Experienced in analyzing network traffic, implementing security configurations, and managing enterprise networking solutions. Seeking an opportunity to grow as a Security Analyst and contribute to threat detection and infrastructure security.",
        location: "Location",
        email: "Email",
        locationValue: "Bogor, Indonesia",
      },
      experience: {
        title: "Work Experience",
        description: "My professional journey and career highlights",
        "company-maxindo": "PT Maxindo Mitra Solusi",
        "company-idnetworkers": "ID-Networkers",
        "idnetworkers-duration": "May 2025 - Aug 2025 · 4 mos",
        "current-position-duration": "May 2025 - Present · 10 mos",
        "intern-position-duration": "Jan 2024 - Jun 2024 · 6 mos",
        "bootcamp-duration": "Jun 2025 - Aug 2025 · 3 mos",
        "bootcamp-ctf-duration": "May 2025 - May 2025 · 1 mo",
        "location-jakarta": "West Jakarta, Indonesia · On-site",
        "location-indonesia": "Indonesia · Remote",
        "position-tech-support-staff": "Technical Support Staff",
        "position-tech-support-intern": "Technical Support Intern",
        "position-bootcamp-student": "Bootcamp Student Cyber Security",
        "position-bootcamp-ctf": "Bootcamp CTF Player",
        "maxindo-achievement-1": "Conducted site surveys to assess client network requirements and infrastructure conditions.",
        "maxindo-achievement-2": "Installed and configured network devices such as routers, switches, and access points.",
        "maxindo-achievement-3": "Performed troubleshooting on network issues, ensuring minimal downtime and service disruption.",
        "maxindo-achievement-4": "Provided routine maintenance and monitoring of network systems to maintain optimal performance.",
        "idnetworkers-achievement-1": "Participated in the IDN Cyber Security bootcamp for 10 weeks with intensive learning (theory & practice) on Linux, pentesting, web & mobile security, SOC labs, and cloud security.",
        "idnetworkers-achievement-2": "Worked on projects and simulated real attacks every week.",
        "idnetworkers-achievement-3": "Participated in various CTF (Capture The Flag) competitions to sharpen skills in problem-solving and vulnerability exploitation.",
        "maxindo-skills": "MikroTik, Cisco, Ruijie, EnGenius, GrandStream, UniFi, Huawei",
        "intern-skills": "MikroTik, Cisco, Ruijie, EnGenius, GrandStream, UniFi",
        "idnetworkers-skills": "Hardening, Red-Team, Cisco, Kali Linux, Metasploit, Cryptography, Penetration Testing, Security Operation Center",
        "bootcamp-ctf-skills": "Cryptography, USB Forensic, Windows Forensic, Browser Forensic, Web Exploit, Web 303, Log Analysis, Forensic",
      },
      projects: {
        title: "My Projects",
        description: "A showcase of my recent work, personal projects, and contributions",
        project: "Project",
        filterAll: "All Projects",
        filterMaxindo: "PT Maxindo Mitra Solusi",
        filterIdnetworkers: "ID-Networkers",
        filterWikrama: "Wikrama Vocational School",
        categoryMaxindo: "Associated with PT Maxindo Mitra Solusi",
        categoryIdnetworkers: "Associated with ID-Networkers",
        categoryWikrama: "Associated with Wikrama Vocational School",
        emptyStateTitle: "Select Category to View Projects",
        emptyStateDescription: "Use the filters above to explore my projects by category",
        selectCategory: "Select Category",
        projectTitles: {
          maxindo: [
            "Network Installation at PKU Muhammadiyah Hospital Yogyakarta",
            "Network Installation at Citadines Connect Airport Jakarta Hotel",
            "Network Installation at Brits Hotel Puri Indah",
          ],
          idnetworkers: ["ID-Networkers Bootcamp Catch The Flag Challenge"],
          wikrama: [
            "Network Design and Client Consultation Project",
            "Network Security Project",
            "PNETLab Network Simulation",
            "MikroTik Network Integration with AWS",
            "Office Network Setup with MikroTik",
            "FTTH Project with MikroTik",
            "AWS Infrastructure Project",
            "Linux Server Project",
            "Cisco Packet Tracer Lab",
          ],
        },
        maxindoProjects: [
          "Implemented on-site network infrastructure installation at PKU Muhammadiyah Hospital Yogyakarta, including device configuration and the design of network layout and topology to support reliable and efficient hospital connectivity.",
          "Upgraded network infrastructure at Citadines Connect Airport Jakarta Hotel, including device refresh, addition of access points and switches, to enhance coverage, capacity, and overall network performance.",
          "Upgraded network infrastructure at Brits Hotel Puri Indah, including device refresh, addition of access points and switches, to enhance coverage, capacity, and overall network performance.",
        ],
        idNetworkersProjects: [
          "Participated in a Capture The Flag (CTF) challenge during the Cyber Security IDN bootcamp, focusing on penetration testing, vulnerability exploitation, and system hardening. Worked on various challenges and attack simulations to enhance cybersecurity skills.",
        ],
        wikramaProjects: [
          "Designed a network topology from scratch, evaluated existing devices, recommended new equipment, and coordinated directly with the client to ensure the solution met their needs.",
          "Implemented Snort IDS, ARP Poisoning (MITM), DMZ, USB mounting restrictions, password hardening, IPtables configuration, and Nmap scanning for network defense testing.",
          "Configured MikroTik and Cisco devices in PNETLab, including basic MikroTik setup and DMZ implementation to a secondary router.",
          "Configured a MikroTik router to integrate with AWS by assigning static DNS for AWS server IPs, and setting up hotspot, DHCP, and VLAN.",
          "Set up a small office network using two MikroTik routers with static routing, load balancing, OSPF, queue management, firewall, and hotspot.",
          "Implemented PPPoE and hotspot on MikroTik routers, and performed FO cable installation with OLT and ONT configuration.",
          "Built scalable infrastructure using ELB, Auto Scaling, RDS, Zabbix and Nagios for monitoring, and configured VPC and EC2 instances.",
          "Deployed a Linux server with LEMP stack, WordPress, SSH key authentication, mail server with webmail, virtual hosts, VoIP service, and additional services including Apache2, Nginx, HTTPS, Samba, IPtables NAT gateway, FTP, DNS, and DHCP.",
          "Simulated a network in Cisco Packet Tracer with configuration of routing between two routers, VLAN, DHCP server on router, DNS server, and web server.",
        ],
      },
      certificates: {
        title: "Certificates",
        description: "Professional certifications and achievements I've earned throughout my career",
        descriptions: [
          "Certified in basic MikroTik network configuration, including routing, wireless, firewall, and network troubleshooting.",
          "Knowledge of networking fundamentals, how devices communicate, cabling, network addressing and services, troubleshooting and support of endpoints.",
          "Understanding of network monitoring and protection techniques, including the use of firewalls, cloud security, and cryptography, as well as familiarity with handling security alerts and implementing security governance.",
          "Understanding Linux configurations, including use of DNS and DHCP server, MariaDB.",
          "Foundational understanding of Networking such as IPV4, TCP/IP, and OSI Model.",
          "Certified in foundational networking concepts, including IP addressing, network protocols, and basic router/switch configuration.",
          "Trained in network simulation using PNETLab, focusing on network design, configuration, and troubleshooting in a virtual environment.",
          "Studied ethical hacking, application and network exploitation, IoT security, penetration testing, and vulnerability assessment and scanning.",
          "Learned about the opportunities and challenges of AI, quantum computing, and cryptography.",
          "Gained knowledge of various types of viruses and malicious applications, including their forms and attack methods.",
          "Participated in the MikroTik Network Olympiad, demonstrating skills in network configuration using MikroTik RouterOS.",
          "Completed a basic Cisco course covering networking fundamentals, IP addressing, and introductory routing/switching.",
          "Studied virtualization fundamentals, including VMware usage and virtual machine configuration for server and network needs.",
        ],
      },
      contact: {
        title: "Get In Touch",
        description: "Have a project in mind or want to collaborate? Feel free to reach out!",
        contactMe: "Contact Me",
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
    id: {
      siteTitle: "Dzakeff - Portofolio",
      nav: ["Profil", "Pengalaman", "Proyek", "Sertifikat", "Kontak"],
      hero: {
        name: "Dzakwan Efendi",
        subtitle: "Cyber Security & IT Enthusiast",
        downloadCV: "CV Saya",
        contactMe: "Hubungi Saya",
        cvPath: "/Documents/CV Muhamad Dzakwan Ar Efendi - Indonesia (Cyber).pdf",
      },
      profile: {
        title: "Tentang Saya",
        greeting: "Hai, Saya Muhamad Dzakwan Ar Efendi",
        description:
          "Saya adalah lulusan SMK Wikrama Bogor tahun 2025 berusia 18 tahun, jurusan Teknik Komputer Jaringan dan Telekomunikasi. Saya telah menyelesaikan magang selama enam bulan di PT Maxindo Mitra Solusi sebagai Technical Support, di mana saya bertanggung jawab untuk penilaian kebutuhan, instalasi, troubleshooting, dan pemeliharaan jaringan. Saya bersemangat untuk membangun karir di bidang cyber security dan administrasi sistem.",
        location: "Lokasi",
        email: "Email",
        locationValue: "Bogor, Indonesia",
      },
      experience: {
        title: "Pengalaman Kerja",
        description: "Perjalanan profesional dan pencapaian karir saya",
        "company-maxindo": "PT Maxindo Mitra Solusi",
        "company-idnetworkers": "ID-Networkers",
        "idnetworkers-duration": "May 2025 - Aug 2025 · 4 bln",
        "current-position-duration": "Mei 2025 - Sekarang · 10 bln",
        "intern-position-duration": "Jan 2024 - Jun 2024 · 6 bln",
        "bootcamp-duration": "Jun 2025 - Aug 2025 · 3 bln",
        "bootcamp-ctf-duration": "May 2025 - May 2025 · 1 bln",
        "location-jakarta": "Jakarta Barat, Indonesia · On-site",
        "location-indonesia": "Indonesia · Remote",
        "position-tech-support-staff": "Technical Support Staff",
        "position-tech-support-intern": "Technical Support Intern",
        "position-bootcamp-student": "Bootcamp Student Cyber Security",
        "position-bootcamp-ctf": "Bootcamp CTF Player",
        "maxindo-achievement-1": "Melakukan survei lokasi untuk menilai kebutuhan jaringan klien dan kondisi infrastruktur.",
        "maxindo-achievement-2": "Menginstal dan mengkonfigurasi perangkat jaringan seperti router, switch, dan access point.",
        "maxindo-achievement-3": "Melakukan troubleshooting pada masalah jaringan, memastikan downtime dan gangguan layanan minimal.",
        "maxindo-achievement-4": "Menyediakan pemeliharaan rutin dan pemantauan sistem jaringan untuk menjaga kinerja optimal.",
        "idnetworkers-achievement-1": "Mengikuti bootcamp Cyber Security IDN selama 10 minggu dengan pembelajaran intensif (teori & praktik) mengenai Linux, pentesting, keamanan web & mobile, SOC labs, dan cloud security.",
        "idnetworkers-achievement-2": "Mengerjakan proyek dan simulasi serangan nyata setiap minggunya.",
        "idnetworkers-achievement-3": "Berpartisipasi dalam berbagai kompetisi CTF (Capture The Flag) untuk mengasah keterampilan dalam pemecahan masalah dan eksploitasi kerentanan.",
        "maxindo-skills": "MikroTik, Cisco, Ruijie, EnGenius, GrandStream, UniFi, Huawei",
        "intern-skills": "MikroTik, Cisco, Ruijie, EnGenius, GrandStream, UniFi",
        "idnetworkers-skills": "Hardening, Red-Team, Cisco, Kali Linux, Metasploit, Cryptography, Penetration Testing, Security Operation Center",
        "bootcamp-ctf-skills": "Cryptography, USB Forensic, Windows Forensic, Browser Forensic, Web Exploit, Web 303, Log Analysis, Forensic",
      },
      projects: {
        title: "Proyek Saya",
        description: "Tampilan karya terbaru, proyek pribadi, dan kontribusi saya",
        project: "Proyek",
        filterAll: "Semua Proyek",
        filterMaxindo: "PT Maxindo Mitra Solusi",
        filterIdnetworkers: "ID-Networkers",
        filterWikrama: "SMK Wikrama Bogor",
        categoryMaxindo: "Terkait dengan PT Maxindo Mitra Solusi",
        categoryIdnetworkers: "Terkait dengan ID-Networkers",
        categoryWikrama: "Terkait dengan SMK Wikrama Bogor",
        emptyStateTitle: "Pilih Kategori Proyek",
        emptyStateDescription: "Silakan pilih kategori di atas untuk melihat proyek-proyek saya",
        selectCategory: "Pilih Kategori",
        projectTitles: {
          maxindo: [
            "Instalasi Jaringan di RS PKU Muhammadiyah Yogyakarta",
            "Instalasi Jaringan di Citadines Connect Airport Jakarta Hotel",
            "Instalasi Jaringan di Brits Hotel Puri Indah",
          ],
          idnetworkers: ["Tantangan Capture The Flag Bootcamp ID-Networkers"],
          wikrama: [
            "Proyek Desain Jaringan dan Konsultasi Klien",
            "Proyek Keamanan Jaringan",
            "Simulasi Jaringan PNETLab",
            "Integrasi Jaringan MikroTik dengan AWS",
            "Pengaturan Jaringan Kantor dengan MikroTik",
            "Proyek FTTH dengan MikroTik",
            "Proyek Infrastruktur AWS",
            "Proyek Server Linux",
            "Lab Cisco Packet Tracer",
          ],
        },
        maxindoProjects: [
          "Melaksanakan instalasi infrastruktur jaringan di Rumah Sakit PKU Muhammadiyah Yogyakarta, termasuk konfigurasi perangkat dan desain tata letak serta topologi jaringan untuk mendukung konektivitas rumah sakit yang handal dan efisien.",
          "Melakukan upgrade infrastruktur jaringan di Citadines Connect Airport Jakarta Hotel, termasuk penyegaran perangkat, penambahan access point dan switch, untuk meningkatkan cakupan, kapasitas, dan kinerja jaringan secara keseluruhan.",
          "Melakukan upgrade infrastruktur jaringan di Brits Hotel Puri Indah, termasuk penyegaran perangkat, penambahan access point dan switch, untuk meningkatkan cakupan, kapasitas, dan kinerja jaringan secara keseluruhan.",
        ],
        idNetworkersProjects: [
          "Partisipasi dalam tantangan Capture The Flag (CTF) selama bootcamp Cyber Security IDN, berfokus pada pengujian penetrasi, eksploitasi kerentanan, dan penguatan sistem. Mengerjakan berbagai tantangan dan simulasi serangan untuk meningkatkan keterampilan keamanan siber.",
        ],
        wikramaProjects: [
          "Merancang topologi jaringan dari awal, mengevaluasi perangkat yang ada, merekomendasikan perangkat baru, dan berkoordinasi langsung dengan klien untuk memastikan solusi sesuai kebutuhan.",
          "Mengimplementasikan Snort IDS, ARP Poisoning (MITM), DMZ, pembatasan pemasangan USB, penguatan kata sandi, konfigurasi IPtables, dan pemindaian Nmap untuk pengujian pertahanan jaringan.",
          "Mengkonfigurasi perangkat MikroTik dan Cisco di PNETLab, termasuk pengaturan dasar MikroTik dan implementasi DMZ ke router sekunder.",
          "Mengkonfigurasi router MikroTik untuk terintegrasi dengan AWS dengan menetapkan DNS statis untuk IP server AWS, dan mengatur hotspot, DHCP, dan VLAN.",
          "Menyiapkan jaringan kantor kecil menggunakan dua router MikroTik dengan static routing, load balancing, OSPF, manajemen antrian, firewall, dan hotspot.",
          "Mengimplementasikan PPPoE dan hotspot pada router MikroTik, dan melakukan instalasi kabel FO dengan konfigurasi OLT dan ONT.",
          "Membangun infrastruktur yang dapat diskalakan menggunakan ELB, Auto Scaling, RDS, Zabbix dan Nagios untuk pemantauan, dan mengkonfigurasi VPC dan instans EC2.",
          "Menerapkan server Linux dengan LEMP stack, WordPress, autentikasi kunci SSH, mail server dengan webmail, virtual host, layanan VoIP, dan layanan tambahan termasuk Apache2, Nginx, HTTPS, Samba, gateway NAT IPtables, FTP, DNS, dan DHCP.",
          "Mensimulasikan jaringan di Cisco Packet Tracer dengan konfigurasi routing antara dua router, VLAN, server DHCP pada router, server DNS, dan server web.",
        ],
      },
      certificates: {
        title: "Sertifikat",
        description: "Sertifikasi profesional dan pencapaian yang telah saya peroleh sepanjang karir saya",
        descriptions: [
          "Tersertifikasi dalam konfigurasi jaringan MikroTik dasar, termasuk routing, wireless, firewall, dan troubleshooting jaringan.",
          "Pengetahuan tentang dasar-dasar jaringan, bagaimana perangkat berkomunikasi, pengkabelan, pengalamatan jaringan dan layanan, troubleshooting dan dukungan endpoint.",
          "Pemahaman tentang teknik pemantauan dan perlindungan jaringan, termasuk penggunaan firewall, keamanan cloud, dan kriptografi, serta keakraban dengan penanganan peringatan keamanan dan implementasi tata kelola keamanan.",
          "Pemahaman konfigurasi Linux, termasuk penggunaan server DNS dan DHCP, MariaDB.",
          "Pemahaman dasar tentang Jaringan seperti IPV4, TCP/IP, dan Model OSI.",
          "Tersertifikasi dalam konsep jaringan dasar, termasuk pengalamatan IP, protokol jaringan, dan konfigurasi router/switch dasar.",
          "Terlatih dalam simulasi jaringan menggunakan PNETLab, berfokus pada desain jaringan, konfigurasi, dan troubleshooting dalam lingkungan virtual.",
          "Mempelajari ethical hacking, eksploitasi aplikasi dan jaringan, keamanan IoT, penetration testing, dan penilaian kerentanan dan pemindaian.",
          "Mempelajari peluang dan tantangan AI, komputasi kuantum, dan kriptografi.",
          "Mengenal berbagai jenis virus dan aplikasi berbahaya, termasuk bentuk dan metode serangannya.",
          "Berpartisipasi dalam Olimpiade Jaringan MikroTik, mendemonstrasikan keterampilan dalam konfigurasi jaringan menggunakan MikroTik RouterOS.",
          "Menyelesaikan kursus dasar Cisco, mencakup dasar-dasar jaringan, pengalamatan IP, dan router/switch pengantar.",
          "Mempelajari dasar-dasar virtualisasi, penggunaan VMware, dan konfigurasi virtual machine untuk kebutuhan server dan jaringan.",
        ],
      },
      contact: {
        title: "Hubungi Saya",
        description: "Punya proyek dalam pikiran atau ingin berkolaborasi? Jangan ragu untuk menghubungi!",
        contactMe: "Hubungi Saya",
      },
      footer: {
        rights: "Hak Cipta Dilindungi.",
      },
    },
  }

  const languageToggle = document.querySelector(".language-toggle")
  const cvDownloadBtn = document.getElementById("cv-download-btn")

  if (!languageToggle) return

  let currentLang = localStorage.getItem("language") || "id"
  setLanguage(currentLang)

  languageToggle.addEventListener("click", (e) => {
    e.preventDefault()
    currentLang = currentLang === "en" ? "id" : "en"
    setLanguage(currentLang)
    localStorage.setItem("language", currentLang)
  })

  function safeSetText(selector, text) {
    const el = document.querySelector(selector)
    if (el) el.textContent = text
  }

  function safeSetHTML(selector, html) {
    const el = document.querySelector(selector)
    if (el) el.innerHTML = html
  }

  function setLanguage(lang) {
    const l = languages[lang]

    // Title
    document.title = l.siteTitle

    // Language toggle label
    languageToggle.innerHTML =
      lang === "en" ? '<i class="fas fa-language"></i> ID' : '<i class="fas fa-language"></i> EN'

    // HTML lang attribute
    document.documentElement.lang = lang

    // CV button
    if (cvDownloadBtn) {
      cvDownloadBtn.setAttribute("href", l.hero.cvPath)
      cvDownloadBtn.setAttribute("download", lang === "en"
        ? "CV Muhamad Dzakwan Ar Efendi - English (Cyber).pdf"
        : "CV Muhamad Dzakwan Ar Efendi - Indonesia (Cyber).pdf"
      )
    }

    // Navigation
    const navLinks = document.querySelectorAll(".nav-menu .nav-link:not(.theme-toggle):not(.language-toggle)")
    navLinks.forEach((link, index) => {
      if (index < l.nav.length) link.textContent = l.nav[index]
    })

    // Hero
    safeSetText(".hero h1", l.hero.name)
    safeSetText(".hero .subtitle", l.hero.subtitle)
    safeSetText(".hero-buttons .btn-primary", l.hero.downloadCV)
    safeSetText(".hero-buttons .btn-outline", l.hero.contactMe)

    // Profile
    safeSetText("#profile .section-header h2", l.profile.title)
    safeSetText(".profile-text h3", l.profile.greeting)
    safeSetText(".profile-text > p", l.profile.description)

    // Profile labels — use data-label selectors (no fragile index-based access)
    const locationLabel = document.querySelector("[data-label='location']")
    const locationValue = document.querySelector("[data-label='location-value']")
    const emailLabel = document.querySelector("[data-label='email']")
    if (locationLabel) locationLabel.textContent = l.profile.location
    if (locationValue) locationValue.textContent = l.profile.locationValue
    if (emailLabel) emailLabel.textContent = l.profile.email

    // Experience
    safeSetText("#experience .section-header h2", l.experience.title)
    safeSetText("#experience .section-description", l.experience.description)

    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate")
      if (l.experience[key]) element.textContent = l.experience[key]
    })

    // Projects section header
    safeSetText("#projects .section-header h2", l.projects.title)
    safeSetText("#projects .section-description", l.projects.description)

    // Project filter buttons — use data-filter as key, not hard-coded index
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      const filter = btn.getAttribute("data-filter")
      const key = `filter${filter.charAt(0).toUpperCase() + filter.slice(1)}`
      if (l.projects[key]) btn.textContent = l.projects[key]
    })

    // Mobile dropdown items
    document.querySelectorAll(".dropdown-item").forEach((item) => {
      const filter = item.getAttribute("data-filter")
      const key = `filter${filter.charAt(0).toUpperCase() + filter.slice(1)}`
      if (l.projects[key]) item.textContent = l.projects[key]
    })

    // Empty state
    safeSetText(".empty-content h3", l.projects.emptyStateTitle)
    safeSetText(".empty-content p", l.projects.emptyStateDescription)

    // Selected filter (mobile) — reset only if not showing a category name
    const selectedFilter = document.getElementById("selectedFilter")
    if (selectedFilter) selectedFilter.textContent = l.projects.selectCategory

    // Category headers
    const categoryMap = [
      { selector: '[data-category="maxindo"] .category-header h3', icon: "fa-building", key: "categoryMaxindo" },
      { selector: '[data-category="idnetworkers"] .category-header h3', icon: "fa-network-wired", key: "categoryIdnetworkers" },
      { selector: '[data-category="wikrama"] .category-header h3', icon: "fa-graduation-cap", key: "categoryWikrama" },
    ]
    categoryMap.forEach(({ selector, icon, key }) => {
      safeSetHTML(selector, `<i class="fas ${icon}"></i> ${l.projects[key]}`)
    })

    // Project cards — refactored to a reusable function
    updateProjectCards("maxindo", l.projects.projectTitles.maxindo, l.projects.maxindoProjects, l.projects.project, lang)
    updateProjectCards("idnetworkers", l.projects.projectTitles.idnetworkers, l.projects.idNetworkersProjects, l.projects.project, lang)
    updateProjectCards("wikrama", l.projects.projectTitles.wikrama, l.projects.wikramaProjects, l.projects.project, lang)

    // Certificates
    safeSetText("#certificates .section-header h2", l.certificates.title)
    safeSetText("#certificates .section-description", l.certificates.description)

    document.querySelectorAll(".certificate-card").forEach((card, index) => {
      if (index < l.certificates.descriptions.length) {
        const desc = card.querySelector(".certificate-description p")
        if (desc) desc.textContent = l.certificates.descriptions[index]
      }
    })

    // Contact
    safeSetText("#contact .section-header h2", l.contact.title)
    safeSetText(".contact-content > p", l.contact.description)
    safeSetText(".contact-content .btn-primary", l.contact.contactMe)

    // Footer
    const footerText = document.querySelector(".footer p")
    if (footerText) {
      footerText.innerHTML = `&copy; <span id="current-year"></span> Dzakwan Efendi. ${l.footer.rights}`
      const yearEl = document.getElementById("current-year")
      if (yearEl) yearEl.textContent = new Date().getFullYear()
    
    if (typeof updateDynamicDurations === "function") {
    updateDynamicDurations()
      }
    }
  }

  // Reusable function to update project cards — eliminates duplicate code
  function updateProjectCards(category, titles, descriptions, projectLabel, lang) {
    const cards = document.querySelectorAll(`[data-category="${category}"] .project-card`)
    cards.forEach((card, index) => {
      const title = card.querySelector(".project-info h3")
      const overlayTitle = card.querySelector(".overlay h3")
      const description = card.querySelector(".project-info > p")
      const projectBtn = card.querySelector(".project-links .btn-sm")

      if (title && titles[index]) title.textContent = titles[index]
      if (overlayTitle && titles[index]) overlayTitle.textContent = titles[index]
      if (description && descriptions[index]) description.textContent = descriptions[index]
      if (projectBtn) projectBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> ${projectLabel}`
    })
  }
})
