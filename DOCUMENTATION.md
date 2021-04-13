Project created with create-react-app. I have not messed with the react configuration files.

All header components are class components and the rest are functional components.

Folder structure follows the parent>child nesting structure.

Header and Footer are the same throughout the whole app and change based on auth state.

I prefer regular .CSS files having the same name as the component they belong to. Clashes are avoided by using ".coponent-name element-inside component" CSS selectors.

Form component logic is reused by conditional rendering of parent component and props.

Responsive pages: /movies, /movie, /search.

I am accessing the IMDB API using movieService.js

The CSS is ugly but all mine. I avoided copying my HTML & CSS homework in order to have unique looking site.

