# 🥛 Milk Shop - Interactive Product Cards

<img width="1920" height="1080" alt="Screenshot (694)" src="https://github.com/user-attachments/assets/f2360a76-0d3a-4a2a-ba11-195925dcbd15" />


A visually appealing front-end interface for a milk products shop featuring interactive product cards with hover effects and dynamic color theming.

## ✨ Live Demo
👉 [View Live Project](https://vimeo.com/1162395359?fl=ip&fe=ec)

## 🎯 Features
- 🎨 **6 Interactive Product Cards** with unique color schemes
- 🖱️ **Hover Effects**: Image reveal and card scaling animations
- 🎯 **Dynamic Theming**: JavaScript-driven color customization
- ⚡ **Smooth Animations**: Cubic-bezier transitions for fluid motion
- 🏗️ **Modern Layout**: CSS Flexbox for responsive card arrangement
- 🎨 **Custom Styling**: Google Fonts & Phosphor Icons integration

## 📦 Products Showcase
1. **Blueberry Burst** - Berry delight
2. **Strawberry Bliss** - Sweet strawberry
3. **Banana Cream** - Creamy banana
4. **Chocolate Dream** - Rich chocolate
5. **Mint Fresh** - Refreshing mint
6. **Passion Fruit** - Tropical passion

## 🛠️ Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Flexbox, animations, transitions
- **JavaScript (ES6)** - Dynamic interactivity
- **Google Fonts** - Nunito typography
- **Phosphor Icons** - Modern icon set

## 🚀 Project Structure
milk-shop/
├── index.html # Main HTML file
├── stylesheet.css # All styling
├── script.js # Interactive functionality
├── README.md # This documentation
├── images/ # All project images
│ ├── milk.svg # Logo
│ ├── bg1-6.png # Background hover images
│ └── img1-6.png # Product images
└── preview.png # Project screenshot

## 🎨 Design Highlights
- **Color Psychology**: Carefully selected color palette for each product
- **Visual Hierarchy**: Clear typography and spacing
- **Interactive Feedback**: Hover states for better UX
- **Clean Aesthetics**: Minimalist design with focused attention on products

## 💡 JavaScript Implementation
The project uses a modular JavaScript approach:
```javascript
// Dynamic color theming for each card
const cards = [
    { id: 'card1', color: '#c27391', name: 'Blueberry Burst', ... },
    // ... 5 more products
];

// Event listeners for hover effects
cards.forEach(card => {
    element.addEventListener('mouseenter', () => {
        // Background image reveal
    });
});
