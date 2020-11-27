/**
 * @file Footer Component.
 * @author Krutin Trivedi
 */

//importing Components & required Modules
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// importing CSS
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="page-footer font-small unique-color-dark">
                <div>  
                    <div className="container">

                    {/* <!-- Grid row--> */}
                    <div className="row py-4 d-flex align-items-center">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 col-lg-7 text-center text-md-right">

                            {/* <!-- Facebook --> */}
                            <a className="fb-ic">
                                <i className="fa fa-facebook white-text mr-4"> </i>
                            </a>
                            {/* <!-- Twitter --> */}
                            <a className="tw-ic">
                                <i className="fa fa-twitter white-text mr-4"> </i>
                            </a>
                            {/* <!-- Google +--> */}
                            <a className="gplus-ic">
                                <i className="fa fa-google-plus white-text mr-4"> </i>
                            </a>
                            {/* <!--Linkedin --> */}
                            <a className="li-ic">
                                <i className="fa fa-linkedin white-text mr-4"> </i>
                            </a>
                            {/* <!--Instagram--> */}
                            <a className="ins-ic">
                                <i className="fa fa-instagram white-text"> </i>
                            </a>

                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row--> */}

                    </div>
                </div>

                {/* <!-- Copyright --> */} 
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="/"> <u>DuckSurveys</u></a>
                    . All rights has been reserved.
                </div>
                {/* <!-- Copyright --> */}

            {/* <!-- Footer --> */}
            </footer>
        );
    }
}

export default Footer;