This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Hooks example

Small example of how to use the new React hooks (currently in alpha version).

This project shows a small app with a counter, a random Chuck Norris facts generator and an overall state of the app view.

It mainly uses the `createContext` `useContext` and `useReducer` new methods to create a Provider where all other components will consume the main state dispatching different actions.

The app has a general store (like in the Redux library) and will show a random Chuck Norris fact on every render (just to test the new `useEffect` method)

### To run the project

`npm start` or `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.