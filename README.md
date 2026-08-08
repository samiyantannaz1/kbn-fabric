# K.B.N Fabric 🧵

A modern, responsive, and bilingual website for **K.B.N**, a fabric and upholstery brand.

The website provides a clean and elegant experience for exploring fabric collections, viewing fabric details with an interactive zoom viewer, and requesting the fabric catalog directly through WhatsApp.

---

## ✨ Features

* 🌐 Bilingual support — Persian & English
* 📱 Fully responsive design
* 🧵 Interactive fabric collections
* 🔍 Fabric image zoom viewer
* 🖼️ Fabric image modal
* ⌨️ Keyboard navigation
* 💬 WhatsApp catalog request
* 🎨 Modern and elegant UI
* ⚡ Fast frontend experience
* 🧩 Reusable React components
* 📁 Organized project structure

---

## 🛠️ Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Framer Motion**
* **Git & GitHub**

---

## 🌐 Bilingual Interface

K.B.N supports both **Persian** and **English**.

The website uses a localization system to manage language-dependent content, allowing users to switch languages from the navigation bar.

```text
locales/
├── en
└── fa
```

---

## 🧵 Fabric Collections

The Collections section allows users to explore K.B.N fabric samples through an interactive gallery.

Each fabric can be opened in a modal where users can:

* View the fabric image
* Zoom into fabric details
* Navigate between fabric samples
* Close the viewer with the Escape key

---

## 💬 WhatsApp Catalog Request

Visitors can request the K.B.N fabric catalog directly through WhatsApp.

The request message automatically changes based on the selected language.

**Persian:**

> سلام، درخواست دریافت کاتالوگ پارچه‌های K.B.N را دارم.

**English:**

> Hello, I would like to request the K.B.N fabric catalog.

---

## 📂 Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── OffcanvasMenu/
│   ├── Hero/
│   ├── FeaturedCollections/
│   ├── WhyChooseUs/
│   ├── AboutPreview/
│   ├── ContactBanner/
│   ├── CollectionsHero/
│   ├── CollectionsFilter/
│   ├── FabricGallery/
│   ├── FabricGalleryItem/
│   ├── FabricModal/
│   └── FabricZoomViewer/
│
├── hooks/
│
├── locales/
│   ├── en/
│   └── fa/
│
├── types/
│
├── data/
│
└── App.tsx
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/samiyantannaz1/kbn-fabric.git
```

### 2. Navigate to the project

```bash
cd kbn-fabric
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL provided by Vite.

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📸 Screenshots

Screenshots of the website will be added here after the final UI and responsive design are completed.

---

## 🎯 Project Goals

The main goals of this project are:

* Create a professional digital presence for K.B.N
* Present fabric collections in an elegant way
* Provide an intuitive browsing experience
* Support both Persian and English users
* Make catalog requests simple through WhatsApp
* Build a clean and maintainable React architecture
* Create a responsive experience across different screen sizes

---

## 📌 Project Status

🚧 **In Development**

The project is currently being developed and improved with additional animations, responsive refinements, UI improvements, and new features.

---

## 👩‍💻 Developer

**Tannaz Samiyan**

Frontend Developer

### Skills

* React.js
* TypeScript
* JavaScript
* Next.js
* Tailwind CSS
* HTML & CSS
* Responsive Web Design
* Git & GitHub

---

## 📄 License

This project was created for **K.B.N Fabric** and is presented as part of a frontend development portfolio.
