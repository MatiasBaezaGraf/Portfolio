import { isAbsolute } from "path";

const translations = {
    //Textos en inglés
    "en-UK": {
        navbar: {
            index: "Home",
            info: "About",
            projects: "Projects",
            contact: "Contact",
        },
        index: {
            title: "Software Developer",
            heading:
                "Hello there! I was born, raised and currently based in Argentina. In December I become a Systems Engineer and I'm passionate for software development and always willing to learn new ways to do so.",
            skill1: "In the last 3 years, I have fully developed and took part in mutiple web applications.",
            skill2: "As an almost Systems Engineer, problem solving is one of my strengths.",
            skill3: "I'm versatile and can efficiently work either by myself or as a part of a team.",
            skill4: "I'm a fast learner, so acquiring new skills to work with fits with me.",
            skill5: "I love designing and creating user friendly, great looking and seamless apps.",
            footing_1: "You can learn more about me or download my resume.",
            footing_2: "about me",
            footing_3: "or download my resume.",
            pdf_button: "Resume",
        },
        info: {
            main_title: "About Me",
            about_p1:
                "I was born in Argentina in 1999, in a family where english is almost like a second language. Since my childhood I have been attracted to technology. I love video games and always wanted to know how on earth a metal box allowed me to play them. I have always been very curious, and always wanted to understand how things worked.",
            about_p2:
                "As I grew up, so did my interest in tech, so I decided to study a tech-oriented carreer. When I turned 18, I decided to study Systems Engineering. During my student years I discovered that what fascinated me the most was software development, so I began to delve into the subject on my own, learning various technologies in addition to the ones the carreer provided me. On top of that, becoming an Engineer endowed me with several soft skills. My goal is to keep learning and growing to become a great professional and even better human being.",
            skills_title: "Soft Skills",
            skill1: "Problem resolution and logical thinking.",
            skill1_p:
                "Having studied engineering endowed me with the ability to solve any type of problems in a creative and logical way.",
            skill2: "Communication in english and spanish.",
            skill2_p:
                "Even though I'm Argentinian, I grew up with English as my second native langunage, therefore I have excellent understanding and communication skills with it.",
            skill3: "Team or invidual work, always effectively.",
            skill3_p:
                "During my studies and work, I have learned to work with many people in many different ways and always achieve efectiveness.",
            skill4: "Adaptability, flexiblilty and quick learning.",
            skill4_p:
                "Throughout my experience, several times I had to learn new technologies or work in different ways that I was not used to, which gave me the ability to easily adapt to the needs.",
            skill5: "Patience.",
            skill5_p:
                "Coding and especially debugging can be harsh sometimes, especially when you can't find out what's wrong. But there's always a solution, and the way to reach it is being patient and not giving up.",
            technologies_title: "Technologies",
            technologies_p_1:
                "Here is a list of all the technologies I work with. Of course I have more knowledge with some than with others, but I love learning new things so I can adapt to what is required of me. My preferred ones are",
            technologies_p_2: "Next JS and React,",
            technologies_p_3: "technologies with which this page is built.",
        },
        contact: {
            title: "Let's get in touch!",
            name_placeholder: "Name...",
            email_placeholder: "Email...",
            message_placeholder: "Message...",
            sent_message:
                "Your message has been sent successfully! Thanks for contacting me!",
            button: "Send",
        },
        projects: {
            title: "My projects",
            project_1_description:
                "Weather forecast website made to learn Flask",
            project_2_description:
                "Website developed to easily verify the validity of the UAP student certificates",
            project_3_description: "Simple expense tracker web app",
            project_4_description:
                "Web app for the UAP students to self-manage their student records",
            project_5_description:
                "Mobile Android app used to follow the monthly evolution of some economic indicators",
            project_6_description:
                "Web app made for stock control of a local shop",
        },
        project1: {
            title: "Weather",
            info_p1_1:
                "This simple app consists of a form that makes requests to two Openweathermap APIs in order to get the current daily and hourly forecasts and some other weather details of locations all around the globe and depending on the moment of the day of the searched location, the background changes. With this project I learnt how to use",
            info_p1_2: "Flask, a Python Web framework.",
        },
        project2: {
            title: "UAP Certificados",
            info_p1:
                "This web app was built for the UAP students, to easily verify the validity of their Student Certificates, and for the UAP itself, to prevent forgery of certificates. It consists of a form in which you put a certificate's unique code, and it shows, if it exists, to who it belongs, if it is currently valid and it's validity period. It also provides easy QR validation. If you scan the certificate's QR code, it redirects you to a page with all the mentioned information.",
            info_p2_1:
                "The app talks directly with the database, which runs on ",
            info_p2_2: "PostgreSQL, ",
            info_p2_3:
                "to retrieve all the required information related to the provided certificate code. It is protected with ",
            info_p2_4: "Nginx, ",
            info_p2_5: "in order to counter DDOS attacks.",
        },
        project3: {
            title: "Wallet",
            info_p1_1: "With this web",
            info_p1_2: "Single Page Application",
            info_p1_3:
                "you can easily calculate your monthly expenses in total and divided by category. You can create as many categories and expenses as you want.",
            info_p2_1: "The front end was built with ",
            info_p2_2: "React ",
            info_p2_3: "along with ",
            info_p2_4: "Typescript ",
            info_p2_5: "in conjuntion with ",
            info_p2_6: "Tailwind CSS ",
            info_p2_7:
                "to have a fully responsive design and avoid having stylesheets everywhere.",
            info_p3_1: "The backend functionality was developed with the ",
            info_p3_2: "Python ",
            info_p3_3: "framework, ",
            info_p3_4: "Django Rest Framework. ",
            info_p3_5:
                "This last one was chosen for it's simplicity, felxibility and powerful serializer.",
        },
        project4: {
            title: "UAP Constancias",
            info_p1:
                "This functionality is part of the larger app, UAP Student Portal. It gives students a way to self-manage the process of creating a student and admission certificates in an instant, replacing a process that required paperwork and time. It includes the option to download the document in PDF and an easy QR validation in conjuntion with the app UAP Certificados, to check it's validity.",
            info_p2_1:
                "The app is connected directly to the organization's database, which runs on ",
            info_p2_2: "PostgreSQL, ",
            info_p2_3:
                "so it can easily retrieve the required data to tell if a student is eligible to get a certificate. Since the database is enormous, this web app takes benefit from the ",
            info_p2_4: "Rails Object Relational Mapping, ",
            info_p2_5: "Active Record, ",
            info_p2_6:
                "to define the main models. However, I had to design some queries to get specific data that was needed. For the visuals, I took advantage of ",
            info_p2_7: "Bootstrap ",
            info_p2_8:
                "to match the design with the one used in the Student Portal.",
        },
        project5: {
            title: "Finances",
            info_p1_1:
                "This mobile Android app was developed as a final project for a university subject. It's main purpose is to follow the evolution of the Argentine general Consumer Price Index and it's variation. The data comes from a government open API. It uses Google's ",
            info_p1_2: "Material Design Theme ",
            info_p1_3:
                "and consists of a pair of graph charts and a table with the detailed information shown in the charts.",
        },
        project6: {
            title: "AllPlast",
            info_p1:
                "This web app was built for a local disposable plastic supplies shop, as a stock control tool. It allows to create categories and products within them. It also keeps track of the clients, detailed sales and supplier shipments. The amount of stock available is shown in number but also as a status bar that changes color depending on the remaining units of each product.",
            info_p2_1: "As it was built with ",
            info_p2_2: "Ruby on Rails, ",
            info_p2_3: "this app takes advantage of the ",
            info_p2_4: "Active Record ",
            info_p2_5: "Object Relational Mapping ",
            info_p2_6:
                "for fast, simple and secure interactions with the database, which for the moment runs on ",
            info_p2_7: "SQLite. ",
            info_p2_8:
                "I developed this project alongside with Santiago Paul and Jonathan Amse.",
        },
    },

    //Textos en español
    "es-ES": {
        navbar: {
            index: "Inicio",
            info: "Acerca",
            projects: "Proyectos",
            contact: "Contacto",
        },
        index: {
            title: "Desarrollador de Software",
            heading:
                "¡Buenos días! Nací, me crié y actualmente resido en Argentina. En diciembre me recibo de Ingeniero en Sistemas. Soy un apasionado por el desarrollo de software y siempre estoy dispuesto a aprender nuevas maneras de hacerlo.",
            skill1: "En los ultimos 3 años participé en el desarrollo total y parcial de multiples aplicaciones.",
            skill2: "Como casi Ingeniero, la resolución de problemas es una de mis fortalezas.",
            skill3: "Soy versátil y puedo trabajar en equipo o por mi cuenta, eficientemente.",
            skill4: "Aprendo rápido, por lo que adquirir nuevas habilidades no se me hace difícil.",
            skill5: "Me encanta crear aplicaciones fáciles de usar, de gran apariencia y funcionamiento.",
            footing_1: "Pueden aprender mas",
            footing_2: "acerca de mi",
            footing_3: "o descargar mi CV.",
            pdf_button: "Currículum",
        },
        info: {
            main_title: "Sobre Mí",
            about_p1:
                "Nací en Argentina en 1999, en una familia donde el inglés es como una segunda lengua materna. Desde mi niñez me atrajo la tecnología. Me encantan los videojuegos y siempre me pregunté como era posible que provengan de una simple caja de metal con luces y botones. Siempre fui muy curioso y me gusta saber como funciona todo.",
            about_p2:
                "Mientras yo crecía, tambien lo hacía mi interés por la tecnología, por lo que tome la decisión de estudiar una carrera orientada para ese lado. Cuando termine mis estudios secundarios, con tan solo 18 años decidí estudiar Ingeniería en Sistemas. Durante mis años como estudiante descubrí que lo que más me apasionaba era el desarrollo de software, así que empecé a investigar más por mi cuenta. De esta manera, aprendí varias tecnologías además de las que me fueron enseñadas en la carrera. Pero el ser Ingeniero es más que sabes diferentes lenguajes de programación. Estudiar Ingeniería me dotó de varias habilidades blandas. Mi objetivo es seguir aprendiendo y creciendo para volverme un gran profesional y persona.",
            skills_title: "Competencias",
            skill1: "Resolución de problemas y pensamiento lógico.",
            skill1_p:
                "El haber estudiado Ingeniería me dotó con la capacidad de resolver cualquier tipo de problema de manera creativa y lógica.",
            skill2: "Comunicación en inglés y español",
            skill2_p:
                "Al haber crecido rodeado del inglés, tengo mucha comprensión y capacidad de comunicación con el mismo.",
            skill3: "Trabajo en equipo o individual, siempre eficientemente.",
            skill3_p:
                "A lo largo de mis estudios tuve que trabajar con mucha gente, por lo que aprendí a adaptarme a los demás y obtener buenos resultados",
            skill4: "Adaptabilidad, flexibilidad y rápido aprendizaje.",
            skill4_p:
                "A lo largo de mi experiencia tuve que aprender nuevos lenguajes o a trabajar de maneras a las cuales no estaba acostumbrado, lo que me dio la capacidad de adaptarme a las necesidades fácilmente.",
            skill5: "Paciencia.",
            skill5_p:
                "La programación y en especial la depuración pueden ser difíciles por momentos, pero siempre hay una solución y la manera de alcanzarla es ser paciente y no rendirse.",
            technologies_title: "Tecnologías",
            technologies_p_1:
                "A continuación, hay una lista de todas las tecnologías que domino. Por supuesto que tengo mas experiencia y conocimiento con algunas que con otras, sin embargo amo aprender cosas nuevas, por lo que puedo aprender lo que me sea requerido. Mis tecnologías preferidas para desarrollar son",
            technologies_p_2: "Next JS y React,",
            technologies_p_3: "con las cuales cree este sitio.",
        },
        contact: {
            title: "¡Pongámonos en contacto!",
            name_placeholder: "Nombre...",
            email_placeholder: "Email...",
            message_placeholder: "Mensaje...",
            sent_message:
                "Tu mensaje se envió satisfactoriamente! Gracias por contactarme!",
            button: "Enviar",
        },
        projects: {
            title: "Mis proyectos",
            project_1_description:
                "Sitio web de pronostico del clima hecho para aprender Flask",
            project_2_description:
                "Aplicación web creada para validar las constancias de alumno regular y de admisión de la UAP",
            project_3_description:
                "Aplicación web simple que sirve para llevar registro de los gastos",
            project_4_description:
                "Aplicación web desarrollada para que los alumnos de la UAP gestionen sus constancias de alumno regular y de admisión",
            project_5_description:
                "Aplicación para Android que sirve para seguir la evolución mensual de algunos indicadores económicos",
            project_6_description:
                "Aplicación web hecho para el control de stock de un negocio local",
        },
        project1: {
            title: "Weather",
            info_p1_1:
                "Esta aplicación simple consta de un formulario que hace peticiones HTTP a dos APIs de Openweathermap, para asi obtener los pronósticos diarios, horarios y algunos datos mas del clima actual de miles localidades alrededor del planeta. Con este proyecto aprendí ",
            info_p1_2: "Flask, un framework web de Python.",
        },
        project2: {
            title: "UAP Certificados",
            info_p1:
                "Esta aplicación web fue desarrollada para que los alumnos de la UAP puedan verificar la validez de sus constancias de alumno regular de manera rápida y sencilla, y para la universidad misma, para evitar la falsificación de dichos documentos. Consiste de un formulario, en el cual se ingresa el código único de certificado que queres verificar, y te muestra si la constancia existe, a quien pertenece, si es actualmente válida y su período de validez. También provee verificación por código QR. Si se escanea el QR que figura en la constancia, se hace una redirección a una página con toda la información mencionada anteriormente.",
            info_p2_1:
                "La app habla directamente con la base de datos, que corre en ",
            info_p2_2: "PostgreSQL, ",
            info_p2_3:
                "para obtener toda la información requerida relacionada con el código provisto. La misma está protegida con ",
            info_p2_4: "Nginx, ",
            info_p2_5:
                "para limitar el número de peticiones por segundo que puede recibir el servidor y de esa manera contrarrestar los ataques DDOS.",
        },
        project3: {
            title: "Wallet",
            info_p1_1: "Con esta ",
            info_p1_2: "SPA ",
            info_p1_3:
                "(Single Page Application) podes calcular tus gastos mensuales dividido por categoría o en total, muy fácilmente. Podes crear todas las categorías y expensas que quieras.",
            info_p2_1: "El font end fue desarrollado con ",
            info_p2_2: "React ",
            info_p2_3: "junto con ",
            info_p2_4: "Typescript. ",
            info_p2_5: "Además, usé ",
            info_p2_6: "Tailwind CSS ",
            info_p2_7:
                "para que la página tenga un diseño responsivo y no haya muchas hojas de estilo dando vueltas por el proyecto.",
            info_p3_1: "El backend es una API REST desarrollada con ",
            info_p3_2: "DRF ",
            info_p3_3: "(Django Rest Framework) un framework web de ",
            info_p3_4: "Python, ",
            info_p3_5:
                "por su simplicidad, flexibilidad y poderoso serializador.",
        },
        project4: {
            title: "UAP Constancias",
            info_p1:
                "Esta funcionalidad es parte de la aplicación web Portal del Alumno de la UAP. Le provee a los estudiantes una manera de autogestionar la creación una constancia de alumno regular o de admisión en tan solo un instante. Incluye la opción para descargar el documento en formato PDF y de validar las constancias con un código QR, en conjunto con la aplicación UAP Certificados.",
            info_p2_1:
                "La app está conectada directamente con la BD (Base de Datos) de la organización, la cual corre en ",
            info_p2_2: "PostgreSQL, ",
            info_p2_3:
                " de manera que puede obtener fácilmente los datos necesarios para decir si un estudiante es elegible o no para crear una constancia. Como la BD es enorme, esta funcionalidad aprovecha el ",
            info_p2_4: "ORM (Object Relational Mapping) de Rails, ",
            info_p2_5: "Active Record, ",
            info_p2_6:
                "para deifnir los modelos principales. Sin embargo, tuve que diseñar algunas consultas específicas para obtener ciertos datos necesarios. Para el aspecto de las páginas que cree utilicé ",
            info_p2_7: "Bootstrap, ",
            info_p2_8:
                "que me provee de ciertas clases CSS predefinidas para simplificar y casi que eliminar el uso de hojas de estilo",
        },
        project5: {
            title: "Finances",
            info_p1_1:
                "Esta aplicación para Android fue desarrollada como proyecto final de una materia de la universidad. Su propósito es podes seguir de cerca la evolución mensual del Índice de Precios al Consumidor (y su variación) de Argentina. Los datos provienen de una API de libre utilización que provee el gobierno. Para el aspecto utiliza ",
            info_p1_2: "Material Design, ",
            info_p1_3:
                "el lenguaje de diseño de Goolge. La app consiste de un par de gráficos de línea y una tabla que muestra los detalladamente los datos de los gráficos.",
        },
        project6: {
            title: "AllPlast",
            info_p1:
                "Esta aplicación web fue creada para un negocio local de suministros de plástico deshechables. Permite la creación de categorías y productos dentro de las mismas. También lleva registro de los clientes, las ventas y su detalle y los cargamentos de los proveedores. La cantidad de stock disponible se muestra numéricamente y como una barra de estado, que cambia de color dependiendo de la cantidad de unidades restantes de cada producto.",
            info_p2_1: "Como fue desarrollada con ",
            info_p2_2: "Ruby on Rails, ",
            info_p2_3: "esta aplicación saca provecho de ",
            info_p2_4: "Active Record, ",
            info_p2_5: "su ORM. ",
            info_p2_6:
                "Este permite interacciónes rápidas, simples y seguras con la base de datos, la cual actualmente corre en ",
            info_p2_7: "SQLite. ",
            info_p2_8:
                "Desarrollé este proyecto junto con Santiago Paul y Jonathan Amse.",
        },
    },
};

export default translations;
