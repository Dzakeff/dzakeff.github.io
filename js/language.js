document.addEventListener("DOMContentLoaded", () => {
  // Language data
  const languages = {
    en: {
      siteTitle: "Dzakeff - Portfolio",
      nav: ["Profile", "Experience", "Projects", "Certificates", "Contact"],
      hero: {
        name: "Dzakwan Efendi",
        subtitle: "Cyber Security & IT Enthusiast",
        downloadCV: "My CV",
        contactMe: "Contact Me",
        cvPath: "/Documents/NewNew CV Muhamad Dzakwan Ar Efendi - English (Cyber).pdf",
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
        // Company names
        "company-maxindo": "PT Maxindo Mitra Solusi",
        "company-idnetworkers": "ID-Networkers",
        // Durations
        "idnetworkers-duration": "May 2025 - Aug 2025 · 4 mos",
        "current-position-duration": "May 2025 - Present · 4 mos",
        "intern-position-duration": "Jan 2024 - Jun 2024 · 6 mos",
        "bootcamp-duration": "Jun 2025 - Aug 2025 · 3 mos",
        "bootcamp-ctf-duration": "May 2025 - May 2025 · 1 mos",
        // Locations
        "location-jakarta": "West Jakarta, Indonesia · On-site",
        "location-indonesia": "Indonesia · Remote",
        // Position titles
        "position-tech-support-staff": "Technical Support Staff",
        "position-tech-support-intern": "Technical Support Intern",
        "position-bootcamp-student": "Bootcamp Student Cyber Security",
        "position-bootcamp-ctf": "Bootcamp CTF Player",
        // Achievements
        "maxindo-achievement-1":
          "Conducted site surveys to assess client network requirements and infrastructure conditions.",
        "maxindo-achievement-2":
          "Installed and configured network devices such as routers, switches, and access points.",
        "maxindo-achievement-3":
          "Performed troubleshooting on network issues, ensuring minimal downtime and service disruption.",
        "maxindo-achievement-4":
          "Provided routine maintenance and monitoring of network systems to maintain optimal performance.",
        "idnetworkers-achievement-1":
          "Participated in the IDN Cyber Security bootcamp for 10 weeks with intensive learning (theory & practice) on Linux, pentesting, web & mobile security, SOC labs, and cloud security.",
        "idnetworkers-achievement-2": "Worked on projects and simulated real attacks every week.",
        "idnetworkers-achievement-3":
          "Participated in various CTF (Capture The Flag) competitions to sharpen skills in problem-solving and vulnerability exploitation.",
        // Skills
        "maxindo-skills": "MikroTik, Cisco, Ruijie, EnGenius, GrandStream, UniFi, Huawei",
        "intern-skills": "MikroTik, Cisco, Ruijie, EnGenius, GrandStream, UniFi",
        "idnetworkers-skills":
          "Hardening, Red-Team, Cisco, Kali Linux, Metasploit, Cryptography, Penetration Testing, Security Operation Center",
        "bootcamp-ctf-skills":
          "Cryptography, USB Forensic, Windows Forensic, Browser Forensic, Web Exploit, Web 303, Log Analysis, Forensic",
      },
      projects: {
        title: "My Projects",
        description: "A showcase of my recent work, personal projects, and contributions",
        project: "Project",
        filterAll: "All Projects",
        filterMaxindo: "PT Maxindo Mitra Solusi",
        filterIDNetworkers: "ID-Networkers",
        filterWikrama: "Wikrama Vocational School",
        categoryMaxindo: "Associated with PT Maxindo Mitra Solusi",
        categoryIDNetworkers: "Associated with ID-Networkers",
        categoryWikrama: "Associated with Wikrama Vocational School",
        emptyStateTitle: "Select Category to View Projects",
        emptyStateDescription: "Use the filters above to explore my projects by category",
        selectCategory: "Select Category",

        // Project titles and descriptions
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

        // Maxindo Projects
        maxindoProjects: [
          "Implemented on-site network infrastructure installation at PKU Muhammadiyah Hospital Yogyakarta, including device configuration and the design of network layout and topology to support reliable and efficient hospital connectivity.",
          "Upgraded network infrastructure at Citadines Connect Airport Jakarta Hotel, including device refresh, addition of access points and switches, to enhance coverage, capacity, and overall network performance.",
          "Upgraded network infrastructure at Brits Hotel Puri Indah, including device refresh, addition of access points and switches, to enhance coverage, capacity, and overall network performance.",
        ],
        // ID-Networkers Projects
        idNetworkersProjects: [
          "Participated in a Capture The Flag (CTF) challenge during the Cyber Security IDN bootcamp, focusing on penetration testing, vulnerability exploitation, and system hardening. Worked on various challenges and attack simulations to enhance cybersecurity skills.",
        ],
        // Wikrama Projects
        wikramaProjects: [
          "Designed a network topology from scratch, evaluated existing devices, recommended new equipment, and coordinated directly with the client to ensure the solution met their needs.",
          "Implemented Snort IDS, ARP Poisoning (MITM), DMZ, USB mounting restrictions, password hardening, IPtables configuration, and Nmap scanning for network defense testing.",
          "Configured MikroTik and Cisco devices in PNETLab, including basic MikroTik setup and DMZ implementation to a secondary router.",
          "Configured a MikroTik router to integrate with AWS by assigning static DNS for AWS server IPs, and setting up hotspot, DHCP, and VLAN.",
          "Set up a small office network using two MikroTik routers with static routing, load balancing, OSPF, queue management, firewall, and hotspot.",
          "Implemented PPPoE and hotspot on MikroTik routers, and performed FO cable installation with OLT and ONT configuration.",
          "Built scalable infrastructure using ELB, Auto Scaling, RDS, Zabbix and Nagios for monitoring, and configured VPC and EC2 instances.",
          "Deployed a Linux server with LEMP stack, WordPress, SSH key authentication, mail server with webmail, virtual hosts, VoIP service, and additional services including Apache2, Nginx, HTTPS, Samba, IPtables NAT gateway, FTP, DNS, and DHCP.",
          "Simulated a network in Cisco Packet Tracer with configuration of routing between two routers, VLAN, server DHCP on router, server DNS, and server web.",
        ],
      },
      certificates: {
        title: "Certificates",
        description: "Professional certifications and achievements I've earned throughout my career",
        descriptions: [
          "Certified in basic MikroTik network configuration, including routing, wireless, firewall, and network troubleshooting.",
          "Certified in basic MikroTik network configuration, including static routing, wireless, firewall, VLAN, hotspot and network troubleshooting.",
          "Knowledge of networking fundamentals, how devices communicate, cabling, network addressing and services, troubleshooting and support of endpoints.",
          "Understanding of network monitoring and protection techniques, including the use of firewalls, cloud security, and cryptography, as well as familiarity with handling security alerts and implementing security governance.",
          "Understanding Linux configurations, including use of DNS and DHCP server, MariaDB",
          "Foundational understanding of Networking such as IPV4, TCP/IP, and OSI Model.",
          "Certified in foundational networking concepts, including IP addressing, network protocols, and basic router/switch configuration.",
          "Trained in network simulation using PNETLab, focusing on network design, configuration, and troubleshooting in a virtual environment",
          "Studied ethical hacking, application and network exploitation, IoT security, penetration testing, and vulnerability assessment and scanning.",
          "Learned about the opportunities and challenges of AI, quantum computing, and cryptography.",
          "Gained knowledge of various types of viruses and malicious applications, including their forms and attack methods.",
          "Participated in the MikroTik Network Olympiad, demonstrating skills in network configuration using MikroTik RouterOS.",
          "Completed a basic Cisco course covering networking fundamentals, IP addressing, and introductory routing/switching.",
          "Completed a basic Cisco course covering networking fundamentals, IP addressing, and introductory routing/switching.",
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
        // Company names
        "company-maxindo": "PT Maxindo Mitra Solusi",
        "company-idnetworkers": "ID-Networkers",
        // Durations
        "idnetworkers-duration": "May 2025 - Aug 2025 · 4 bln",
        "current-position-duration": "May 2025 - Sekarang · 4 bln",
        "intern-position-duration": "Jan 2024 - Jun 2024 · 6 bln",
        "bootcamp-duration": "Jun 2025 - Aug 2025 · 3 bln",
        "bootcamp-ctf-duration": "May 2025 - May 2025 · 1 bln",
        // Locations
        "location-jakarta": "Jakarta Barat, Indonesia · On-site",
        "location-indonesia": "Indonesia · Remote",
        // Position titles
        "position-tech-support-staff": "Technical Support Staff",
        "position-tech-support-intern": "Technical Support Intern",
        "position-bootcamp-student": "Bootcamp Student Cyber Security",
        "position-bootcamp-ctf": "Bootcamp CTF Player",
        // Achievements
        "maxindo-achievement-1":
          "Melakukan survei lokasi untuk menilai kebutuhan jaringan klien dan kondisi infrastruktur.",
        "maxindo-achievement-2":
          "Menginstal dan mengkonfigurasi perangkat jaringan seperti router, switch, dan access point.",
        "maxindo-achievement-3":
          "Melakukan troubleshooting pada masalah jaringan, memastikan downtime dan gangguan layanan minimal.",
        "maxindo-achievement-4":
          "Menyediakan pemeliharaan rutin dan pemantauan sistem jaringan untuk menjaga kinerja optimal.",
        "idnetworkers-achievement-1":
          "Mengikuti bootcamp Cyber Security IDN selama 10 minggu dengan pembelajaran intensif (teori & praktik) mengenai Linux, pentesting, keamanan web & mobile, SOC labs, dan cloud security.",
        "idnetworkers-achievement-2": "Mengerjakan proyek dan simulasi serangan nyata setiap minggunya.",
        "idnetworkers-achievement-3":
          "Berpartisipasi dalam berbagai kompetisi CTF (Capture The Flag) untuk mengasah keterampilan dalam pemecahan masalah dan eksploitasi kerentanan.",
        // Skills
        "maxindo-skills": "MikroTik, Cisco, Ruijie, EnGenius, GrandStream, UniFi, Huawei",
        "intern-skills": "MikroTik, Cisco, Ruijie, EnGenius, GrandStream, UniFi",
        "idnetworkers-skills":
          "Hardening, Red-Team, Cisco, Kali Linux, Metasploit, Cryptography, Penetration Testing, Security Operation Center",
        "bootcamp-ctf-skills":
          "Cryptography, USB Forensic, Windows Forensic, Browser Forensic, Web Exploit, Web 303, Log Analysis, Forensic",
      },
      projects: {
        title: "Proyek Saya",
        description: "Tampilan karya terbaru, proyek pribadi, dan kontribusi saya",
        project: "Proyek",
        filterAll: "Semua Proyek",
        filterMaxindo: "PT Maxindo Mitra Solusi",
        filterIDNetworkers: "ID-Networkers",
        filterWikrama: "SMK Wikrama Bogor",
        categoryMaxindo: "Terkait dengan PT Maxindo Mitra Solusi",
        categoryIDNetworkers: "Terkait dengan ID-Networkers",
        categoryWikrama: "Terkait dengan SMK Wikrama Bogor",
        emptyStateTitle: "Pilih Kategori Proyek",
        emptyStateDescription: "Silakan pilih kategori di atas untuk melihat proyek-proyek saya",
        selectCategory: "Pilih Kategori",

        // Project titles and descriptions
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

        // Maxindo Projects
        maxindoProjects: [
          "Melaksanakan instalasi infrastruktur jaringan di Rumah Sakit PKU Muhammadiyah Yogyakarta, termasuk konfigurasi perangkat dan desain tata letak serta topologi jaringan untuk mendukung konektivitas rumah sakit yang handal dan efisien.",
          "Melakukan upgrade infrastruktur jaringan di Citadines Connect Airport Jakarta Hotel, termasuk penyegaran perangkat, penambahan access point dan switch, untuk meningkatkan cakupan, kapasitas, dan kinerja jaringan secara keseluruhan.",
          "Melakukan upgrade infrastruktur jaringan di Brits Hotel Puri Indah, termasuk penyegaran perangkat, penambahan access point dan switch, untuk meningkatkan cakupan, kapasitas, dan kinerja jaringan secara keseluruhan.",
        ],
        // ID-Networkers Projects
        idNetworkersProjects: [
          "Partisipasi dalam tantangan Capture The Flag (CTF) selama bootcamp Cyber Security IDN, berfokus pada pengujian penetrasi, eksploitasi kerentanan, dan penguatan sistem. Mengerjakan berbagai tantangan dan simulasi serangan untuk meningkatkan keterampilan keamanan siber.",
        ],
        // Wikrama Projects
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
          "Tersertifikasi dalam konfigurasi jaringan MikroTik dasar, termasuk static routing, wireless, firewall, VLAN, hotspot dan troubleshooting jaringan.",
          "Pengetahuan tentang dasar-dasar jaringan, bagaimana perangkat berkomunikasi, pengkabelan, pengalamatan jaringan dan layanan, troubleshooting dan dukungan endpoint.",
          "Pemahaman tentang teknik pemantauan dan perlindungan jaringan, termasuk penggunaan firewall, keamanan cloud, dan kriptografi, serta keakraban dengan penanganan peringatan keamanan dan implementasi tata kelola keamanan.",
          "Pemahaman konfigurasi Linux, termasuk penggunaan server DNS dan DHCP, MariaDB",
          "Pemahaman dasar tentang Jaringan seperti IPV4, TCP/IP, dan Model OSI.",
          "Tersertifikasi dalam konsep jaringan dasar, termasuk pengalamatan IP, protokol jaringan, dan konfigurasi router/switch dasar.",
          "Terlatih dalam simulasi jaringan menggunakan PNETLab, berfokus pada desain jaringan, konfigurasi, dan troubleshooting dalam lingkungan virtual",
          "Mempelajari ethical hacking, eksploitasi aplikasi dan jaringan, keamanan IoT, penetration testing, dan penilaian kerentanan dan pemindaian.",
          "Mempelajari peluang dan tantangan AI, komputasi kuantum, dan kriptografi.",
          "Mengenal berbagai jenis virus dan aplikasi berbahaya, termasuk bentuk dan metode serangannya.",
          "Berpartisipasi dalam Olimpiade Jaringan MikroTik, mendemonstrasikan keterampilan dalam konfigurasi jaringan menggunakan MikroTik RouterOS.",
          "Menyelesaikan kursus dasar Cisco, mencakup dasar-dasar jaringan, pengalamatan IP, dan router/switch pengantar.",
          "Menyelesaikan kursus dasar Cisco, mencakup dasar-dasar jaringan, pengalamatan IP, dan router/switch pengantar.",
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

  // Get language toggle button and CV download button
  const languageToggle = document.querySelector(".language-toggle")
  const cvDownloadBtn = document.getElementById("cv-download-btn")

  // Check if there's a saved language preference
  let currentLang = localStorage.getItem("language") || "id" // Default to Indonesian

  // Set initial language
  setLanguage(currentLang)

  // Toggle language when button is clicked
  languageToggle.addEventListener("click", (e) => {
    e.preventDefault()
    currentLang = currentLang === "en" ? "id" : "en"
    setLanguage(currentLang)
    localStorage.setItem("language", currentLang)
  })

  // Function to set language
  function setLanguage(lang) {
    // Update website title
    document.getElementById("website-title").textContent = languages[lang].siteTitle

    // Update language toggle icon/text
    languageToggle.innerHTML =
      lang === "en" ? '<i class="fas fa-language"></i> ID' : '<i class="fas fa-language"></i> EN'

    // Update HTML lang attribute
    document.documentElement.lang = lang

    // Update CV download link with download attribute
    const cvFileName =
      lang === "en"
        ? "CV Muhamad Dzakwan Ar Efendi - English (Cyber).pdf"
        : "CV Muhamad Dzakwan Ar Efendi - Indonesia (Cyber).pdf"

    cvDownloadBtn.setAttribute("href", languages[lang].hero.cvPath)
    cvDownloadBtn.setAttribute("download", cvFileName)

    // Update navigation
    const navLinks = document.querySelectorAll(".nav-menu .nav-link:not(.theme-toggle):not(.language-toggle)")
    navLinks.forEach((link, index) => {
      if (index < languages[lang].nav.length) {
        link.textContent = languages[lang].nav[index]
      }
    })

    // Update hero section
    const heroName = document.querySelector(".hero h1")
    const heroSubtitle = document.querySelector(".hero .subtitle")
    if (heroName) heroName.textContent = languages[lang].hero.name
    if (heroSubtitle) heroSubtitle.textContent = languages[lang].hero.subtitle

    document.querySelector(".hero-buttons .btn-primary").textContent = languages[lang].hero.downloadCV
    document.querySelector(".hero-buttons .btn-outline").textContent = languages[lang].hero.contactMe

    // Update profile section
    document.querySelector("#profile .section-header h2").textContent = languages[lang].profile.title
    document.querySelector(".profile-text h3").textContent = languages[lang].profile.greeting
    document.querySelector(".profile-text > p").textContent = languages[lang].profile.description
    document.querySelectorAll(".info-item h4")[0].textContent = languages[lang].profile.location
    document.querySelectorAll(".info-item h4")[1].textContent = languages[lang].profile.email

    // Update profile location value
    document.querySelectorAll(".info-item p")[0].textContent = languages[lang].profile.locationValue

    // Update experience section
    document.querySelector("#experience .section-header h2").textContent = languages[lang].experience.title
    document.querySelector("#experience .section-description").textContent = languages[lang].experience.description

    // Update experience content with data-translate attributes
    const elementsToTranslate = document.querySelectorAll("[data-translate]")
    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute("data-translate")
      if (languages[lang].experience[key]) {
        element.textContent = languages[lang].experience[key]
      }
    })

    // Update projects section
    document.querySelector("#projects .section-header h2").textContent = languages[lang].projects.title
    document.querySelector("#projects .section-description").textContent = languages[lang].projects.description

    // Update project filter buttons
    const filterBtns = document.querySelectorAll(".filter-btn")
    const dropdownItems = document.querySelectorAll(".dropdown-item")
    const selectedFilter = document.getElementById("selectedFilter")

    // Update desktop buttons
    filterBtns[0].textContent = languages[lang].projects.filterAll
    filterBtns[1].textContent = languages[lang].projects.filterMaxindo
    filterBtns[2].textContent = languages[lang].projects.filterIDNetworkers
    filterBtns[3].textContent = languages[lang].projects.filterWikrama

    // Update mobile dropdown items
    dropdownItems[0].textContent = languages[lang].projects.filterAll
    dropdownItems[1].textContent = languages[lang].projects.filterMaxindo
    dropdownItems[2].textContent = languages[lang].projects.filterIDNetworkers
    dropdownItems[3].textContent = languages[lang].projects.filterWikrama

    // Update empty state
    const emptyStateTitle = document.querySelector(".empty-content h3")
    const emptyStateDesc = document.querySelector(".empty-content p")
    if (emptyStateTitle) {
      emptyStateTitle.textContent = languages[lang].projects.emptyStateTitle
    }
    if (emptyStateDesc) {
      emptyStateDesc.textContent = languages[lang].projects.emptyStateDescription
    }

    // Update selected filter text for mobile
    if (
      selectedFilter &&
      !selectedFilter.textContent.includes("Maxindo") &&
      !selectedFilter.textContent.includes("ID-Networkers") &&
      !selectedFilter.textContent.includes("Wikrama")
    ) {
      selectedFilter.textContent = languages[lang].projects.selectCategory
    }

    // Update category headers
    const categoryHeaders = document.querySelectorAll(".category-header h3")
    if (categoryHeaders[0]) {
      categoryHeaders[0].innerHTML = `<i class="fas fa-building"></i> ${languages[lang].projects.categoryMaxindo}`
    }
    if (categoryHeaders[1]) {
      categoryHeaders[1].innerHTML = `<i class="fas fa-network-wired"></i> ${languages[lang].projects.categoryIDNetworkers}`
    }
    if (categoryHeaders[2]) {
      categoryHeaders[2].innerHTML = `<i class="fas fa-graduation-cap"></i> ${languages[lang].projects.categoryWikrama}`
    }

    // Update project titles and descriptions
    // Update Maxindo projects
    const maxindoCards = document.querySelectorAll('[data-category="maxindo"] .project-card')
    maxindoCards.forEach((card, index) => {
      if (index < languages[lang].projects.maxindoProjects.length) {
        const title = card.querySelector(".project-info h3")
        const overlayTitle = card.querySelector(".overlay h3")
        const description = card.querySelector(".project-info > p")

        if (title && languages[lang].projects.projectTitles.maxindo[index]) {
          title.textContent = languages[lang].projects.projectTitles.maxindo[index]
        }
        if (overlayTitle && languages[lang].projects.projectTitles.maxindo[index]) {
          overlayTitle.textContent = languages[lang].projects.projectTitles.maxindo[index]
        }
        if (description) {
          description.textContent = languages[lang].projects.maxindoProjects[index]
        }

        // Update project button text
        const projectBtn = card.querySelector(".project-links .btn-sm")
        if (projectBtn) {
          projectBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> ${languages[lang].projects.project}`
        }
      }
    })

    // Update ID-Networkers projects
    const idNetworkersCards = document.querySelectorAll('[data-category="idnetworkers"] .project-card')
    idNetworkersCards.forEach((card, index) => {
      if (index < languages[lang].projects.idNetworkersProjects.length) {
        const title = card.querySelector(".project-info h3")
        const overlayTitle = card.querySelector(".overlay h3")
        const description = card.querySelector(".project-info > p")

        if (title && languages[lang].projects.projectTitles.idnetworkers[index]) {
          title.textContent = languages[lang].projects.projectTitles.idnetworkers[index]
        }
        if (overlayTitle && languages[lang].projects.projectTitles.idnetworkers[index]) {
          overlayTitle.textContent = languages[lang].projects.projectTitles.idnetworkers[index]
        }
        if (description) {
          description.textContent = languages[lang].projects.idNetworkersProjects[index]
        }

        // Update project button text
        const projectBtn = card.querySelector(".project-links .btn-sm")
        if (projectBtn) {
          projectBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> ${languages[lang].projects.project}`
        }
      }
    })

    // Update Wikrama projects
    const wikramaCards = document.querySelectorAll('[data-category="wikrama"] .project-card')
    wikramaCards.forEach((card, index) => {
      if (index < languages[lang].projects.wikramaProjects.length) {
        const title = card.querySelector(".project-info h3")
        const overlayTitle = card.querySelector(".overlay h3")
        const description = card.querySelector(".project-info > p")

        if (title && languages[lang].projects.projectTitles.wikrama[index]) {
          title.textContent = languages[lang].projects.projectTitles.wikrama[index]
        }
        if (overlayTitle && languages[lang].projects.projectTitles.wikrama[index]) {
          overlayTitle.textContent = languages[lang].projects.projectTitles.wikrama[index]
        }
        if (description) {
          description.textContent = languages[lang].projects.wikramaProjects[index]
        }

        // Update project button text
        const projectBtn = card.querySelector(".project-links .btn-sm")
        if (projectBtn) {
          projectBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> ${languages[lang].projects.project}`
        }
      }
    })

    // Update certificates section
    document.querySelector("#certificates .section-header h2").textContent = languages[lang].certificates.title
    document.querySelector("#certificates .section-description").textContent = languages[lang].certificates.description

    // Update certificate descriptions
    const certificateCards = document.querySelectorAll(".certificate-card")
    certificateCards.forEach((card, index) => {
      if (index < languages[lang].certificates.descriptions.length) {
        const description = card.querySelector(".certificate-description p")
        if (description) {
          description.textContent = languages[lang].certificates.descriptions[index]
        }
      }
    })

    // Update contact section
    document.querySelector("#contact .section-header h2").textContent = languages[lang].contact.title
    document.querySelector(".contact-content > p").textContent = languages[lang].contact.description
    document.querySelector(".contact-content .btn-primary").textContent = languages[lang].contact.contactMe

    // Update footer
    const footerText = document.querySelector(".footer p")
    footerText.innerHTML = `&copy; <span id="current-year"></span> Dzakwan Efendi. ${languages[lang].footer.rights}`

    // Make sure the current year is still set
    document.getElementById("current-year").textContent = new Date().getFullYear()
  }
})
