# Designo Agency Frontend

## Table of Contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [Links](#links)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project insights](#project-insights)
- [Author](#author)

## Overview

### Requirements

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover state of all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address`, or `Your Message` fields are empty.
  - The `Name` field is not formatted correctly and should show "Invalid name"
  - The `Phone` field is not formatted correctly and should show "Invalid phone number"
  - The `Your Message` field is empty and should show "Can't be empty"

The application should be able to:

- Render data based on information pulled from a GraphQL endpoint generated from an AWS Serverless architecture.
- Store data in memory cache to enhance client side performance and promote return visits from users.

### Links

- Live Site URL: [https://designowebagency.vercel.app](https://designowebagency.vercel.app/)
- Check out the backend serverless architecture: [https://github.com/jNembhard/designo-serverless](https://github.com/jNembhard/designo-serverless)

### Screenshot

![landing-page](https://d39flyyba0jiph.cloudfront.net/assets/designo-landing-page.png)

### Built with

- [React.js](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [MaterialUI](https://mui.com/material-ui/)
- [Apollo](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Test Cases
- [Jest](https://jestjs.io) - Test Cases
- [React Hook Form](https://react-hook-form.com/)

### Project insights

Designo is meant to be a website which offers services for web, app, graphic design, and branding solutions. I wanted to take advantage of React's component-based architecture to break the UI into reusable components for sections such as headers, blocks, forms, and other reoccurring elements. This modularity makes it easier to update specific parts of the site as it scales without effecting the entire codebase.

React offers an unidirectional data flow which can ensure that changes to the site are predictable and easier to manage. This is especially valuable for a marketing site where content may change frequently.

For a marketing website such as this one, I felt that choosing React which has a large ecosystem and community may prove valuable to be able to enhance the development process. Whether you need to integrate third party solutions, implement complex animations, or ensure SEO optimization, there are well established solutions available to save time and effort.

#### Material UI

To help speed things up, I decided to use Material UI's component library to set up the global theme and component level design. The setup for the theme allows you to pass pre-defined colors and css code by breakpoint that can be called at any time if the application is wrapped with the ThemeProvider. I made use of Material UI's sx prop which allows you to avoid writing unnecessary styled-component code and instead define styles directly within the component itself like so:

```html
<Typography sx={{ color: "peach.main", fontSize: "1rem" }}>
 A material Box component
</Typography>
```

As your application grows, it can be hard to maintain the code in a scalable way, so you can pass styles into the component like this:

```typescript
export const styles = {
  text: {
    color: "peach.main",
    fontSize: {
      mobile: "1rem",
      tablet: "2rem",
      laptop: "3rem",
    },
  },
};
```

```html
<Typography sx="{{" ...styles.text }}> A material Box component </Typography>
```

What happens in this case is that you can now have an object that can pass all the data with the spread operator through the sx prop. This should keep the code clean keep the design and business logic separate in a maintainable way. The code will update in a responsive way based on the breakpoint.

Performance-wise, the sx prop uses a superset of CSS and auto-purges so the only CSS that's used on the page is sent to the client. There is also a fixed bundle size cost, so there's no need to worry about the file size growing as you add more css to the sx prop.

I've even added some skeleton loaders into the mix. They are useful for displaying a preview of the data before the data is loaded in order to reduce load time frustration for potential users. Essentially, they get a preview of what's to come and it helps keep them engaged in the displayed content. This is also useful for "buying time" in areas where there is low bandwidth.

### Apollo and GraphQL

I setup the backend to use AWS AppSync which ultimately deploys a GraphQL endpoint from a serverless architecture, so Apollo Client was an obvious choice on the frontend. Because of the way I need to access the data from the endpoint, I can ensure that I am only fetching exactly the data I need from the endpoint eliminating the possibility of over-fetching and under-fetching of data. This allows for faster load times and a more responsive application.

I made use of the built-in caching mechanism that stores fetched data in memory. This allows you to avoid redundant network requests and provides a consistent source of truth for your data. The client also manages local state, making it easier to manage UI state and interactions. From a marketing site perspective, the user will have a better experience because they can return to the site after their first visit and pick up where they left off and enjoy faster page load times. If you can keep a potential client's attention, it is more likely they will convert on your site.

Apollo Client is also capable of normalization and deduplication, meaning that if there's data used in multiple places throughout your application, Apollo is smart enough to store that data only once in the cache. This helps to improve memory usage and reduce unnecessary data transfers.

## Author

- Website - [Jason Nembhard](https://www.jasonnembhard.com)
