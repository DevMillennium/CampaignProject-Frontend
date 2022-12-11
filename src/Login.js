import React,{useState} from 'react';
import { useAsyncError } from 'react-router-dom';

export default function(props){
    let [authMode,setAuthMode]=useState("signin")
    const changeAuthMode=()=>{
        setAuthMode(authMode==="signin"?"signup":"signin");
    }
    if(authMode==="signin"){
        return (
 <div className='Auth-form-container'>
                
                
                <form className='Auth-form'>
                <div className="tabs">
            <h3 className="signup-tab"><a onClick={changeAuthMode}>Sign Up</a></h3>
            <h3 className="login-tab"><a  className="active"  >Sign in</a></h3>
        </div>
        
                    <div className='Auth-form-content'>
                        <h3 className='Auth-form-title'>Sign In</h3>
                        <div className='text-center'>
                           {" "}
                            
                        </div>
                    </div>
                    <div className='form-group mt-3'>
                        <label >Email Adress</label>
                        <input
                            type="email"
                            className='form-control mt-1'
                            placeholder='Enter mail'
                        />
                    </div>
                    <div className='form-group mt-3'>
                        <label >Password</label>
                        <input
                            type="password"
                            className='form-control mt-1'
                            placeholder='Enter password'
                        />
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button type='submit' className='btn btn-primary'>
                            submit
                        </button>
                    </div>
                    <p className='forgot-password text-center mt-2'>
                            Forgot <a href='#'>password?</a>
                    </p>
                    
                    
                </form>
            </div>
        
        )

    }
    return (
        <div className='Auth-form-container'>
            
            <form className='Auth-form'>
            <div className="tabs">
            <h3 classNae="signup-tab"><a class="active" >Sign Up</a></h3>
            <h3 className="login-tab"><a   onClick={changeAuthMode}>Sign in</a></h3>
        </div>
                <div className='Auth-form-content'>
                    
                    <h3 className='Auth-form-title'>Sign Up</h3>
                    <div className='text-center'>
                        
                    </div>
                    <div className='form-group mt-3'>
                        <label >User Name</label>
                        <input
                             type="User Name"
                            className='form-control mt-1'
                             placeholder='e.g '
                         />
                    </div>
                    <div className='form-group mt-3'>
                        <label >Email Adress</label>
                        <input
                             type="email"
                            className='form-control mt-1'
                             placeholder='Enter mail'
                         />
                    </div>
                     <div className='form-group mt-3'>
                        <label >Password</label>
                        <input
                            type="password"
                            className='form-control mt-1'
                            placeholder='Enter password'
                        />
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button type='submit' className='btn btn-primary'>
                             submit
                        </button>
                     </div>
                    <p className=' text-center mt-2'>
                        Forgot <a href='#'>password?</a>
                    </p>
                    </div>
                
            </form>
        </div>
        
    )
}
