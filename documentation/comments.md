### Repository Portal ###

### Time Allotment
~ 1 hr - basic react app structure and widget creation \
~ 1 hr - data grid and insight creation \
~ 1 hr - UI updates and pixel pushing \
~ 1 hr - cleanup and documentation



### Assumptions ###
* Date type is passed over the API as a millisecondsSinceEpoch long integer (I accidently randomly generated it as a millisecondsSinceEpoch string so that's how it's handled in the app)
* The API will never return a null or empty value for any of the fields on a Repository object
* A higher Risk is bad


User Based Assumptions - **All of these could be validated or disgarded with some product discovery and/or talking to customers and/or talking to product managers**
* Users find Risk, Repos, Size, and Commits as the most useful insights 
* Users find size is more useful visually in Mb than Kb
* Users don't care what the url is but just that they can navigate to the repo (No visible url in the table)
* Users don't care to have a constant scrolling list and pagination + filtering/sorting will suffice. 
    * Ideally a search would be included. 


### Limitations ###
* Only displays basic insights
* No search functionality
* Only displays a max of 100 rows at a time, this could be frustrating for larger users.
* No error handling as of now. (Particularly because I'm not making a real fetch call)
* Due to the way they are currently calculated, adding new insight types could be a pain and risky. 
* No in-depth repository view
* Dates are formatted as (MM/DD/YY) and should be internationalized
* Only one sort and one filter can be applied. 


### Technical Decisions ###
* DataGrid material-ui component is in lab and not part of core material-ui. Normally wouldn't use this class in a production based environment but decided to use it here for the added benefits of sorting and filtering automatically. It also paginates and does virtualization automatically so should be able to handle larger datasets. 
* No app statemanagment like Redux.  Since this is mostly UI and not a lot of user interaction, felt an app state management solution would be unnecessary or an overly complex addition. However, the instant there is a little more user interaction (say search or checking different insights or further drilldown) would include app state management. 
* No unit tests - I was mostly focused on building out the UI and did not get to unit testing but would write tests before releasing to production. 



### Future Changes and/or Additions ###
* If this were a real project, these are the things I would be thinking about: 
    * UI Changes and Additions
        * Have somebody with a better eye for UI design upgrade the design :) 
        * Include user search functionality
        * Better analysis/insight or repositories + ability to drilldown. Nice charts would be a plus as well. 
        * User based date formatting
        * Multi-filtering on the table
        * Better loading states for both the table and insight containers
    * Technical Changes and Additions
        * Implement Redux or some state management
        * Refactor stat calculations
        * Get data from API
        * Refactor out individual insight component from RepoInsightRow
        * Replace DataGrid with a production-ready component
        * Error handling