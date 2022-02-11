# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [Solution URL](https://github.com/Aashutosh-kr/Fronend_Mentor_project)
- Live Site URL: [Live site URL](https://aashutosh-kr.github.io/Fronend_Mentor_project/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
  - CSS Variables
  - Custom Utility classes
- Flexbox
- Mobile-first layout & Desktop first designing
- Javascript

### What I learned

I learnt to use `css :not()` function selector to do what the design wants.

```css
.primary-nav li:not(.active):hover::after {
  background: hsl(var(--color-white), 0.5);
}
```

The above code works as **when the `li` is hovered and if it does not contain the active class** only then it's after pseudo element gets the desired background color.

<!-- If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more. -->

### Continued development

Further I want to add functionality in which the different destination pages, crew pages and technology pages can be accessed the same way as in mobile applications without reloding entire site using right technologies.

## Author

- Website - [Aashutosh kumar](https://aashutosh-kr.github.io/Aashutoshkumar.github.io/)
- Frontend Mentor - [@Aashutosh-kr](https://www.frontendmentor.io/profile/Aashutosh-kr)
- freeCodeCamp - [@Aashutosh_Kumar](https://https://www.freecodecamp.org/Aashutosh_kumar)
