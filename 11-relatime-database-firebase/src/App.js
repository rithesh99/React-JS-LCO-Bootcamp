import React, { useReducer, useEffect } from "react";

import { Container} from "reactstrap";

// react-router-dom3
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// react toastify stuffs
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// firebase stuffs
//TODO: DONE import firebase config and firebase database
import { firebaseConfig } from "./utils/config";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

// components
import AddContact from "./pages/AddContact";
import Contacts from "./pages/Contacts";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ViewContact from "./pages/ViewContact";
import PageNotFound from "./pages/PageNotFound";

// context api stuffs
//TODO: DONE  import reducers and contexts
import reducer from "./context/reducer";
import { ContactContext } from "./context/Context";
import { SET_CONTACT, SET_LOADING } from "./context/action.types";

//initlizeing firebase app with the firebase config which are in ./utils/firebaseConfig
//TODO: DONE initialize FIREBASE
firebase.initializeApp(firebaseConfig);

// first state to provide in react reducer
const initialState = {
  contacts: [],
  contact: {},
  contactToUpdate: null,
  contactToUpdateKey: null,
  isLoading: false
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // will get contacts from firebase and set it on state contacts array
  const getContacts = async () => {
    // TODO: DONE load existing data
    dispatch({
      type: SET_LOADING,
      payload: true
    });
  

  const contactsRef = await firebase.database().ref("/contacts");
  contactsRef.on("value", snapshot => {
    dispatch({
      type: SET_CONTACT,
      payload: snapshot.val()
    });
    dispatch({
      type: SET_LOADING,
      payload: false
    });
  });
  };

  // getting contact  when component did mount
  useEffect(() => {
    //FIXME: DONE call methods if needed
    getContacts();
  }, []);

  return (
    <Router>
      {/* FIXME: DONE Provider is not configured */}
      <ContactContext.Provider value={{ state, dispatch }}>        
        <ToastContainer />
        <Header />
        <Container>
          <Switch>
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/view" component={ViewContact} />
            <Route exact path="/" component={Contacts} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </Container>

        <Footer />
      </ContactContext.Provider>
    </Router>
  );
};

export default App;
