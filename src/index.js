import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {choice, remove} from './helpers';
import foods from './foods';

const root = ReactDOM.createRoot(document.getElementById('root'));
let randFruit = choice(foods);

console.log(`I'd like one ${randFruit}, please`);
console.log(`Here you go: ${randFruit}`);
console.log(`Delicious! May I have another?`);
remove(foods, randFruit);

if(foods.indexOf(randFruit) < 0){
  console.log(`I'm sorry, we're all out. We have ${foods.length} left.`);
}

root.render(
  <React.StrictMode>
    <p>Hello World!</p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
