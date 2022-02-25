// Récupération du Login Google depuis le LocalStorage
export const getLoginGoogleData = (): string | null => {
    const loginData = localStorage.getItem('loginData');
    if (loginData) return loginData;
    else return null;
}
