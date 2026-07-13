importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCecItsQhqKLmeLAqcWTCjNc2krXozcZOQ",
    authDomain: "esp32-painel.firebaseapp.com",
    databaseURL: "https://esp32-painel-default-rtdb.firebaseio.com",
    projectId: "esp32-painel",
    storageBucket: "esp32-painel.firebasestorage.app",
    messagingSenderId: "342570842370",
    appId: "1:342570842370:web:73b122004cff88a901aa1b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "icon.png"
    });
});