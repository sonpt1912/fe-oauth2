import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(
          "this is token from google: " + credentialResponse.credential
        );
        axios
          .post(
            "http://localhost:8080/api/login-google",
            { crenditial: credentialResponse.credential },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log("this is jwt from be: " + response);
          });
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}

export default App;
