    Project 3: MERN Blog App

    Description

This was my third project on the course. We were using React.js for the front end and Express/Mongoose/MongoDB to create an app which allows users to sign up to a blog site, create blogs which are added to a feed and to the bloggers own personal page. As well as this, to allow users to use create, read, update, and delete functions on their own created blogs which makes use of token authentication. 

    Deployment link

https://deft-tulumba-c73cf2.netlify.app/

##################

    Getting Started/Code Installation

The app has 1 front end repo which can be accessed in the following link: 
https://github.com/Mohamed1419/GA-Project-3-MERN/tree/main/client

The app has 1 back end repo which can be accessed in the following link:
https://github.com/Mohamed1419/GA-Project-3-MERN/tree/main/server


To run you need to have Node.js installed locally and you can find the instructions to that in the following link: 
https://nodejs.org/en/download/package-manager/

You need to run the back end server:

See the following link for full instructions on how to install MongoDB:
https://www.mongodb.com/docs/manual/administration/install-community/

Install the node modules by running the following in the root of the SERVER:
npm install

Start the server up by running the following in the root of the SERVER:
nodemon

You also need to run the front end client:

Install all the node modules by running the following in the root of the CLIENT:
npm install

Start up the app by running the following in the root of the CLIENT:
npm start


    Timeframe & Working Team (Solo/Pair/Group)

In this project I was working alongside Amal, Angeline, Wang, and Manohisoa Rajaonarivony, you may visit their Github for this project in the following links:

https://github.com/amgorithm/Project-3

https://github.com/angelinewang/Project3

https://github.com/ManohisoaVicky/Project3

We had 12 days to prepare our project for presentations from 6th October 2022 until 18th October 2022. 

    Technologies Used

Front End:
- React.js
- JavaScript
- CSS
- HTML
- NPM

Bank End:
- Node.js
- Express
- Mongoose
- MongoDB
- JWT
- Bcrypt

Version Control:
- Git

Design:
- QuickDBD
- Excalidraw
- Miro

Planning:
- Trello

    Brief Instructions

Technical Requirements

You must:
- Build a full-stack application by making your own backend and your own front-end
- Use an Express API to serve your data from a Mongo database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
- Be deployed online so it's publicly accessible.

Necessary Deliverables
- A working app hosted on the internet
- A link to your hosted working app in the URL section of your Github repo
- A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project
- A readme.md file with:
    - An embedded screenshot of the app
    - Explanations of the technologies used
    - A couple paragraphs about the general approach you took
    - Installation instructions for any dependencies
    - Link to your user stories/wireframes – sketches of major views / interfaces in your application
    - Link to your pitch deck/presentation – documentation of your wireframes, user stories, and proposed architecture
    - Descriptions of any unsolved problems or major hurdles you had to overcome


    Planning

The first thing our team done was book a call on zoom to decide upon a project and we decided on a blog catered for anyone in th tech field and named the project Blen. We then decided to flesh out how back end would work and created a database diagram to see what models and variables we would need and how they relate to one another. We used QuickDBD website to design this together as a team. You can access this in the following link: https://app.quickdatabasediagrams.com/#/d/mnlKKN. 

After this we started planning on how the front end should work and which pages will be made for the website. We used Excalidraw to design out wireframe and made general designs on each page. We took inspiration from a variety of different sites for example Devdojo, and Morioh. We then moved onto break down the project into smaller modules, and then list each module as a card on a Trello board. We then proceeded to distribute the modules between team members and decided to have each member work on a designated page on the front end after the back end was created together. The Trello board can be accessed in the following link: https://trello.com/b/4N6Qx6gt/project-3-express. I took on the responsibility of creating the homepage. 

    Build/Code Process and Challenges

const onAlphabetSortChange = (e) => {
    const newBlogs = structuredClone(blogs);
    setBlogs(newBlogs.sort((a, b) => a.title.localeCompare(b.title)));
  };

In this block of code from my homepage I made function which sorts out the posts on the homepage by alphabetical order. I found the localCompare method to be particularly useful for this and saved myself a lot of time because the alternative route would have been much longer as I was thinking about making a function which looked at the first 2 characters and compared them to see which came before the others, and then after all that was done expanding on that to cater for the 3rd, 4th, 5th positions on the string and comparing those too. It would have consumed so much more time. 
Also another thing is the use of the structured clone. I used this because when I sorted by the blogs state directly it seemed to break the code. Hence a solution was to create a clone and use that clone instead for manipulating using this sort. 

const onFilterChange = (e) => {
    const thisTag = e.target["name"];
    if (e.target.checked) {
      setTags([...tags, thisTag]);
    } else {
      setTags(tags.filter((tag) => tag !== thisTag));
    }
    if (tags.size) {
      setBlogs(
        blogs.filter((blog) => {
          return tags.includes(blog.tags);
        })
      );
    }
};

In this block of code, my aim was to create a function which allowed the user to click on any particular tag, and manipulate the blogs state to show only the blogs which have those tags. I used these functions alongside a button which the name attribute was taken in order for the function to identify the particular tag that the user clicks. A tag state which had all the tags on the database already inside of it was used in order to identify which tags are currently selected/filtered by the user. Then when a particular tag is checked (because at any given time some may be unchecked) it will add that tag to the tags state and then show all blogs containing that tag on the interface. Alternatively if the tag is unchecked, then a function will execute that will alter the tags state and only contain tags which are not the tag that has been unchecked, then this will reflect on the interface and filter out any blog containing that tag. 

const onDateSortChange = (e) => {
    console.log(e.target);
    const newBlogs = structuredClone(blogs);
    setBlogs(
      newBlogs.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
    );
  };

  In this block of code which has the similar goal of sorting the blogs state, this instead was made to sort the blogs state by date uploaded using the createdAt method which every blog has. Similar to the title/alphabetical order sort, if the state was directly manipulated, the code would break and the function would not work. So a clone was made and I used this clone to manipulate instead, and it worked flawlessly so I went with it. This function would manipulate the clone function and then once it was done sorting it out by date it would then take the new sorted clone and update the blogs state entirely with the new clone. 

    Wins, Bugs, and Future Improvements


- We were able to use Git well for version control and merging the final code together. Although we did happen upon some problems along the way we communicated effectively as a team and got it sorted in no more than a few hours. 
- We were able to manage the workload and deliver an MVP by the timeframe we decided as a team. Then after that we started working on our stretch goals. And in the end had a viable and working app. 
- We were able to meet all deliverables and meet the deadline date with a deployed app that we could present. 
- We worked smoothly as a team displaying strong communication skills and we knew what was going on at all times and felt comfortable with the work distribution. 
- I think the parts which were my responsibility I worked to the best of my ability to make mobile friendly, and can say it turned out pretty well
- I think I was able to also make the app look very sleek and modern which was a goal of mine from my previous project

- A flaw which the app still has is the the details pages' CSS was not matching with the rest of the websites theme which can be off putting to users. Although I did raise this concern to the appropriate team member, it was not my responsibility to fix it, nor was it my code to fix. 

- To enhance the app I would like to add a searchbar feature as I think that is something which will make the user experience on the app much better
- Another feature which I would have liked to add is a following system

    Key Learnings/Takeaways

- I further expanded on my skills of working alongside people, this is because I worked with a team of 3 other people
- An extension of the previous point is that I also learnt more about what it means to manage workloads and distribution of work, and which styles work better. Meaning whether to break down the app into chunks based on pages or just general front end and back end. 
- I further improved on my skills using Git and version control. 
- I understand more what is required to launch a full stack app
- I learnt a lot about how to create and use a back end server 