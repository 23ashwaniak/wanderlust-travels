# Wanderlust Travel Website 🌍✈️

A modern, responsive travel booking website with Firebase integration for managing contact forms and bookings.

## 🎨 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Clean design with smooth animations and transitions
- **Firebase Integration** - Real-time database for form submissions
- **Interactive Components** - FAQ accordions, category tabs, animated counters
- **Multiple Pages** - Home, Destinations, Packages, Booking, Reviews, Contact

## 🚀 Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla JS)
- Firebase Realtime Database
- Firebase Authentication (ready to use)

## 📁 Project Structure

```
wanderlust-project/
├── index.html              # Home page
├── destinations.html       # Destinations showcase
├── packages.html          # Travel packages
├── book.html              # Booking form
├── reviews.html           # Customer reviews
├── contact.html           # Contact form (Firebase integrated)
├── styles.css             # All styling
├── script.js              # Main JavaScript
├── firebase-config.js     # Firebase configuration (NOT in repo)
└── contact-form-handler.js # Firebase form handler
```

## 🎯 Features Overview

### Home Page

- Hero section with call-to-action
- Featured destinations grid
- How it works section
- Travel by category (tabs)
- Blog preview
- Stats counter animation
- FAQ section
- Newsletter signup

### Destinations Page

- Featured destination showcase
- Destination highlights
- Photo gallery
- Package options
- Traveler testimonials
- Local tips & insights

### Packages Page

- Three-tier pricing (Basic, Premium, Luxury)
- Package comparison table
- Add-ons and upgrades
- Seasonal deals
- Price calculator

### Contact Page

- Contact form (Firebase integrated)
- Office information
- FAQ section
- Map placeholder

### Reviews Page

- Rating overview with animated bars
- Filter by destination/rating/package
- Customer testimonials
- Trust badges

### Booking Page

- Multi-step booking process
- Real-time price calculator
- Trip summary
- Traveler preferences
- Payment information

### Contacts

```json
{
  "contacts": {
    "unique-id": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "subject": "Booking Inquiry",
      "message": "I want to book...",
      "timestamp": "2025-01-13T10:30:00.000Z",
      "status": "unread"
    }
  }
}
```

### Bookings

```json
{
  "bookings": {
    "unique-id": {
      "fullName": "Jane Smith",
      "email": "jane@example.com",
      "destination": "Maldives",
      "packageType": "premium",
      "travelers": 2,
      "departureDate": "2025-03-15",
      "timestamp": "2025-01-13T10:30:00.000Z",
      "status": "pending"
    }
  }
}
```

## 🎨 Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --primary: #2563eb;
  --secondary: #10b981;
  --accent: #f59e0b;
  --bg-dark: #0f172a;
  --bg-card: #1e293b;
  --text-light: #f1f5f9;
  --text-muted: #94a3b8;
}
```

### Content

- Update destination information in HTML files
- Modify pricing in `packages.html`
- Change contact details in `contact.html`
- Add your own images in the `assets/` folder

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 👤 Author

**Your Name**

- GitHub: [Ashwani Umesh](https://github.com/23ashwaniak)
- LinkedIn: [Ashwani Umesh](https://www.linkedin.com/in/23ashwanisingh/)

## 🙏 Acknowledgments

- Firebase for real-time database
- Google Fonts for typography
- Inspiration from modern travel websites

## 📧 Contact

For questions or support, please contact: your.email@example.com

---

**⭐ If you found this project helpful, please give it a star on GitHub!**
