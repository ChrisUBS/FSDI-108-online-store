import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counter from './components/counter';
import Footer from './components/footer';
import CatalogPage from './components/catalogPage';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Lenaarn React
//         </a>
//       </header> */}
//       <Navbar></Navbar>
//       {/* <div className="content"> */}
//       <div>
//         <h1>
//           Hello World from React!
//         </h1>
//       </div>
//       <Counter></Counter>
//       <Footer></Footer>
//       {/* <h1>
//         Hello World from React!
//       </h1>
//       <Footer></Footer> */}
//     </div>
//   );
// }

function App() {
  return (
      <div className="App">
          <Navbar />
          <main>
              <CatalogPage />
          </main>
          <Footer />
      </div>
  );
}

export default App;
