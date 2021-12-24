
<h3>PokeApi App</h3>

<p>Take a look at the deployed app <a href="https://pokemon-sandy.vercel.app/" target="_blank">here</a></p>
</br>
<h5>This app is a technical challenge for a prospective employer</h5>
<h5>The aim was to use the pokeApi to</h5>
<ul>
  <li>list all pokemon from the API</li>
  <li> Display the following information about individual pokemon when a user clicks from the main list</li>
 
  <ul>
    <li>Species</li>
    <li>Stats</li>
    <li>Types</li>
    <li>Weight</li>
    <li>Moves</li>
  </ul> 
</ul>

<h5>The brief also required pagination - showing no more than 16 pokemon at once, and an option for a user search input which I chose to implement</h5>
</br>
<h3>Technologies used</h3>
<ul>
    <li>React</li>
    <li>Typescript</li>
    <li>Next.js</li>
    <li>CSS</li>
    <li>TailwindCSS</li>
  </ul> 
  <h3>My Approach</h3>
  <p>As may be seen from my early commits, I decided first to prerender a certain amount of pokemon, and load more only when several pages had been clicked/scrolled through. As I wanted to implement the search function later, I thought this may be difficult to do and might take a lot of processing, so instead I decided to fetch all pokemon (information for each is limited to and object containing name and url) </p>
  <p>Pagination is achieved by using array.slice, taking as the first index: the number of pokemon displayed per page multiplied by the current page index(state variable) minus 1, and as the last index:  the number of pokemon per page multiplied by the current page index </p>

<h3>Cool Stuff to Look Out For!</h3>
<ul>
    <li>SetTimeout of 500ms on search input means that comparisons of user input and pre-fetched data at state level are not overused unnecessarily, saving on processing</li>
    <li>Fallback image for errors on main list images</li>
    <li>Changed .png sprites to more appealing (and slightly quicker loading) .svg images - credit to: "https://github.com/sashafirsov/pokeapi-sprites"</li>
    <li>No additional external packages used</li>
  </ul> 
  
<h3>Problems / Things I'd like to Improve</h3>
<ul>
    <li>Images are sometimes very slightly slow to load.  This could might be solved with a loading state, i.e. a spinner, or it might even more simply be solved by CSS loading animation (which would rely on obvserving when pageIndex changes)</li>
    <li>Styling is very basic, particularly on the individual pokemon page where information is not very easy to understand.</li>
      <li>Typescript still throws a couple of minor errors - for example when using router.query.</li>
        <li>Fetching all pokemon at once still seems inefficient, but time limit meant this was the most straightforward way to implement all desired features</li>
  </ul> 
