# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). The site features semantic HTML5 markup, use of both CSS Grid and Flexbox, CSS custom properties, and a scaleable image slider implemented with Splide.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![Desktop](./assets/project-ss-01.webp)

### Links

- Solution URL: [Frontend Mentor solution page](https://www.frontendmentor.io/solutions/responsive-portfolio-page-using-css-grid-and-flexbox-FhcNieN2rq)
- Live Site URL: [Live site on netlify.com](https://joyful-beijinho-fcd337.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Splide slider library

### What I learned

I haven't used figure and figcaption elements much outside of tutorials, but the skills grid elements of this site seemed like a good use case semantically as well as a structure that made sense to style properly.

Additionally, I used the [Splide slider library](https://splidejs.com/) for the first time to achieve the carousel/image slider under the 'My Work' section. Splide was very simple to implement and was pretty intuitive customizing the minimal code to match my design comp. 


```html
<figure class="service-block blue-bg graphic-design">
  <img src="./assets/pattern-graphic-design.svg" alt="abstract graphic" class="service-graphic">
  <figcaption class="service">Graphic Design</figcaption>
</figure>
```
```css
.service-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
}
```


## Author

- Website - [MattPahuta.com](https://www.mattpahuta.com)
- Frontend Mentor - [@yMattPahuta](https://www.frontendmentor.io/profile/MattPahuta)
- Twitter - [@MattPahuta](https://twitter.com/MattPahuta)


