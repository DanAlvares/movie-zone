# Movie Zone

## Running the app
	$ git clone git@github.com:DanAlvares/movie-zone.git
	$ cd movie-zone
	$ npm i
	$ npm start 

Or you can just [open in Stackblitz](https://stackblitz.com/github/DanAlvares/movie-zone) to view the code.  

## CSS
 I have gone for pure CSS as it is too easy to get tied down with a CSS abstraction (such as Less or SCSS) and is easier to migrate *to* SCSS than it would be to remove it from a project. With current developments in CSS (and good browser support) it is far more beneficial. For example: CSS Custom Properties (variables) can be updated by JavaScript or in Dev tools, on the fly. 

## Workflow
I have used a gitflow process. Usually creating feature branches and merging to develop once a feature is done, but in this case I worked on the develop branch. I setup a basic CI/CD process whereby merging to master automatically deploys to Netlify. 
