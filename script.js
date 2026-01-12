// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Animate toggle button
    if (navLinks.classList.contains("active")) {
      navToggle.textContent = "✕";
    } else {
      navToggle.textContent = "☰";
    }
  });

  // Close mobile menu when clicking on a link
  const navLinkItems = document.querySelectorAll(".nav-links a");
  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navToggle.textContent = "☰";
    });
  });
}

// ===== Newsletter Form Handler =====
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = newsletterForm.querySelector('input[type="email"]').value;

    // Show success message
    alert(`Thank you for subscribing! We'll send travel tips to ${email}`);

    // Reset form
    newsletterForm.reset();
  });
}

// ===== Contact Form Handler =====
/*const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    }; 

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Show success message
    alert(
      `Thank you, ${formData.name}! We've received your message and will get back to you within 24 hours.`
    );

    // Reset form
    contactForm.reset();
  });
}  */

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Don't prevent default for empty anchors or just "#"
    if (href === "#" || href === "") {
      return;
    }

    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== Scroll Animation (Fade In on Scroll) =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll(
  ".destination-card, .feature-card, .testimonial-card, .package-card, .highlight-card"
);

animatedElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// ===== Active Navigation Highlight =====
function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinksArray = document.querySelectorAll(".nav-links a");

  navLinksArray.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");

    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPage === "/" && href === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

// Set active nav on page load
setActiveNav();

// ===== Back to Top Button (Optional Enhancement) =====
function createBackToTop() {
  const backToTop = document.createElement("button");
  backToTop.innerHTML = "↑";
  backToTop.className = "back-to-top";
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #2563eb, #10b981);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `;

  document.body.appendChild(backToTop);

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTop.style.opacity = "1";
      backToTop.style.visibility = "visible";
    } else {
      backToTop.style.opacity = "0";
      backToTop.style.visibility = "hidden";
    }
  });

  // Scroll to top on click
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Hover effect
  backToTop.addEventListener("mouseenter", () => {
    backToTop.style.transform = "translateY(-5px)";
    backToTop.style.boxShadow = "0 6px 20px rgba(37, 99, 235, 0.4)";
  });

  backToTop.addEventListener("mouseleave", () => {
    backToTop.style.transform = "translateY(0)";
    backToTop.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
  });
}

// Initialize back to top button
createBackToTop();

// ===== Loading Animation =====
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.3s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// ===== Form Validation Enhancement =====
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add real-time validation for email fields
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.value && !validateEmail(input.value)) {
      input.style.borderColor = "#ef4444";

      // Show error message
      let errorMsg = input.nextElementSibling;
      if (!errorMsg || !errorMsg.classList.contains("error-message")) {
        errorMsg = document.createElement("span");
        errorMsg.className = "error-message";
        errorMsg.style.color = "#ef4444";
        errorMsg.style.fontSize = "0.875rem";
        errorMsg.style.marginTop = "0.25rem";
        errorMsg.textContent = "Please enter a valid email address";
        input.parentNode.appendChild(errorMsg);
      }
    } else {
      input.style.borderColor = "var(--border)";

      // Remove error message
      const errorMsg = input.nextElementSibling;
      if (errorMsg && errorMsg.classList.contains("error-message")) {
        errorMsg.remove();
      }
    }
  });
});

// ===== Console Welcome Message =====
console.log(
  "%c✈️ Wanderlust Travel",
  "font-size: 24px; font-weight: bold; color: #f59e0b;"
);
console.log(
  "%cWelcome to Wanderlust! Ready for your next adventure?",
  "font-size: 14px; color: #10b981;"
);
console.log("%cWebsite by: Your Name", "font-size: 12px; color: #94a3b8;");

// ===== Performance: Lazy Load Images (if you add real images later) =====
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      }
    });
  });

  const lazyImages = document.querySelectorAll("img[data-src]");
  lazyImages.forEach((img) => imageObserver.observe(img));
}

// ===== BOOKING PAGE FUNCTIONALITY =====

