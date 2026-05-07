const translations = {
    ru: {
        navHome: "Главная",
        navServices: "Услуги",
        navAbout: "О компании",
        navContacts: "Контакты",
        navRequest: "Получить предложение",

        welcomeTitle: "Добро пожаловать!",
        welcomeText: "Мы строим дома, ремонтируем квартиры и создаём комфорт для вас.",

        servicesTitle: "Наши услуги",
        serviceBtn: "Подробнее",

        servicesList: [
            "Строительство домов (цена по договоренности)",
            "Ремонт квартир (цена по договоренности)",
            "Отделочные работы (цена по договоренности)"
        ],

        repairTitle: "Ремонт:",

        repairList: [
            "Косметический — от 130€",
            "Капитальный — от 270€",
            "Дизайнерский — от 450€"
        ],

        card1Title: "Строительство домов",
        card1Text: "От фундамента до крыши",

        card2Title: "Ремонт квартир",
        card2Text: "Качественно и быстро",

        card3Title: "Отделка",
        card3Text: "Дизайн и комфорт",

        aboutTitle: "О компании",

        aboutText:
            "KvaliteetEhitus OÜ — строительная компания, которая занимается строительством и ремонтом квартир и домов.",

        aboutCard1Title: "Опыт",
        aboutCard1Text: "Более 10 лет в строительстве",

        aboutCard2Title: "Качество",
        aboutCard2Text: "Используем только проверенные материалы",

        aboutCard3Title: "Надёжность",
        aboutCard3Text: "Работаем по договору и соблюдаем сроки",

        contactsTitle: "Контакты",

        emailLabel: "📧 Почта:",
        phoneLabel: "📞 Телефон:",
        phoneTitle: "Телефон",

        navProjects: "Проекты",

        projectsTitle: "Наши проекты",

        project1Title: "Строительство дома",
        project2Title: "Ремонт квартиры",
        project3Title: "Отделка",
        project4Title: "Современный интерьер",

        requestTitle: "Получить предложение",

        inputName: "Имя",
        inputSurname: "Фамилия",
        inputEmail: "Email",
        inputPhone: "Телефон (необязательно)",

        serviceDefault: "Выберите услугу",
        service1: "Строительство",
        service2: "Ремонт",
        service3: "Отделка",

        submitBtn: "Отправить",

        requestSubtitle:
            "Мы ответим на ваше сообщение в течение 1 рабочего дня"
    },

    et: {
        navHome: "Avaleht",
        navServices: "Teenused",
        navAbout: "Meist",
        navContacts: "Kontaktid",
        navRequest: "Küsi pakkumist",

        welcomeTitle: "Tere tulemast!",
        welcomeText:
            "Me ehitame maju, remondime kortereid ja loome mugavust.",

        servicesTitle: "Meie teenused",

        servicesList: [
            "Majade ehitus (hind kokkuleppel)",
            "Korterite remont (hind kokkuleppel)",
            "Viimistlustööd (hind kokkuleppel)"
        ],

        repairTitle: "Remont:",

        repairList: [
            "Kosmeetiline — alates 130€",
            "Kapitaalne — alates 270€",
            "Disain — alates 450€"
        ],
        serviceBtn: "Loe rohkem",
        card1Title: "Majade ehitus",
        card1Text: "Vundamendist katuseni",

        card2Title: "Korterite remont",
        card2Text: "Kiire ja kvaliteetne",

        card3Title: "Viimistlus",
        card3Text: "Disain ja mugavus",

        aboutTitle: "Meist",

        aboutText:
            "KvaliteetEhitus OÜ on ehitusettevõte, mis tegeleb majade ja korterite ehituse ja remondiga.",

        aboutCard1Title: "Kogemus",
        aboutCard1Text: "Üle 10 aasta ehituses",

        aboutCard2Title: "Kvaliteet",
        aboutCard2Text: "Kasutame ainult usaldusväärseid materjale",

        aboutCard3Title: "Usaldusväärsus",
        aboutCard3Text: "Töötame lepingu alusel ja järgime tähtaegu",

        contactsTitle: "Kontaktid",

        emailLabel: "📧 Email:",
        phoneLabel: "📞 Telefon:",
        phoneTitle: "Telefon",

        navProjects: "Projektid",

        projectsTitle: "Meie projektid",

        project1Title: "Maja ehitus",
        project2Title: "Korteri remont",
        project3Title: "Viimistlus",
        project4Title: "Kaasaegne sisekujundus",

        requestTitle: "Küsi pakkumist",

        inputName: "Eesnimi",
        inputSurname: "Perenimi",
        inputEmail: "Email",
        inputPhone: "Telefon (valikuline)",

        serviceDefault: "Vali teenus",
        service1: "Ehitamine",
        service2: "Remont",
        service3: "Viimistlus",

        submitBtn: "Saada",

        requestSubtitle:
            "Vastame Teie kirjale 1 tööpäeva jooksul"
    }
};

