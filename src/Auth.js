import React,{useState} from "react";

export default function(props){

    let [authMode, setAuthMode]=useState("signin")

    const changeAuthMode =()=>{
        setAuthMode(authMode==="signin"?"signup":"signin")
    }

    if(authMode==="signin"){

    return (
        <div className="Auth-from-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h1 className="Auth-form-title">Sign In</h1>
                    <div className="text-center lead">
                        Not registered yet? {" "}
                        <span className="link-color" onClick={changeAuthMode}>
                            Sign Up
                        </span>
                    </div>
                <div className="form-group mt-3 lead">
                    <label>E-mail address</label>
                    <input
                    type="email"
                    className="form-control mt-1 lead"
                    placeholder="Enter E-mail"
                    />
                </div>
                <div className="form-group mt-3 lead">
                    <label>Password</label>
                    <input
                    type="password"
                    className="form-control mt-1 lead"
                    placeholder="Enter Password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3 lead">
                  <button type=" submit" className="button">
                    Log In
                  </button>
                </div>
                <p className="forgot-password text-center mt-2 lead">
                    <a href="#" className="link-color"> Forgot Password</a>
                </p>
                </div>
            </form>
        </div>
    )}

    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h1 className="Auth-form-title ">Sign In</h1>
                    <div className="text-center lead">
                        Already Registered? {" "}
                        <span className="link-color" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3 lead">
                      <label>Full Name</label>
                      <input
                      type="text"
                      className="form-control mt-1 lead"
                      placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group mt-3 lead">
                      <label>E-mail Address</label>
                      <input
                      type="email"
                      className="form-control mt-1 lead"
                      placeholder="E-mail Address"
                      />
                    </div>
                    <div className="form-group mt-3 lead">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1 "
                        placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3 lead">
                        <button type=" submit" className="button">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2 lead">
                        <a href="#" className="link-color">Forgot Password</a>
                    </p>
            </div>
            </form>
        </div>
    )

}
