import React from 'react';
import './App.css';

import SiteHeader from './components/SiteHeader';

function App() {
  return (
      <div className="body">
        <SiteHeader logoName="ROI Calculator" />

        <main>
          <section>
            <h1>The ROI calculator</h1>
            <h2>Add a business</h2>
            <h2>Add a campaign</h2>
            <h2>Calculate your ROI</h2>
          </section>

          <section>
            <div>
              Business ROI Calculator
            </div>

            <div>
              Campaign ROI Calculator
            </div>
          </section>  

          <section>
            <div>
              Business Results
            </div>

            <div>
              Campaign Results
            </div>
          </section>  

          <section>
            <h2>Support</h2>

            <form>
              Contact form
            </form>
          </section>
        </main>

        <footer>
          <nav>
            <p>copyright</p>
            <p>privacy policy</p>
          </nav>
        </footer>
      </div>
    );
}

export default App;
