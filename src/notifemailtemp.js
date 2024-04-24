
const notificationEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Notificación</title>
<style>
  body { font-family: Arial, sans-serif; }
  .container {
    width: 100%;
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f3f3f3;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .header {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    text-align: center;
  }
  .content {
    margin-top: 20px;
  }
  .footer {
    margin-top: 20px;
    text-align: center;
    font-size: 0.8em;
  }
  .button {
    background-color: #008CBA;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display:inline-block;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>¡Tienes una nueva notificación!</h1>
    </div>
    <div class="content">
      <p>Este es un mensaje de notificación para informarte sobre las últimas novedades.</p>
      <a href="https://ejemplo.com" class="button">Más Información</a>
    </div>
    <div class="footer">
      <p>Si no deseas recibir estas notificaciones, por favor <a href="https://ejemplo.com/unsubscribe">cancela tu suscripción aquí</a>.</p>
    </div>
  </div>
</body>
</html>
`;

module.exports = notificationEmailTemplate;
