<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$page = $_GET['page'] ?? 'home';
$lang = $_GET['lang'] ?? 'ru';

$allowed = ['home', 'services', 'about', 'contacts', 'projects', 'request' ];

if (!in_array($page, $allowed)) {
    $page = 'home';
}
?>

<!DOCTYPE html>
<html lang="<?php echo $lang; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KvaliteetEhitus OÜ</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>

    <div class="logo">
        <a href="index.php?page=home&lang=<?php echo $lang; ?>">
            <img src="img/logo.jpg" alt="KvaliteetEhitus OÜ">
        </a>
    </div>

    <h1>KvaliteetEhitus OÜ</h1>

    <nav>
        <a id="nav-home" href="index.php?page=home&lang=<?php echo $lang; ?>">Главная</a>
        <a id="nav-services" href="index.php?page=services&lang=<?php echo $lang; ?>">Услуги</a>
        <a id="nav-about" href="index.php?page=about&lang=<?php echo $lang; ?>">О компании</a>
        <a id="nav-contacts" href="index.php?page=contacts&lang=<?php echo $lang; ?>">Контакты</a>
        <a id="nav-projects" href="index.php?page=projects&lang=<?php echo $lang; ?>">
            Projektid</a>
        <a id="nav-request" href="index.php?page=request&lang=<?php echo $lang; ?>">Заявка</a>

    </nav>

    <div class="lang-switch">

        <a href="index.php?page=<?php echo $page; ?>&lang=ru">
            <img src="img/ru.png" alt="RU">
        </a>

        <a href="index.php?page=<?php echo $page; ?>&lang=et">
            <img src="img/est.jpg" alt="ET">
        </a>

    </div>

</header>

<main>
    <?php include "pages/$page.php"; ?>
</main>

<footer>
    <p> <?php echo date("Y"); ?> KvaliteetEhitus OÜ</p>

    <p>
        Registrikood: 17257281
    </p>

    <p>
        Aadress: Harju maakond, Tallinn, Lasnamäe linnaosa,
        Linnamäe tee 47-73, 13911
    </p>
</footer>



<script src="script.js"></script>

</body>
</html>