// Booking Form Handler
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  // Real-time summary updates
  const destination = document.getElementById("destination");
  const packageType = document.getElementById("packageType");
  const travelers = document.getElementById("travelers");
  const departureDate = document.getElementById("departureDate");

  const summaryDestination = document.getElementById("summaryDestination");
  const summaryPackage = document.getElementById("summaryPackage");
  const summaryTravelers = document.getElementById("summaryTravelers");
  const summaryDate = document.getElementById("summaryDate");
  const totalPrice = document.getElementById("totalPrice");

  // Package prices
  const packagePrices = {
    basic: 499,
    premium: 999,
    luxury: 1999,
  };

  // Update summary function
  function updateSummary() {
    // Update destination
    if (destination && destination.value) {
      const destText = destination.options[destination.selectedIndex].text;
      summaryDestination.textContent = destText;
    } else {
      summaryDestination.textContent = "Not selected";
    }

    // Update package
    if (packageType && packageType.value) {
      const pkgText = packageType.options[packageType.selectedIndex].text;
      summaryPackage.textContent = pkgText;
    } else {
      summaryPackage.textContent = "Not selected";
    }

    // Update travelers
    if (travelers && travelers.value) {
      summaryTravelers.textContent = travelers.value + " Traveler(s)";
    }

    // Update date
    if (departureDate && departureDate.value) {
      const date = new Date(departureDate.value);
      const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      summaryDate.textContent = formattedDate;
    } else {
      summaryDate.textContent = "Not selected";
    }

    // Calculate total
    if (packageType && packageType.value && travelers && travelers.value) {
      const basePrice = packagePrices[packageType.value] || 0;
      const numTravelers = parseInt(travelers.value) || 1;
      const total = basePrice * numTravelers;
      totalPrice.textContent = "$" + total.toLocaleString();
    } else {
      totalPrice.textContent = "$0";
    }
  }

  // Add event listeners
  if (destination) destination.addEventListener("change", updateSummary);
  if (packageType) packageType.addEventListener("change", updateSummary);
  if (travelers) travelers.addEventListener("input", updateSummary);
  if (departureDate) departureDate.addEventListener("change", updateSummary);

  // Initial update
  updateSummary();

  // Form submission
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      travelers: document.getElementById("travelers").value,
      destination: document.getElementById("destination").value,
      departureDate: document.getElementById("departureDate").value,
      packageType: document.getElementById("packageType").value,
      roomType: document.getElementById("roomType").value,
      dietary: document.getElementById("dietary").value,
      specialRequests: document.getElementById("specialRequests").value,
    };

    // Validate required fields
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.destination ||
      !formData.departureDate ||
      !formData.packageType
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Success message
    alert(
      `Thank you, ${formData.fullName}! Your booking request has been received.\n\nDestination: ${formData.destination}\nPackage: ${formData.packageType}\nDeparture: ${formData.departureDate}\n\nOur team will contact you within 24 hours to confirm your booking.`
    );

    // Reset form
    bookingForm.reset();
    updateSummary();
  });
}

// ===== REVIEWS PAGE FUNCTIONALITY =====

// Review Filters
const filterDestination = document.getElementById("filterDestination");
const filterRating = document.getElementById("filterRating");
const filterPackage = document.getElementById("filterPackage");
const reviewCards = document.querySelectorAll(".review-card");

