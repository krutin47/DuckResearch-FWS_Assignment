/**
 * @file Home page of the Application.
 * @author Krutin Trivedi
 */

//importing the required Module
import React from 'react';

function Home() {
  
  return (
    <React.Fragment>
      <div>
        {/* Body Section */}
        <div className="full_window">
          
          {/* Survey Container */}
          <div className="register_container">
                
            {/* Survey Form Component */}
            <surveyForm/>

          </div>
        </div>
        {/* Body End */}
      </div>
    </React.Fragment>
  );
}

export default Home;