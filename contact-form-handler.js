// ===== CONTACT FORM WITH FIREBASE =====
// This file ONLY handles the contact form with Firebase
// Booking form is handled separately in script.js

// Wait for Firebase to be ready
window.addEventListener("load", function () {
  // Check if Firebase is loaded
  if (typeof firebase === "undefined") {
    console.error("❌ Firebase SDK not loaded!");
    return;
  }

  // Check if Firebase is initialized
  if (!firebase.apps.length) {
    console.error("❌ Firebase not initialized! Check firebase-config.js");
    return;
  }

  console.log("%c✅ Firebase is ready!", "color: #10b981; font-weight: bold;");

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    console.log(
      "%c✅ Contact form found!",
      "color: #10b981; font-weight: bold;"
    );

    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      console.log("📧 Contact form submitted...");

      // Get form values
      const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value.trim(),
        timestamp: new Date().toISOString(),
        status: "unread",
      };

      console.log("📋 Contact form data:", formData);

      // Validate form
      if (
        !formData.name ||
        !formData.email ||
        !formData.subject ||
        !formData.message
      ) {
        showNotification("Please fill in all required fields", "error");
        return;
      }

      // Validate email format
      if (!validateEmail(formData.email)) {
        showNotification("Please enter a valid email address", "error");
        return;
      }

      // Show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      try {
        console.log("🔥 Attempting to save to Firebase...");

        // Save to Firebase Realtime Database
        const contactsRef = firebase.database().ref("contacts");
        const newContactRef = contactsRef.push();

        await newContactRef.set(formData);

        console.log(
          "%c✅ Saved to Firebase successfully!",
          "color: #10b981; font-weight: bold;"
        );

        // Success
        showNotification(
          "Message sent successfully! We will get back to you within 24 hours.",
          "success"
        );
        contactForm.reset();
      } catch (error) {
        console.error(
          "%c❌ Firebase Error:",
          "color: #ef4444; font-weight: bold;",
          error
        );
        showNotification("Failed to send message: " + error.message, "error");
      } finally {
        // Reset button
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }
    });
  } else {
    console.log(
      "%cℹ️ No contact form on this page (this is normal for non-contact pages)",
      "color: #94a3b8;"
    );
  }
});

// ===== HELPER FUNCTIONS =====

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Style notification
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    z-index: 10000;
    max-width: 400px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.3s ease;
  `;

  // Set background color based on type
  if (type === "success") {
    notification.style.background = "linear-gradient(135deg, #10b981, #059669)";
  } else if (type === "error") {
    notification.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
  } else {
    notification.style.background = "linear-gradient(135deg, #3b82f6, #2563eb)";
  }

  // Add animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Append to body
  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 5000);

  // Click to dismiss
  notification.addEventListener("click", () => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  });
}

console.log(
  "%c📧 Contact form Firebase handler loaded!",
  "color: #10b981; font-weight: bold;"
);
