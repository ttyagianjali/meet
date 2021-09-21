import React from "react";
import "./WelcomeScreen.css";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <h1>Welcome to the Meet app</h1>
      <h2>
        Log in to see upcoming events around the world for full-stack developers
      </h2>
      <div className="button_cont" align="center">
        <div class="google-btn">
          <div class="google-icon-wrapper">
            <img
              class="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google sign-in"
            />
          </div>
          <button
            onClick={() => {
              props.getAccessToken();
            }}
            rel="nofollow noopener"
            class="login-btn-text"
          >
            <b>Sign in with google</b>
          </button>
        </div>
      </div>
      <a
        href="https://ttyagianjali.github.io/meet/privacy.html"
        rel="nofollow noopener"
      >
        Privacy Policy
      </a>{" "}
      | <a href="https://github.com/ttyagianjali/meet">See On GitHub</a>
    </div>
  ) : null;
}

export default WelcomeScreen;
