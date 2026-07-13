// index.js
const admin = require("firebase-admin");
const path = require("path");

// Caminho para o JSON do Firebase Admin
const serviceAccount = require(path.join(__dirname, "SEU_JSON_AQUI.json"));

// Inicializa Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Token do dispositivo (gerado pelo FCM Web ou App)
const DEVICE_TOKEN = "COLE_AQUI_SEU_TOKEN";

// Mensagem que será enviada
const message = {
  notification: {
    title: "ESP32",
    body: "Notificação enviada com sucesso!"
  },
  token: DEVICE_TOKEN
};

// Função para enviar notificação
async function enviarNotificacao() {
  try {
    const response = await admin.messaging().send(message);
    console.log("✅ Notificação enviada:", response);
  } catch (error) {
    console.error("❌ Erro ao enviar notificação:", error);
  }
}

// Executa
enviarNotificacao();