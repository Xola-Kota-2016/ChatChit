import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
    return (
      <body>
        <br />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-body">
                    <h1>Register</h1>
                    <p className="text-muted">Create a new Account</p>
                    <form action="/register" method="POST">
                      <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input type="text" className="form-control" required name="userName" placeholder="Username" />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="email" className="form-control" required name="email" placeholder="Email" />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="password" className="form-control" required name="password" placeholder="Password" />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="password" className="form-control" required name="confirmPassword" placeholder="Confirm Password" />
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <input type="submit" className="btn btn-primary px-4" value="Register" />
                        </div>
                        <div className="col-6 text-right">
                          <button type="button" className="btn btn-link px-0">Login</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
  
  export default Register;