function filterReviews() {
  const destValue = filterDestination
    ? filterDestination.value.toLowerCase()
    : "";
  const ratingValue = filterRating ? filterRating.value : "";
  const packageValue = filterPackage ? filterPackage.value.toLowerCase() : "";

  reviewCards.forEach((card) => {
    const cardDest = card.dataset.destination || "";
    const cardRating = card.dataset.rating || "";
    const cardPackage = card.dataset.package || "";

    let showCard = true;

    // Filter by destination
    if (destValue && !cardDest.includes(destValue)) {
      showCard = false;
    }

    // Filter by rating
    if (ratingValue) {
      const minRating = parseInt(ratingValue);
      const cardRatingNum = parseInt(cardRating);
      if (cardRatingNum < minRating) {
        showCard = false;
      }
    }

    // Filter by package
    if (packageValue && !cardPackage.includes(packageValue)) {
      showCard = false;
    }

    // Show/hide card
    if (showCard) {
      card.style.display = "block";
      // Add fade-in animation
      card.style.opacity = "0";
      setTimeout(() => {
        card.style.opacity = "1";
      }, 50);
    } else {
      card.style.display = "none";
    }
  });

  // Check if no reviews match
  const visibleCards = Array.from(reviewCards).filter(
    (card) => card.style.display !== "none"
  );
  const reviewsGrid = document.getElementById("reviewsGrid");

  if (reviewsGrid) {
    // Remove existing "no results" message
    const existingMsg = reviewsGrid.querySelector(".no-results-message");
    if (existingMsg) {
      existingMsg.remove();
    }

    // Add "no results" message if needed
    if (visibleCards.length === 0) {
      const noResultsMsg = document.createElement("div");
      noResultsMsg.className = "no-results-message";
      noResultsMsg.style.cssText = `
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        color: var(--text-muted);
      `;
      noResultsMsg.innerHTML =
        "<h3>No reviews found</h3><p>Try adjusting your filters</p>";
      reviewsGrid.appendChild(noResultsMsg);
    }
  }
}

// Add event listeners for filters
if (filterDestination) {
  filterDestination.addEventListener("change", filterReviews);
}
if (filterRating) {
  filterRating.addEventListener("change", filterReviews);
}
if (filterPackage) {
  filterPackage.addEventListener("change", filterReviews);
}

// ===== ANIMATED RATING BARS =====
const ratingBars = document.querySelectorAll(".rating-bar-fill");

if (ratingBars.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.style.width;
          bar.style.width = "0%";
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 }
  );

  ratingBars.forEach((bar) => observer.observe(bar));
}

// ===== DATE INPUT MINIMUM DATE =====
// Set minimum date to today for departure date
const departureDateInput = document.getElementById("departureDate");
if (departureDateInput) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const minDate = tomorrow.toISOString().split("T")[0];
  departureDateInput.setAttribute("min", minDate);
}

// ===== FORM FIELD VALIDATION IMPROVEMENTS =====
const phoneInput = document.getElementById("phone");
if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    // Remove non-numeric characters except + and spaces
    let value = e.target.value.replace(/[^\d\s+()-]/g, "");
    e.target.value = value;
  });
}

const travelersInput = document.getElementById("travelers");
if (travelersInput) {
  travelersInput.addEventListener("input", (e) => {
    // Ensure minimum 1 traveler
    if (parseInt(e.target.value) < 1) {
      e.target.value = 1;
    }
    // Maximum 20 travelers
    if (parseInt(e.target.value) > 20) {
      e.target.value = 20;
    }
  });
}

// ===== SMOOTH SCROLL TO BOOKING SECTION =====
const bookNowButtons = document.querySelectorAll('a[href="book.html"]');
bookNowButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // If already on booking page, scroll to form
    if (window.location.pathname.includes("book.html")) {
      e.preventDefault();
      const bookingSection = document.querySelector(".booking-form-section");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// ===== LOADING STATE FOR FORMS =====
function addLoadingState(button, form) {
  const originalText = button.textContent;
  button.textContent = "Processing...";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2000);
}

// Apply to booking form if exists
if (bookingForm) {
  const submitButton = bookingForm.querySelector('button[type="submit"]');
  if (submitButton) {
    bookingForm.addEventListener("submit", () => {
      addLoadingState(submitButton, bookingForm);
    });
  }
}

console.log(
  "%c✨ Booking & Reviews functionality loaded!",
  "color: #10b981; font-weight: bold;"
);

// ===== CATEGORY TABS FUNCTIONALITY =====
const categoryTabs = document.querySelectorAll(".category-tab");
const categoryPanels = document.querySelectorAll(".category-panel");

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;

    // Remove active class from all tabs
    categoryTabs.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked tab
    tab.classList.add("active");

    // Hide all panels
    categoryPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    // Show selected panel
    const activePanel = document.querySelector(
      `.category-panel[data-panel="${category}"]`
    );
    if (activePanel) {
      activePanel.classList.add("active");
    }
  });
});

