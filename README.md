# 🍔 hamburger-restaurant-website

## 🌐 Overview  
A modern, fully responsive **Burger Website** built with **Pug**, **SCSS**, and **Bootstrap 5**.  
It offers a clean, warm-toned design with smooth interactions and mobile-friendly layouts for a delightful food ordering experience.

---

## 🍔 Main Features

- **Responsive Design:** Seamlessly adapts to all screen sizes with smooth transitions and layouts for desktop and mobile.  
- **Modern Navigation Bar:** Dynamic navbar that automatically adjusts its content (icons, login/signup buttons) based on the current page.  
- **Interactive Featured Section:** Eye-catching hover animations and smooth transitions to highlight popular dishes.  
- **Category Browsing:** Organized burger categories (Beef, Chicken, Veggie) with visually appealing layouts.  
- **Product Pages:** Each category links to detailed product sections with price and “Order Now” options.  
- **User Authentication:** Includes fully designed **Login** and **Signup** pages for user access management.  
- **Profile Page:** Displays user information with a clean, modern interface.  
- **Search Functionality:** Centralized search bar to find meals or sandwiches instantly.  
- **Clean UI/UX:** Built using **Pug** for clean templating and **SCSS** for structured styling.  
- **Performance Optimized:** Lightweight front-end design for fast load times and smooth interactions.

---

## 📂 Project Structure

```
humburger-restaurant-website/
│
├── dist/
│   ├── assets/
│   │   │── icons/
│   │   │     ├── buttons/
│   │   │     ├── footer/
│   │   │     ├── forms/
│   │   │     ├── header/
│   │   │     ├── home/
│   │   │     ├── login/
│   │   │     └── signup/
│   │   └── images/
│   │         ├── form/
│   │         ├── home/
│   │         ├── login/
│   │         ├── nav/
│   │         └── signup/
│   ├── css/
│   │   ├── style.css
│   │   └── style.css.map
│   ├── js/
│   │   └── nav.js
│   ├── layout/
│   │   ├── footer.html
│   │   └── nav.html
│   ├── home.html
│   ├── login.html
│   └── signup.html
│
├── src/
│   ├── pug/
│   │   │── layout/
│   │   │     ├── footer.pug
│   │   │     └── nav.pug
│   │   ├── home.pug
│   │   ├── login.pug
│   │   └── signup.pug
│   └── scss/
│       │── global/
│       │     └── _global.scss
│       │── helpers/
│       │     └── _images_sizes.scss
│       │── layout/
│       │     ├── _footer.scss
│       │     └── _nav.scss
│       ├── _home.scss
│       ├── _login.scss
│       └── _signup.scss
│
│── .gitignore
│
└── README.md
```

---

## 🧱 Tech Stack
| Technology | Purpose |
|-------------|----------|
| **Pug** | Template engine for HTML structure |
| **SCSS / CSS3** | Styling with variables and modular design |
| **Bootstrap 5** | Layout and UI components |
| **JavaScript** | Dynamic UI functionality |
| **Bootstrap Icons** | Clean vector icons |

---

## 🖼️ Pages
- `home.pug` → Home  
- `categories.pug` → Categories List 
- `category-products.pug` → Products under each category  
- `profile.pug` → User Profile  
- `login.pug` → Login  
- `signup.pug` → Signup  

---

## ⚙️ Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/burger-website.git
cd hamburger-restaurant-website
```

### 2️⃣ Install dependencies
Install tools for compiling **SCSS** and **Pug**:
```bash
npm install
```

### 3️⃣ Compile SCSS to CSS
```bash
sass src/scss/style.scss dist/css/style.css --watch
```

### 4️⃣ Compile Pug to HTML
```bash
pug --watch ./ --out ./dist
```

### 5️⃣ Run the project  
Open `dist/home.html` in your browser to preview the website.


