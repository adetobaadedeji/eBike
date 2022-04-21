import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

:root {
  --white: #FFFFFF;
  --black: #000000;
  --black-bike : #233348;
  --gray: #7D7987;
  --light-gray: #C2CFE0;
  --orange: #FCB72B;

  //animation
  --transition: ease-in-out 0.5s;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%; // 10px

  @media screen and (max-width: 1280px) {
  {
      font-size: 54.5%; 
  }
}

body {
  font-family: 'Mulish', sans-serif;
  overflow-x: hidden;
}

button {
background: linear-gradient(180deg, rgba(255, 189, 55, 0.58) 0%, #FFBD37 100%);
border-radius: 10rem;
}

h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 5.6rem;
	color: var(--black-bike);
}

h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 5.6rem;
  color: var(--black-bike);
}

h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  color: var(--black-bike);
}

h4 {
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
}
`
