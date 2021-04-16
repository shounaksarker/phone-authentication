import React from 'react';
import firebaseConfig from './firebaseConfig';
// import * as firebaseui from "firebaseui";
import firebase from "firebase/app";
import "firebase/auth";
import './login.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const uiConfig = {
        signInSuccessUrl: "/", //This URL is used to return to that page when we got success response for phone authentication.
        // tosUrl: "powerodd.com",
        signInOptions: [
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    type: 'image',
                    size: 'invisible',
                    badge: 'bottomright'
                },
                defaultCountry: 'AU',
                // defaultNationalNumber: '+880-1960916139',
                // You can also pass the full phone number string instead of the
                // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
                // the first country ID that matches the country code will be used to
                // populate the country selector. So for countries that share the same
                // country code, the selected country may not be the expected one.
                // In that case, pass the 'defaultCountry' instead to ensure the exact
                // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
                // will always have higher priority than 'loginHint' which will be ignored
                // in their favor. In this case, the default country will be 'GB' even
                // though 'loginHint' specified the country code as '+1'.
                loginHint: '147',
            }
        ]
    };

    // test/another way

    // if (firebaseui.auth.AuthUI.getInstance()) {
    //     const ui = firebaseui.auth.AuthUI.getInstance()
    //     ui.start('#firebaseui-auth-container', uiConfig)
    // } else {
    //     const ui = new firebaseui.auth.AuthUI(firebase.auth())
    //     ui.start('#firebaseui-auth-container', uiConfig)
    // }

    // ==========================================================

    // const uiConfig = {
    //     // Popup signin flow rather than redirect flow.
    //     signInFlow: 'popup',
    //     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    //     signInSuccessUrl: '/',
    //     // We will display Google and Facebook as auth providers.
    //     signInOptions: [
    //       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //     ],
    //   };
      


    return (
        <div className='auth d-flex align-items-center justify-content-center h-100 d-inline-block'>
            <div className='py-5 mt-5'>
                <h1>Verify Your Number</h1>
                <p className="verify-text">Please enter your mobile number to <br /> Receive a verification code.</p>

                {/* <div id="firebaseui-auth-container"></div> */}
                <StyledFirebaseAuth  uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
        </div>
    );
};

export default Login;