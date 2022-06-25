import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from 'react-router-dom';

import { SignUp, SignUpFinalForm } from './components';

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Link className="btn" to={`form`}>
            Form
          </Link>
          <Link className="btn" to={`final-form`}>
            FinalForm
          </Link>

          <main>
            <Routes>
              <Route path="/form" element={<SignUp />} />
              <Route path="/final-form" element={<SignUpFinalForm />} />
            </Routes>
          </main>
        </div>
      </>
    );
  }
}
export default App;

{
  /* <SignUp />
<SignUpFinalForm /> */
}