function setLang(lang) {

    const t = translations[lang] || translations.ru;

    const setText = (id, value) => {
        const el = document.getElementById(id);

        if (el) {
            el.textContent = value;
        }
    };

    const setPlaceholder = (id, value) => {
        const el = document.getElementById(id);

        if (el) {
            el.placeholder = value;
        }
    };

    const updateList = (id, items) => {

        const ul = document.getElementById(id);

        if (!ul || !items) return;

        ul.innerHTML = "";

        items.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item;

            ul.appendChild(li);
        });
    };

    // MENU
    setText("nav-home", t.navHome);
    setText("nav-services", t.navServices);
    setText("nav-about", t.navAbout);
    setText("nav-contacts", t.navContacts);
    setText("nav-request", t.navRequest);

    // HOME
    setText("welcome-title", t.welcomeTitle);
    setText("welcome-text", t.welcomeText);

    // SERVICES
    setText("services-title", t.servicesTitle);
    setText("repair-title", t.repairTitle);

    updateList("services-list", t.servicesList);
    updateList("repair-list", t.repairList);
    setText("service-btn1", t.serviceBtn);
    setText("service-btn2", t.serviceBtn);
    setText("service-btn3", t.serviceBtn);

    // CARDS
    setText("card1-title", t.card1Title);
    setText("card1-text", t.card1Text);

    setText("card2-title", t.card2Title);
    setText("card2-text", t.card2Text);

    setText("card3-title", t.card3Title);
    setText("card3-text", t.card3Text);

    // ABOUT
    setText("about-title", t.aboutTitle);
    setText("about-text", t.aboutText);

    setText("about-card1-title", t.aboutCard1Title);
    setText("about-card1-text", t.aboutCard1Text);

    setText("about-card2-title", t.aboutCard2Title);
    setText("about-card2-text", t.aboutCard2Text);

    setText("about-card3-title", t.aboutCard3Title);
    setText("about-card3-text", t.aboutCard3Text);

    // CONTACTS
    setText("contacts-title", t.contactsTitle);
    setText("email-label", t.emailLabel);
    setText("phone-label", t.phoneLabel);
    setText("phone-title", t.phoneTitle);

    // PROJECTS
    setText("nav-projects", t.navProjects);

    setText("projects-title", t.projectsTitle);

    setText("project1-title", t.project1Title);
    setText("project2-title", t.project2Title);
    setText("project3-title", t.project3Title);
    setText("project4-title", t.project4Title);

    // FORM
    setText("request-title", t.requestTitle);

    setPlaceholder("input-name", t.inputName);
    setPlaceholder("input-surname", t.inputSurname);
    setPlaceholder("input-email", t.inputEmail);
    setPlaceholder("input-phone", t.inputPhone);

    setText("service-default", t.serviceDefault);
    setText("service1", t.service1);
    setText("service2", t.service2);
    setText("service3", t.service3);

    setText("submit-btn", t.submitBtn);

    setText("request-subtitle", t.requestSubtitle);
}

// SLIDER
function startSlider() {

    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;

    let current = 0;

    slides[current].style.opacity = "1";

    setInterval(() => {

        slides[current].style.opacity = "0";

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        slides[current].style.opacity = "1";

    }, 3000);
}

// START
document.addEventListener("DOMContentLoaded", () => {

    // LANGUAGE
    const urlParams = new URLSearchParams(window.location.search);

    let lang = urlParams.get("lang") || "ru";

    setLang(lang);

    // SLIDER
    startSlider();

    // FORM
    const form = document.getElementById("request-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const formData = new FormData(form);

            fetch("pages/request.php", {
                method: "POST",
                body: formData
            })

                .then(res => res.text())

                .then(data => {

                    const message = document.getElementById("form-message");

                    if (message) {
                        message.innerHTML = data;
                    }

                    form.reset();
                })

                .catch(() => {

                    const message = document.getElementById("form-message");

                    if (message) {
                        message.innerHTML = "Ошибка отправки!";
                    }
                });
        });
    }
});
