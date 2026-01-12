# Wanderlust Travel Website 🌍✈️

Wanderlust is a modern, responsive **multi-page travel booking website** built using HTML, CSS, and JavaScript, with Firebase integration for handling contact and booking data.

This project focuses on real-world website structure, user experience, and clean UI design.

---

## ✨ Key Highlights

- Fully responsive (desktop, tablet, mobile)
- Clean and modern UI with consistent design system
- Multi-page website architecture
- Firebase Realtime Database integration
- Booking-style user flow
- Interactive components (filters, calculators, FAQs)

---

## 🧩 Pages Included

- **Home** – Hero, featured destinations, FAQs, newsletter
- **Destinations** – Highlights, galleries, packages, tips
- **Packages** – Comparison table, pricing tiers, add-ons
- **Booking** – Step-based booking flow with summary & calculator
- **Reviews** – Ratings, filters, testimonials, trust badges
- **Contact** – Firebase-powered contact form & FAQs

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (CSS Variables, responsive layouts)
- JavaScript (Vanilla JS)
- Firebase Realtime Database
- Firebase Authentication (configured, optional)

---

## 📁 Project Structure

wanderlust-project/
├── index.html
├── destinations.html
├── packages.html
├── book.html
├── reviews.html
├── contact.html
├── styles.css
├── script.js
├── firebase-config.js (not committed)
└── contact-form-handler.js

## 🎯 Features Overview

## 🔥 Features Breakdown

### Booking Flow

- Step indicator
- Trip summary
- Traveler preferences
- Price calculator

### Packages

- Basic / Premium / Luxury tiers
- Comparison table
- Add-ons & upgrades
- Seasonal offers

### Reviews

- Filter by destination, rating & package
- Rating statistics
- Trust badges

### Firebase Data Structure

**Contacts**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Booking inquiry",
  "timestamp": "ISO Date",
  "status": "unread"
}
Bookings

json
Copy code
{
  "fullName": "Jane Smith",
  "destination": "Maldives",
  "packageType": "Premium",
  "travelers": 2,
  "departureDate": "2025-03-15",
  "status": "pending"
}
🎨 Customization
Colors via CSS variables in styles.css

Content editable directly in HTML

Images replaceable in /assets

👤 Author
Ashwani Umesh

- GitHub: [Ashwani Umesh](https://github.com/23ashwaniak)
- LinkedIn: [Ashwani Umesh](https://www.linkedin.com/in/23ashwanisingh/)

## Acknowledgments

- Firebase for real-time database
- Google Fonts for typography
- Inspiration from modern travel websites
```
