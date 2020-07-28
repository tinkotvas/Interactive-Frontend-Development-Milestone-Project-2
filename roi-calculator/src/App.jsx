import React, {useState} from 'react';
import './App.css';

import SiteHeader from './components/SiteHeader';
import BusinessROICalculator from './containers/BusinessROICalculator';

function App() {
  const [businessResults, setBusinessResults] = useState([])

  console.log(businessResults)

  const addResult = (old, set, results) => {
    results.forEach((item) => {
      const oldResult =
        old.find((result) => result.name === item.name)

      if (oldResult) {
        const resultsWithoutItem =
          old.filter((el) => el.name !== item.name)

        set([...resultsWithoutItem, item])
        return
      }

      set([...old, item])
    })
  }

  const addBusinessResults = (results) =>
    addResult(businessResults, setBusinessResults, results)

  return (
      <div className="body">
        <SiteHeader logoName="ROI Calculator" />

        <main>
          <section>
            <h1>The ROI calculator</h1>
            <p>
              Define your KPI:s and calculate the results of your business or marketing investment. 
            </p>
          </section>

          <section>
            <div>
              <h2>Add a business</h2>
              <p className="orange-bold">Add a business by naming it to start defining your KPI:s.</p>
              <BusinessROICalculator/>
            </div>

            <div>
              <h2>Add a campaign</h2>
              <p className="orange-bold">Add a campaign by naming it to start defining your KPI:s.</p>
              Campaign ROI Calculator
            </div>
          </section>  

          <section>
            <div>
              <h2>Calculate your ROI</h2>
              <p className="orange-bold">
                Get your results based on the KPI:s you have added by clicking the button below. 
                Just change the KPI:s or add more investments to calculate new results.
              </p>
              {businessResults &&
            <ResultSection
              title="Business result"
              results={businessResults} />}
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

const ResultSection = ({title, results}) => (
  <div>
    <h3>{title}</h3>

    {results.map((item, i) => (
      <div key={i}>
        <h4>{item.name}</h4>

        <span>ROI: {item.result.roi}</span>
        <span>Net ROI: {item.result.netRoi}</span>
      </div>
    ))}
  </div>
)

export default App;
