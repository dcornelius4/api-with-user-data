const config = {
    apiKey: 'AIzaSyAzJvBvodk0TUwME9FT9AVam6lNJYhqRtc',
    authDomain: 'streamify-2104d.firebaseapp.com',
    databaseURL: 'https://streamify-2104d.firebaseio.com',
    projectId: 'streamify-2104d'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');