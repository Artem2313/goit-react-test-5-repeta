import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// const Article = ({ title, text }) => (
//   <article>
//     <h2>{title}</h2>
//     <p>{text}</p>
//   </article>
// );

// const ArticleWithLog = withLog(Article);

ReactDOM.render(<App />, document.querySelector('#root'));

// const add = (a, b) => {
//   return a + b;
// };

// const filterNumbers = numbers => {
//   numbers.filter(n => n > 2);
// };

// // const withLog = function(fn) {
// //   return function(...args) {
// //     console.log('Args:', ...args);
// //     return fn(...args);
// //   };
// // };

// const addWithLog = withLog(add);
// const filterNumbersWithLog = withLog(filterNumbers);

// addWithLog(5, 6);
// filterNumbersWithLog([1, 2, 3, 4, 5]);
