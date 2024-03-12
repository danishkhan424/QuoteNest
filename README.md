# QuoteNest


**Description:**

QuoteNest is a website project developed during Construct Week. This platform enables users to discover mood-related quotes quickly and easily, facilitating seamless copying for use across various platforms.

### Author

- [Danish Khan](https://www.linkedin.com/in/danishkhan424/)

### Demo

- [QuoteNest](https:///)

## How to Use

**Upon visiting the website:**

- Users are directed to the homepage featuring template quotes.
- The navigation bar consists of four links: Home, Generate, About, and Signup, accompanied by the QuoteNest logo.
- At the bottom, the footer includes social links.

**1. HOME and About Sections:**

- Users can navigate through these sections effortlessly.

**2. Generate Button:**

- Clicking on the Generate button redirects users to the Signup page.
- A toast notification from Chakra UI indicates "User not found, Please signup first."
- Users must register before proceeding.

**3. Signup Process:**

- After completing the signup process, users receive a toast notification stating "Account has been created, Please login."
- Users are redirected to the login page.

**4. Login:**

- Upon successful or unsuccessful login attempts, users receive a corresponding toast notification.

**5. Generate Page:**

- Successful login redirects users to the Generate page.
- Here, users can select the number of quotes and their type (short or large) before generating.

**6. Quote Generation:**

- Upon clicking the Generate button, data is fetched.
- Quotes are displayed in a grid format based on user preferences.

**7. Quote Cards:**

- Each quote card includes an option to copy the quote.
- Pagination is available for navigating through multiple pages.

**8. Single Quote Page:**

- Clicking `show more` on a quote card redirects users to the single quote page.
- Here, users can access additional information about the selected quote.
<br>

**Features:**

- Utilization of [React Slick Slider](https://react-slick.neostack.com/) for the homepage slider.
- Implementation of wavy background throughout the project with the assistance of [Shape Divider](https://www.shapedivider.app/) website.
- Integration of [Axios](https://www.npmjs.com/package/axios), [React Router DOM](https://www.npmjs.com/package/react-router-dom), [Chakra UI](https://chakra-ui.com/getting-started), [React](https://www.npmjs.com/package/react) .
- Responsive design ensures seamless functionality on all screen sizes.

<br>

## What I Learned

Building this project taught me invaluable lessons. Despite encountering numerous challenges, including implementing sliders, creating a wavy background, and ensuring responsiveness for an appealing UI, I persevered. Overcoming these obstacles not only strengthened my technical skills but also instilled in me the importance of resilience and determination in the face of adversity.

<br>


### Installation

To install the necessary packages, run the following commands in your terminal:

```bash
npm install
npm run quote
```
<br>

### Dependencies

```json
    "@chakra-ui/icons": "^2.1.1",
    "@chakra-ui/react": "^2.8.2",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.0",
    "axios": "^1.6.7",
    "framer-motion": "^11.0.8",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.2",
    "react-slick": "^0.30.2",
    "slick-carousel": "^1.8.1"
```
<br>

### Data Source

To fetch the data, the following API was utilized: [Quotable](https://api.quotable.io/quotes)

## Screenshots


### Gif

![QuoteNest Gif](./src/assets/QuoteNest/QuoteNestGif.gif)
### Default Screen


<img src="./src/assets/QuoteNest/home(Nest%20Hub%20Max).png" alt="Default Screen Home Page">
<img src="./src/assets/QuoteNest/about(Nest Hub Max).png" alt="Default Screen About Page">
<img src="./src/assets/QuoteNest/signUp(Nest Hub Max).png" alt="Default Screen signUp Page">
<img src="./src/assets/QuoteNest/logIn(Nest Hub Max).png" alt="Default Screen login Page">
<img src="./src/assets/QuoteNest/generate(Nest Hub Max).png" alt="Default Screen Generate Page">
<img src="./src/assets/QuoteNest/gridGenerate(Nest Hub Max).png" alt="Default Screen afterGridGenerate Page">
<img src="./src/assets/QuoteNest/singleCard(Nest Hub Max).png" alt="Default Screen singleCard Page">
<br>
<br>
<br>

### Small Screen Home Page
<img src="./src/assets/QuoteNest/home(iPhone XR).png" alt="Small Screen Home Page" width="400">


### Medium Screen Home Page
<img src="./src/assets/QuoteNest/home(Surface Duo).png" alt="Medium Screen Home Page" width="600">

<br>
<br>
<br>
**Note:** &nbsp; Please refer to the screenshots provided for a visual representation of the project's interface and functionality.
