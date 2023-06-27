import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from './firebase';
import authIcon from '../components/navImages/draw2.svg';
import google from '../components/navImages/google.svg';

interface User {
  email: string;
  password: string;
}

enum FormType {
  SignIn,
  SignUp,
}

const AuthForm: React.FC = () => {
    const [formType, setFormType] = useState<FormType>(FormType.SignUp);
    const [user, setUser] = useState<User>({
      email: '',
      password: '',
    });
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    };
  
    const handleSignUp = async () => {
        try {
          await createUserWithEmailAndPassword(auth, user.email, user.password);
          console.log('User signed up successfully');
          setUser({
            email: '',
            password: '',
          });
        } catch (error) {
          console.log('Error:');
        }
      };
      
      const handleSignIn = async () => {
        try {
          await signInWithEmailAndPassword(auth, user.email, user.password);
          console.log('User signed in successfully');
          setUser({
            email: '',
            password: '',
          });
        } catch (error) {
          console.log('Error:');
        }
      };

      const handleSignInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          console.log('User signed in with Google:', user);
          // Additional logic after successful sign-in with Google
        } catch (error) {
          console.log('Error:', error);
        }
      };
      
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (formType === FormType.SignUp) {
          handleSignUp();
        } else {
          handleSignIn();
        }
      };
      

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: 'hsl(0deg 0% 98.04%)' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src={authIcon} className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    placeholder=" Enter Password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <div className="d-flex justify-content-around">
                  <button
                    type="submit"
                    onClick={handleSignIn}
                    className="btn btn-primary btn-lg btn-block"
                    style={{ color: 'black' }}
                  >
                    Sign In
                  </button>
                  <button
                    type="submit"
                    onClick={handleSignUp}
                    className="btn btn-primary btn-lg btn-block"
                    style={{ color: 'black' }}
                  >
                    Sign Up
                  </button>
                </div>

                <div className="divider align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <div className="d-flex justify-content-around">
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    style={{ backgroundColor: '#3b5998' }}
                    type="button"
                    onClick={handleSignInWithGoogle}
                  >
                    <div className='d-flex'>

                    <img src={google} alt="" className='px-3' />
                    Continue with Google
                    </div>
                  </button>
                  <a
                    className="btn btn-primary btn-lg btn-block"
                    style={{ backgroundColor: '#55acee' }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter me-2"></i>Continue with Facebook
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthForm;
