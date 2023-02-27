# github-user-search-app
# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes

### Screenshot

![](src/assets/Screenshot%202023-02-27%20at%2012-24-05%20GITHUB%20user%20search%20app.png)

### Links

- Live Site URL: [live site URL here](https://git-hub-user-searcher.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This was a great project to practice using React, fetching data from GitHub users API with the addition of implementing Dark mode. I'm really proud of the way I set Dark mode in my component.

```jsx
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

const [darkMode, setDarkMode] = useState(false);

<div id="container" className={darkMode ? "dark-mode" : ""}>
      
      <header id="header">
        <h1 id="title">devfinder</h1>
        <button
          typ="button"
          id="btn-mode"
          onClick={() => setDarkMode(!darkMode)}
        >
          <p
          className="icons"
            id="mode-text"
          >
            {darkMode ? "Light" : "Dark"}
          </p>
          <img
            className="icons"
            id="moonIcon"
            src={darkMode ? Sun : Moon}
            alt="Icon Sun/Moon"
          />
        </button>
      </header>
      </div>

```

### Continued development

I'm looking forward to learn more about React.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=Oive66jrwBs) - This is a really great video to learn about fetching data from an Api.

## Author

- Frontend Mentor - [@Alberto-12](https://www.frontendmentor.io/profile/Alberto)

## Acknowledgments

I'm very thankful for my mentor [Tresure Kabareebe](https://github.com/trekab) that guided me through the process.
