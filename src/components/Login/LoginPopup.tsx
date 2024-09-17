import { CredentialResponse, GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { User } from "../../models/User"
import { Profile } from "../../models/Profile"
import { jwtDecode } from 'jwt-decode';

const LoginPopup = () => {
    const [ user, setUser ] = useState<CredentialResponse | undefined>();
    const [ profile, setProfile ] = useState<Profile | undefined>();
    useEffect(
        () => {
            if (user) {
                const decCred: Profile = jwtDecode(user.credential == undefined ? "" : user.credential)
                setProfile(decCred)
            }
        },
        [ user ]
    );
    const responseMessage = (response: any) => {
        console.log(response);
    };
    const errorMessage = () => {
        console.log("Login failed");
    };
    const logOut = () => {
        googleLogout();
        setProfile(undefined);
    };
    return (
        <>
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <Popup trigger={<button>Sign in</button>} position="bottom center">
                    <div className="g-signin2" data-onsuccess="onSignIn">
                        <GoogleLogin onSuccess={(res) => setUser(res)} onError={errorMessage} />
                    </div>
                </Popup>
            )}
        </>
    )
}

export default LoginPopup