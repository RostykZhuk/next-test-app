# next-test-app

## Overview

This app is a worksheet. Here you can answer questions and see which questions you have already answered and which ones you have not. You can also see which answer you selected last.


From the technical side, there are mock data in the folder -
`utils/mockData`:
Tasks (i. e. questions) - `mockData.json`
The keys (i. e. correct answers) - `keys.json`
Data is received through a separate “Service” - `utils/DAL`

Utils also has several additional functions for the application.
`utils/checkAnswer.ts` - based on utils/mockData/keys.json, checks the selected answer and determines whether it is correct
`utils/handleAnswer.ts` - simulates storing user answers. Writes the ID of the question and the ID of the answer chosen by the user to this question to sessionstorage
`utils/useAppState.ts` - a hook that processes the current state of the application

The components of the application itself are located in `components`. There are separate Header and Preloader. 
`components/MainContent` stores the components responsible for rendering the slider, which is the main content of the application. 

Main routers of the app:
`/` - home page, where you can see the welcome message
`/questions` - a page where you can take several questions (as many as are mocked)
`/my-answers` - a page where you can check which questions you have already answered and how

Also, the application simulates a slight delay when loading and selecting an answer to simulate network operations delay



## Features
	•	Next.js (v15.0.3): Framework for building fast, server-rendered React applications.
	•	React (v18.3.1): Declarative JavaScript library for building user interfaces.
	•	Tailwind CSS (v3.4.1): Utility-first CSS framework for creating custom designs quickly.
	•	TypeScript (v5): Static typing for JavaScript to improve code quality and maintainability.
	•	Swiper (v11.1.14): Fully responsive and modern slider/carousel solution.


## Getting Started

# Prerequisites
Ensure you have the following installed:
	•	Node.js (v18.20.1 or higher version recommended)
	•	npm or yarn (for dependency management)
# Installation
	1.	Clone the repository:
`git clone <repository_url>`
	2.	Navigate into the project directory:
`cd next-test-app`
	3.	Install dependencies:
`npm install`

## Scripts
	•	Start development server:
`npm run dev`
	•	Build for production:
`npm run build`
	•	Run production build:
`npm run start`
	•	Lint the code:
`npm run lint`