# Farmer Support Platform - Project Summary

## Overview
A comprehensive farmer support and collaboration website with multi-language support, authentication, and smart resource exchange features.

## Tech Stack
- **React** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Context API** for state management
- **Sonner** for toast notifications

## Key Features

### 1. Multi-Language Support (Malayalam, Hindi, English)
- Persistent language selection across all pages
- Comprehensive translation system
- Accessible language selector on every page

### 2. Authentication System
- Phone number + OTP verification
- Custom OTP input component
- Protected and public routes
- Session persistence via Context API

### 3. Pages

#### Homepage (`/`)
- 3/8th left sidebar with Login/Register buttons
- 5/8th right section displaying platform features
- Background image with agricultural theme
- Responsive design

#### Login Page (`/login`)
- Phone number input with OTP verification
- Simple and farmer-friendly interface
- Mock authentication for demo

#### Register Page (`/register`)
- Comprehensive registration form:
  - Name, Email (optional), Phone with OTP
  - Address, Farmer Type selection
  - Products they have to give
  - Products they need from others
- Multi-step verification flow

#### Dashboard (`/dashboard`)
- Personalized welcome message
- Quick stats (Products to give, needed, connections)
- Feature cards for quick access
- Undo/Redo buttons with keyboard shortcuts

#### Schemes Page (`/schemes`)
- Government schemes listing
- Detailed information: amount, deadline, eligibility
- Apply buttons for each scheme

#### Profile Page (`/profile`)
- View and edit user profile
- Update farmer details
- Manage products to give/need

#### Cooperative Network Page (`/cooperative-network`)
- Smart route planner
- Filter farmers by product
- Shows distance, quantity, price
- Highlights matches with user's needs
- Contact farmer functionality

### 4. Undo/Redo Functionality
- Global keyboard shortcuts (Ctrl+Z, Ctrl+Shift+Z)
- Visual feedback with toast notifications
- Extensible for form changes and profile edits

## Project Structure
```
/src/app/
├── App.tsx                 # Main app with routing
├── routes.tsx             # Route configuration
├── components/
│   ├── LanguageSelector.tsx
│   └── OTPInput.tsx
├── context/
│   ├── LanguageContext.tsx
│   ├── AuthContext.tsx
│   └── UndoRedoContext.tsx
├── pages/
│   ├── Homepage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── Dashboard.tsx
│   ├── SchemesPage.tsx
│   ├── ProfilePage.tsx
│   └── CooperativeNetworkPage.tsx
├── hooks/
│   └── useKeyboardShortcuts.ts
└── utils/
    └── translations.ts
```

## Design Principles
- Farmer-friendly UI with simple language
- Large buttons and clear actions
- Minimal complexity for low digital literacy users
- Clean and organized layout
- Responsive across devices

## Future Enhancements
- Real OTP service integration
- Backend API for farmer data
- Real-time location services
- Weather and soil API integration
- Market price data feeds
- Actual undo/redo for form state
- Chat/messaging between farmers
- Image uploads for products
- Rating and review system
