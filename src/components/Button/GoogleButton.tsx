import React, { FunctionComponent, useEffect, useState } from "react";
import config from "../../config";
import { GoogleLogout, GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { getLoginGoogleData } from "../../utils/getLoginGoogleData";

const GoogleButton: FunctionComponent = () => {
    // Gestion de l'état de la connexion Google
    const [loginData, setLoginData] = useState<string | null>(
        localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')|| '{}') : null,
    );
    
    // Gestion de la réponse de l'API Google, ainsi que la sauvegarde du token dans le localStorage
    const responseGoogle = (googleData: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if ((googleData as GoogleLoginResponse).tokenId) {
            const data = googleData as GoogleLoginResponse;
            setLoginData(data.tokenId);
            localStorage.setItem('loginData', JSON.stringify(data.tokenId));
        }
    }

    // Fonction de déconnection du compte Google
    const logout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null)
    }

    // Gestion des mises à jours de connexion du compte Google
    useEffect(() => {
        const data = getLoginGoogleData();
        if (data) setLoginData(data);
        else setLoginData(null);
    }, [])

    // Gestion de l'affichage du bouton Google
    if (!loginData) {
        return <GoogleLogin 
            clientId={config.auth.google.clientId}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            responseType="code,token"
        />
    } else {
        return (
            <GoogleLogout 
                clientId={config.auth.google.clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
            />
        )
    }

}

export default GoogleButton;