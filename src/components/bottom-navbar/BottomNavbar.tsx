import './bottom-navbar.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import { getLoginGoogleData } from '../../utils/getLoginGoogleData';
import { useNavigate } from 'react-router-dom';
import GoogleButton from '../Button/GoogleButton';

// Props facultative du rendu du bouton Google
type Props = {
    hasGoogleBtn?: boolean;
};

const BottomNavbar = ({ hasGoogleBtn = true }: Props) => {
    // Permet la navigation dans l'app
    const navigate = useNavigate();
    // Gestion de l'état de la connexion
    const [logged, setLogged] = useState(false);

    // Gestion de mise à jours de l'état de la connexion
    useEffect(() => {
        const loginData = getLoginGoogleData();
        if (loginData) setLogged(true);
        else setLogged(false);
    }, []);

    // Gestion de l'affichage de la barre de navigation mobile
    return (
        <div className="bottom-bar">
            <div className="icon">
                <i className="fa-solid fa-list" onClick={() => navigate('/')}></i>
            </div>
            {hasGoogleBtn ? (
                <div className="icon">
                    <GoogleButton />
                </div>
            ) : (
                <div className="icon">
                    <i className={`fa-solid fa-right-${logged ? 'from' : 'to'}-bracket`}></i>
                </div>
            )}
        </div>
    );
};

export default BottomNavbar;
