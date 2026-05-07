<?php

require_once __DIR__ . '/../PHPMailer/src/Exception.php';
require_once __DIR__ . '/../PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/../PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 🔥 ПРОВЕРКА ОБЯЗАТЕЛЬНЫХ ПОЛЕЙ
    if (
        empty($_POST['name']) ||
        empty($_POST['surname']) ||
        empty($_POST['email']) ||
        empty($_POST['service'])
    ) {
        echo "<p style='color:red;'>Palun täida kõik kohustuslikud väljad!</p>";
        exit;
    }

    $conn = new mysqli(
    "localhost",
    "d132039_kvaliteetehitus",
    "Leto2021_SKi",
    "d132039_kvaliteetehitus"
);

    if ($conn->connect_error) {
        die("Ошибка подключения к базе данных");
    }

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];

    // -------------------------
    // СОХРАНЕНИЕ В БД
    // -------------------------
    $stmt = $conn->prepare("
        INSERT INTO requests (eesnimi, perenimi, email, telefon, teenus)
        VALUES (?, ?, ?, ?, ?)
    ");

    $stmt->bind_param("sssss", $name, $surname, $email, $phone, $service);
    $stmt->execute();

    // -------------------------
    // EMAIL (GMAIL SMTP)
    // -------------------------
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        $mail->Username = 'kirillsats30@gmail.com';
        $mail->Password = 'emtmganguiyzptnc';

        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('kirillsats30@gmail.com', 'KvaliteetEhitus');
        $mail->addAddress('kirillsats30@gmail.com');

        $mail->Subject = "Uus pakkumine veebilehelt KvaliteetEhituselt";

        $mail->Body =
            "Имя: $name\n" .
            "Фамилия: $surname\n" .
            "Email: $email\n" .
            "Телефон: $phone\n" .
            "Услуга: $service";

        $mail->send();

        echo "<h3>Päring on saadetud!</h3>";
        exit;

    } catch (Exception $e) {
        echo "<p style='color:red;'>Viga saatmisel!</p>";
        exit;
    }
}
?>

<section class="request-section">

    <div class="request-content">

        <div class="request-left">

            <h2 id="request-title"></h2>

            <p class="request-subtitle" id="request-subtitle"></p>

            <form id="request-form">

                <input type="text" id="input-name" name="name" required>

                <input type="text" id="input-surname" name="surname" required>

                <input type="email" id="input-email" name="email" required>

                <input type="text" id="input-phone" name="phone">

                <select id="input-service" name="service" required>
                    <option value="" id="service-default"></option>
                    <option id="service1"></option>
                    <option id="service2"></option>
                    <option id="service3"></option>
                </select>

                <button type="submit" id="submit-btn"></button>

                <div id="form-message"></div>

            </form>

        </div>

        <div class="request-right">
            <img src="img/ehitus.jpg" alt="Construction">
        </div>

    </div>

</section>