// ===== ANIMATED COUNTER FOR STATS =====
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    // Format number with commas for large numbers
    if (target >= 1000) {
      element.textContent = Math.floor(current).toLocaleString();
    } else {
      // For decimal numbers like 4.8
      element.textContent = current.toFixed(1);
    }
  }, 16);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".stat-number");

        statNumbers.forEach((stat) => {
          const target = parseFloat(stat.dataset.target);
          animateCounter(stat, target);
        });

        // Unobserve after animation
        statsObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

// Observe stats section
const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ===== BLOG CARD HOVER EFFECT =====
const blogCards = document.querySelectorAll(".blog-card");

blogCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// ===== PROCESS STEPS STAGGER ANIMATION =====
const processSteps = document.querySelectorAll(".process-step");

const stepsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 150); // Stagger delay

        stepsObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

processSteps.forEach((step) => {
  step.style.opacity = "0";
  step.style.transform = "translateY(30px)";
  step.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  stepsObserver.observe(step);
});

// ===== CATEGORY CARDS HOVER TILT EFFECT =====
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  });

  card.style.transition = "transform 0.3s ease";
});

// ===== BLOG LINK SMOOTH TRANSITION =====
const blogLinks = document.querySelectorAll(".blog-link");

blogLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Add click animation
    link.style.transform = "translateX(10px)";
    setTimeout(() => {
      link.style.transform = "translateX(0)";
    }, 200);

    // You can add actual navigation here if needed
    console.log("Blog link clicked:", link.textContent);
  });
});

// ===== LAZY LOAD CATEGORY PANELS =====
// Preload images when hovering over tabs
categoryTabs.forEach((tab) => {
  tab.addEventListener("mouseenter", () => {
    const category = tab.dataset.category;
    const panel = document.querySelector(
      `.category-panel[data-panel="${category}"]`
    );

    if (panel) {
      const images = panel.querySelectorAll(".category-card-image");
      images.forEach((img) => {
        // Trigger any lazy loading if needed
        img.style.opacity = "1";
      });
    }
  });
});

// ===== SCROLL PROGRESS INDICATOR =====
function updateScrollProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

  // You can use this to show a progress bar if needed
  // For now, we'll just log it
  if (scrollPercent > 50 && !sessionStorage.getItem("halfwayScrolled")) {
    sessionStorage.setItem("halfwayScrolled", "true");
    console.log("User scrolled halfway through the page!");
  }
}

window.addEventListener("scroll", updateScrollProgress);

// ===== CATEGORY PANEL ANIMATION ON SWITCH =====
const originalPanelSwitch = () => {
  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Add fade effect to cards
      const activePanel = document.querySelector(".category-panel.active");
      if (activePanel) {
        const cards = activePanel.querySelectorAll(".category-card");
        cards.forEach((card, index) => {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";

          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 100);
        });
      }
    });
  });
};

originalPanelSwitch();

console.log(
  "%c🎉 Additional home page features loaded!",
  "color: #10b981; font-weight: bold; font-size: 14px;"
);

console.log(
  "%c❓ FAQ functionality loaded!",
  "color: #f59e0b; font-weight: bold;"
);

// ===== FAQ ACCORDION FUNCTIONALITY =====
// Remove the first FAQ section (around line 87-101) and keep only this one:

const faqItemsAll = document.querySelectorAll(".faq-item");

faqItemsAll.forEach((item) => {
  const question = item.querySelector(".faq-question");

  if (question) {
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other FAQs
      faqItemsAll.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current FAQ
      if (isActive) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  }
});

// Optional: Close FAQ when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".faq-item")) {
    faqItemsAll.forEach((item) => {
      item.classList.remove("active");
    });
  }
});

console.log(
  "%c❓ FAQ functionality loaded!",
  "color: #f59e0b; font-weight: bold;"
);
