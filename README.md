# Carousell Reddit

This project is for making a website similar to Reddit, where users can submit topics and upvote or downvote them.

This project uses [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit) as the foundation. I use this starter kit to quickly start making a working React application without wasting time for setting up a lot of modules needed in a React application. It contains ReactJS along with other useful tools for React development such as:

1. [Redux](http://redux.js.org/). A global state management library for JavaScript applications.
1. [React Router](https://reacttraining.com/react-router/). A library to manage routes inside a React application.
1. [Sass](http://sass-lang.com/). A CSS extension language to enhance & simplify CSS syntaxes.
1. [ESLint](http://eslint.org/). A customizeable linter for JavaScript.
1. [Babel](https://babeljs.io/). A plugin to compile ES6 into current available JavaScript syntaxes.
1. [Express](https://expressjs.com/). Run a server in NodeJS for a web application.
1. [Webpack](https://webpack.github.io/) Combine and build modules used in an application.

This list is only intended to highlight what I'm using inside this project. There are some other tools included that I do not mention here. To check out the complete tools included in this starter kit, you can visit the [React Redux Starter Kit Github Page](https://github.com/davezuko/react-redux-starter-kit).

## Table of Contents
1. [Requirements](#user-content-requirements)
1. [Installation](#user-content-installation)
1. [Implementation](#user-content-implementation)
1. [Project Structure](#user-content-project-structure)
1. [Contribution](#user-content-contribution)

## Requirements
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`

## Installation

To start using this application, first clone this repository using this command:

```bash
$ git clone https://github.com/AdrielLimanthie/carousell-reddit.git
```

After the cloning is done, you can install this project using npm:

```bash
$ npm install
```

To start the application, run this command:

```bash
$ npm start
```

This command starts the server at `http://localhost:3000/`. Open your browser and access this URL to take a look at this application.

## Implementation

First of all, I use Redux to store the data of topic in this application. Redux will store a state called topic that contains a list of topics. Each topic contains three values:

1. ID. A unique number to identify different topics.
1. Name. The name of the topic, saved as string.
1. Point. The upvote point of this topic. It will increase when users upvote and decrease when users downvote.

Other than that, the state also contains a number called Current ID. Current ID is used when making a new topic. The new topic's ID will retrieve the value of Current ID. Then, Current ID will increment by 1 after the new topic is made.

This is done to make sure each topic has a unique ID. I do not use topic's name as the unique identifier because I assume that two topics can have the same name.

Within this reducer, there are three actions that users can do:

1. Add a new topic. A new topic with will be added into the state with a name specified by users, ID retrieved from the Current ID value & upvote point set initially as 0.
1. Upvote a topic. A topic with specified ID will have its point increased by 1.
1. Downvote a topic. A topic with specified ID will have its point decreased by 1.

With that done, the only thing left is to build the display of the website.

The website only has 1 page, which is the home page. In this page, there are three React components to implement:

1. Sidebar. The Sidebar has a button to allow users to "Add a new topic". This button will trigger a text input where users can type the name of the new topic and submit it. The maximum length of a topic's name allowed in this component is 255 characters.
1. Topic List. It contains the list of topics already submitted by a user. Each topic is rendered as a Topic component (see number 3).
1. Topic. This component shows the name and upvote point of a topic, along with two buttons to upvote and downvote.

The flow of this website is implemented like this:

1. When users add a new topic in the Sidebar, the state of Redux will be updated according to the changes.
1. When the state is updated, Home file (`src/routes/HomeView.js`) will retrieve the new state that contains current topics.
1. The state of current topics will be preprocessed in the Home file. Things done in this preprocessing step are:
    * Sort the topics descending according to their points.
    * Limit the number of topics that will be shown to a maximum of 20.
1. Then, the final list of topics is passed to the Topic List component.
1. Topic List will map each topic data into a Topic component.
1. Then, each Topic component will show its name & point while listening to click event of its upvote/downvote button.
1. When a user clicks on upvote/downvote button, it will update the Redux state with the new point for this topic. Then, repeat step 2.
1. If a user want to add a new topic instead, he/she can click on the "Add a new topic" button. Then, repeat step 1.

## Project Structure

The basic structure of this project is like this:

```
.
└── src                              # Application source code
    ├── index.html                   # Main HTML page container for app
    ├── components                   # Global Reusable Components
    │   ├── Header                   # Header component
    │   │   ├── Header.js            # Main component file for Header
    │   │   ├── Header.scss          # Specific styles for Header
    │   │   └── index.js             # Header component definitions
    │   ├── Sidebar                  # Sidebar component
    │   ├── Topic                    # Topic component
    │   └── Topic List               # Topic List component
    ├── routes                       # Main route definitions
    │   ├── index.js                 # Bootstrap main application routes with store
    │   └── Home                     # Route for home page
    │       ├── index.js             # Home route definitions
    │       └── components           # Components for this route
    │           ├── HomeView.js      # Main route component for home page
    │           ├── HomeView.scss    # Specific styles for home page
    │           └── module.js        # Reducer file for topics
    ├── store                        # Redux-specific pieces
    │   ├── createStore.js           # Create and instrument redux store
    │   └── reducers.js              # Reducer registry and injection
    └── styles                       # Application-wide styles
        ├── main.scss                # Main styles for the application
        ├── button.scss              # Global styles for buttons
        ├── input.scss               # Global styles for input elements
        └── utilities.scss           # Generic styles used in a lot of places
```

### Explanation

This structure only shows the important files/folders added and modified for this project. The only main folder we will explore is the `src` folder.

The `src` folder contains files needed to build the Front End side of the website. Files/folders worth mentioning are:

1. `src/components` folder. This contains global React components that can be used in any page (not dependent to a single page). An example of global component is the Header.
1. `src/components/Header` folder. This folder contains files that form the Header of this website. `Header.js` is the container of a React component for Header. `Header.scss` defines the styles of the Header. `index.js` stores the definition of the Header, mosly used when another component wants to import Header as its sub-component.
1. `src/components/Sidebar`, `src/components/Topic`, `src/components/TopicList` folders. These folders have similar structures with the `src/components/Header` folder. The purpose is the same, to contain files that form the Sidebar, Topic and TopicList respectively.
1. `src/routes` folder. This contains available routes in the website, specified in `src/routes/index.js`.
1. `src/routes/Home` folder. This folder contains files that form the Home page of this website. The structure looks like a component folder (like Header), but it operates differently as it also defines the path of the route inside `src/routes/Home/index.js`
1. `src/routes/Home/module.js` file. This file contains the actions & reducer for Reddit topics. Functionality like "Adding a new topic" or "Upvote/Downvote a topic" is managed here.
1. `src/store` folder. This contains necessary files to create a Redux store and register reducers in the application. The `src/routes/Home/module.js` reducer is registered inside `reducers.js` file in this folder.
1. `src/styles` folder. This folder contains styles that can be applied globally (not dependent to a single component). Examples are buttons, input elements, etc.

## Contribution

Most of the initial setups have been done by [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit) including server configuration, dependencies management, routing, creating redux store, and many other things. Thus, in this section I will list the general file changes & addition I made to make this project as it is now.

Files that I added/modified for this project are:

|File Name    |Description|
|-------------|-----------|
|Header|Header is separated from the main layout file into its own component. This is done to allow modifications to the header without affecting the main layout file. Some changes made in the header are the removal of links to other routes & design changes.|
|Home|Home is the main and only route in this website. The home view contains 2 main components, Sidebar & Topic List.|
|Sidebar|Sidebar is a component that allows users to add new topics to the website.|
|Topic List|Topic List is a component that acts as a container for the existing topics. It renders a Topic component for each topic that exists.|
|Topic|Topic is a component that shows a topic's name and its upvote point. It also allows users to upvote/downvote to change the point of itself.|
|Topic Reducer|Topic Reducer is a reducer for Redux store that contains actions to modify topic data in the application. In this Topic Reducer file, there are actions to Add a new Topic, Upvote a Topic and Downvote a Topic.|
|Routes|I modified the route index and removed the Counter route because this application only needed one route, which is the Home route.|
|Styles|I also added & modified some files in `src/styles/` folder to add styles for Buttons, Text Inputs, etc.|
|Index.html|I edited this file to change the page title to "Reddit for Carousel"|
