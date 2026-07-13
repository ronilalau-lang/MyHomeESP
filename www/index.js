document.addEventListener("deviceready", function () {

    console.log("MyHomeESP iniciado");

    FirebasePlugin.requestPermission(function(hasPermission) {

        if (hasPermission) {
            console.log("Permissão de notificação OK");

            FirebasePlugin.getToken(function(token) {
                console.log("TOKEN FCM:");
                console.log(token);

                // Depois vamos usar esse token no servidor
                localStorage.setItem("fcm_token", token);

            }, function(error) {
                console.error("Erro ao pegar token:", error);
            });

        } else {
            console.log("Permissão negada");
        }

    });


    FirebasePlugin.onMessageReceived(function(message) {

        console.log("Mensagem recebida:", message);

        if (message.tap) {
            console.log("Usuário abriu a notificação");
        }

    }, function(error) {
        console.error("Erro FCM:", error);
    });

});
