Project created with create-react-app. I have not messed with the react configuration files.

Folder structure follows the parent>child nesting structure.

Header and Footer are the same throughout the whole app and change based on auth state.

I prefer regular .CSS files having the same name as the component they belong to. Clashes are avoided by using ".coponent-name element-inside component" CSS selectors.

Form component logic is reused by conditional rendering of parent component and props.

I am accessing the OMDB(IMDB) API using movieService.js