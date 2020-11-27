/**
 * @file Error page with status code of 404 for the Application.
 * @author Krutin Trivedi, Banner No: B00843515 <krutin@dal.ca>
 */

//importing Components & required Modules
import React from 'react';

function Error404(props) {
  return (
    <React.Fragment>
      <section id="error_404" className="oneColumnSection p100-0 forUp">
        <div className="wrapper">
          <div className="text-center wow fadeInDown ">
            <h1 className="display-2">Error!! CODE: 404</h1>
            <div className="p40-0 forSmallWidth light">
              {/* //TODO :: Add content in the P tag */}
              <h5>We are sorry... but it looks like you are doing something wrong.!</h5>
              <h5>Or maybe page is under Construction..!</h5>
            </div>        
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Error404;