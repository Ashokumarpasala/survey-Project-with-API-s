import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import NavBar from './NavBar';
import SideBar from './SideBar';
import SurveyListPage from './SurveyListPage';
import CreateSurveyPage from './CreateSurveyPage';
import SingleQuestion from './questionTYpes/SingleQuestion';
import { FormDataProvider } from '../addFormData';
import AuthenticationPage from '../Authentication/AuthtenticationPage';

const Page1 = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthenticated(!!user);
      if (user) {
        setEmail(user.email);
        setUsername(user.displayName || '');
        setAvatar(user.photoURL || '');
      } else {
        setEmail('');
        setUsername('');
        setAvatar('');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  const getDisplayNameFromEmail = (email) => {
    const atIndex = email.indexOf('@');
    const displayName = email.substring(0, atIndex);
    return displayName.toUpperCase();
  };

  const displayName = getDisplayNameFromEmail(email);

  return (
    <>
      <NavBar email={displayName} username={username} avatar={avatar} handleSignOut={handleSignOut} />
      <div className="row">
        <SideBar />
        <div className="col">
          <Router>
            <FormDataProvider>
              <Routes>
              <>
                  <Route
                    exact
                    path="/"
                    element={authenticated ? <SurveyListPage /> : <AuthenticationPage />}
                  />
                  <Route
                    path="/createSurvey"
                    element={
                      authenticated ? (
                        <CreateSurveyPage />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/addQuestions"
                    element={
                      authenticated ? (
                        <SingleQuestion />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                </>
              </Routes>
            </FormDataProvider>
          </Router>
        </div>
      </div>
    </>
  );
};

export default Page1;
