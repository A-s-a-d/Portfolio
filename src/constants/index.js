import {
   C_language,
   CYU,
  git,
  Avady,
  aptihealthWeb,
  linkedIn,
  github,
Altium_Designer,

  IOT_Arduino_PI_InfluxDB,
  
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Étudiant BUT GEII ( Genie Électrique et Informatique Industrielle )",
    icon: CYU,
  },
];

const technologies = [
  {
    name: "C",
    icon: C_language,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Altium_Designer",
    icon: Altium_Designer,
  },
];

const experiences = [
  {
    title: "Stagaire Assistant Ingénieur",
    company_name: "AvadyPool",
    company_website: "https://www.avadypool.com/",
    icon: Avady,
    iconBg: "#FFFFFF",
    date: "Avril 2024  - Fin Juillet 2024",
    points: [
      "Développement(conception, programmation, électronique, modélisation 3D) d'un banc de test pour la vérification des sondes de chlore.(Turboxy)",
      "Conception(conception, programmation, électronique, modélisation 3D) d'un banc de test pour la validation des appareils de commande pour le traitement de l'eau des piscines.",
      "Amélioration d'un banc de test existant (câblage, remplacement de connecteurs, programmation)",
      "Test d'un nouveau circuit d'écran LCD pour un produit.",
    ],
  },
];

const projects = [
  {
    name: " Système de capteur intelligent pour applications IoT",
    description:
      "Développement d’un capteur intelligent mesurant la température et l’humidité, avec transmission des données à un serveur distant via Wi-Fi. Conçu avec une carte Arduino Uno R4 WiFi, ce système embarqué intègre des composants tels que DHT22, PCT2075 et écrans OLED, ainsi que des outils modernes comme Node-RED, InfluxDB et Mosquitto (MQTT). Ce projet allie programmation, électronique et réseaux IoT pour fournir une solution fonctionnelle adaptée aux environnements connectés.",
    tags: [
      {
        name: "Arduino Uno R4 Wifi",
        color: "blue-text-gradient",
      },
      {
        name: "C / C++",
        color: "blue-text-gradient",
      },
      {
        name: "Capteurs :  PCT2075 & DHT22",
        color: "white-text-gradient",
      },
       {
        name: "Écran : OLED 1306 0.96 monochrome I2C 32x64",
        color: "green-text-gradient",
      },
      {
        name: "Écran :  OLED SSD1351 1.5 RGB SPI 128x128",
        color: "green-text-gradient",
      },
      {
        name: "Raspberry Pi 4",
        color: "pink-text-gradient",
      },
{
        name: "Node-Red",
        color: "pink-text-gradient",
      },      {
        name: "MQTT",
        color: "pink-text-gradient",
      },      {
        name: "Influx DB",
        color: "pink-text-gradient",
      },
    ],
    image: IOT_Arduino_PI_InfluxDB,
    hosted_link: "https://github.com/A-s-a-d/IOT_Arduino_Raspberry_PI",
  },
];

const personalInfo = {
  name: "Muhammad Asad",
  email: "asad.19.08.02@gmail.com",
  role: "Étudiant en BUT GEII à l'Université de Cergy-Pontoise",
  about: `.........................................`,
  projectsIntro: `...................................`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/shridharrai/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/shridharrai",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
