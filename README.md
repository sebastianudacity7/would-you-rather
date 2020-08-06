# Would You Rather Project

Project implements 'Would You Rather' game where users are given questions with two possible answers.
Players can answer existing questions and also submit their own questions.
The player with most answers and submitted questions wins.

Note:

1) The project specification says "Once the user logs in, the home page is shown."
   It's not clear from the requirement whether it should happen every time or on the first time login only.
   I think it's better if the user returns to the same page after subsequent logins and hence the app does that and opens the home page on the first login only.

2) It's not in the specification but I allowed votting directly on the home page

3) An extra page with 'My questions' 

4)  The specyfication says 'The app contains a navigation bar that is visible on all of the pages.' 
    It's not clear if it also applies to the login page. 
    I think there is no need to show it on the login page and hence the navigation bar is hidden there.


## TL;DR

To get started use:

* install all project dependencies with `npm install`
* start the development server with `npm start`