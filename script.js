
/* Funtion for Dark - Light mode */
const body = document.querySelector("body");
const mode = document.querySelector(".mode");
const switchMode = document.querySelector(".switch-mode");

mode.addEventListener("click", () => {
    if(body.getAttribute ("data-mode") === "dark") {

        body.setAttribute ("data-mode", "light") ;
        switchMode.setAttribute("style", "transform: translatex(28px)");
        iconstatus.setAttribute("style", "padding-left: 5px");
        document.getElementById("iconstatus").innerHTML = "🌛";
    }else{
        
        body.setAttribute ("data-mode", "dark");
        switchMode.setAttribute("style", "transform: translatex(0px)");
        iconstatus.setAttribute("style", "padding-left: 33px");
        document.getElementById("iconstatus").innerHTML = "🌞";
        
    }       
})
/* Funtion for Dark - Light mode */


/*Funtion for Copy into Clipboard*/
var Code = document.getElementById("Code");
Bcopy.onclick = function(){
    navigator.clipboard.writeText(Code.innerText);
    document.getElementById("Bcopy").innerHTML = "✔️";
    setTimeout(function(){Bcopy.innerHTML = "📋";}, 1000)
}
/*Funtion for Copy into Clipboard*/



const courses = [
    {
        CourseorCertification: "Business Analysis for Data Science",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Aug-2022",
        IDCredential: "f0b16657-0906-4b7b-afe8-e6b322668821",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/2069-negocios-data-science/diploma/detalle/"
    },
    {
        CourseorCertification: "Object Oriented Programming Course: OOP",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Aug-2022",
        IDCredential: "79dd83b9-73c5-447b-b3ad-841c41cc3d88",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1474-oop/diploma/detalle/"
    },
    {
        CourseorCertification: "Introduction to the roles of Data Science and Artificial Intelligence",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Aug-2022",
        IDCredential: "e220cdd9-dd54-4c94-b3e3-e810298daec6",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/2807-aprender-data-ia/diploma/detalle/"
    },
    {
        CourseorCertification: "Video Game Testing",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Jul-2022",
        IDCredential: "e0439ccf-c9eb-4b96-ad2b-8ea72021bdd3",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1349-testing-videojuegos/diploma/detalle/"
    },
    {
        CourseorCertification: "Video Game Design",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Jul-2022",
        IDCredential: "622ab979-2f49-4e6a-b456-2d618e53e172",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1783-diseno-videojuegos/diploma/detalle/"
    },
    {
        CourseorCertification: "Soft Skills Competencies",
        InstitutionName: "Accenture",
        InstitutionUrl: "https://www.accenture.com/ar-es",
        Date: "Jul-2022",
        IDCredential: "-",
        LinkCredential: "-"
    },
    {
        CourseorCertification: "Automate the Boring Stuff with Python Programming",
        InstitutionName: "Udemy",
        InstitutionUrl: "https://www.udemy.com/",
        Date: "Jun-2022",
        IDCredential: "UC-0fbcdb1b-1df5-47a4-9b5f-1aaf0234be20",
        LinkCredential: "https://ude.my/UC-0fbcdb1b-1df5-47a4-9b5f-1aaf0234be20"
    },
    {
        CourseorCertification: "JavaScript Practical Course",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Mar-2022",
        IDCredential: "5cfc12a4-be78-48a3-a40b-f5f38fa0ba27",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/2327-javascript-practico/diploma/detalle/"
    },
    {
        CourseorCertification: "JavaScript Frameworks and Libraries",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Mar-2022",
        IDCredential: "489435fb-aa17-4882-aa76-779574263ea5",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/2239-frameworks-javascript/diploma/detalle/"
    },
    {
        CourseorCertification: "JavaScript Engine (V8) and Browser",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Mar-2022",
        IDCredential: "aee4bf3a-7208-49c8-9711-26f9de91f87a",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1798-javascript-navegador/diploma/detalle/"
    },
    {
        CourseorCertification: "Software Testing Basics",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Feb-2022",
        IDCredential: "6e1325c2-64ba-4186-b04f-b96e144a2bd4",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1421-pruebas-software/diploma/detalle/"
    },
    {
        CourseorCertification: "Full Stack in Python",
        InstitutionName: "Ministries of Education of BA, Argentina",
        InstitutionUrl: "https://www.buenosaires.gob.ar/educacion/codocodo/el-programa",
        Date: "Oct-2021",
        IDCredential: "-",
        LinkCredential: "-"
    },
    {
        CourseorCertification: "JavaScript Basic",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Apr-2021",
        IDCredential: "e2f96d75-aad7-41f3-9f3d-8b9992ef0040",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1814-basico-javascript/diploma/detalle/"
    },
    {
        CourseorCertification: "Postman Basic",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Apr-2021",
        IDCredential: "364007c5-373a-477e-81d1-2456f5088f60",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1765-postman/diploma/detalle/"
    },
    {
        CourseorCertification: "Frontend Developer Basics",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Apr-2021",
        IDCredential: "f63bc128-b922-4650-ade1-74c3c1cb68cd",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1640-frontend-developer/diploma/detalle/"
    },
    {
        CourseorCertification: "HTML and CSS Practical",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Apr-2021",
        IDCredential: "5ad97e58-6167-4f99-a228-5e93e2f5fc8f",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1758-html-practico/diploma/detalle/"
    },
    {
        CourseorCertification: "Git and GitHub Professional",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Mar-2021",
        IDCredential: "11826c24-0289-446c-88bc-800330cc2b66",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1557-git-github/diploma/detalle/"
    },
    {
        CourseorCertification: "CodeStream Modern Development Flow",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Mar-2021",
        IDCredential: "6f57623d-48bd-4cfa-8b12-7d4974c741d4",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/2157-desarrollo-moderno-codestream/diploma/detalle/"
    },
    {
        CourseorCertification: "Software Quality Assurance",
        InstitutionName: "TestDome",
        InstitutionUrl: "https://www.testdome.com/",
        Date: "Mar-2021",
        IDCredential: "61bb914518a342c4b826628ff3c3af1a",
        LinkCredential: "https://app.testdome.com/cert/61bb914518a342c4b826628ff3c3af1a"
    },
    {
        CourseorCertification: "HTML5 and CSS3",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Mar-2021",
        IDCredential: "4bab1b7f-8b63-47a4-a2ea-2158a956010a",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/2008-html-css/diploma/detalle/"
    },
    {
        CourseorCertification: "Introduction to Selenium with Python",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Mar-2021",
        IDCredential: "561ac4dc-5535-4699-acf9-557848fe385f",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/1927-intro-selenium/diploma/detalle/"
    },
    {
        CourseorCertification: "Prework: Windows Development Environment Setup",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Feb-2021",
        IDCredential: "b0bffb88-0578-494d-90cb-a9f81365921b",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/2042-course/diploma/detalle/"
    },
    {
        CourseorCertification: "Introduction to the Web: History and Operation of the Internet",
        InstitutionName: "Platzi",
        InstitutionUrl: "https://platzi.com/",
        Date: "Feb-2021",
        IDCredential: "934db196-d280-4f58-a583-220abdd0acb6",
        LinkCredential: "https://platzi.com/p/fabricio.zubieta/curso/2053-introweb/diploma/detalle/"
    },
    {
        CourseorCertification: "Introduction to Web Development: HTML and CSS Part II",
        InstitutionName: "Google Actívate",
        InstitutionUrl: "https://learndigital.withgoogle.com/activate/",
        Date: "Feb-2021",
        IDCredential: "YNR Z7D NVC",
        LinkCredential: "https://learndigital.withgoogle.com/link/1nur091p2ww"
    },
    {
        CourseorCertification: "Introduction to Web Development: HTML and CSS Part I",
        InstitutionName: "Google Actívate",
        InstitutionUrl: "https://learndigital.withgoogle.com/activate/",
        Date: "Feb-2021",
        IDCredential: "4BL GA3 JS5",
        LinkCredential: "https://learndigital.withgoogle.com/link/1nur091p2ww"
    },
    {
        CourseorCertification: "Java programming language - JAVA for BEGINNERSJava",
        InstitutionName: "Udemy",
        InstitutionUrl: "https://www.udemy.com/",
        Date: "Oct-2020",
        IDCredential: "UC-fecdd231-3839-4152-8e6d-46dffb823a28",
        LinkCredential: "-"
    },
    {
        CourseorCertification: "Scrum Foundations Professional Certificate",
        InstitutionName: "CertiProf",
        InstitutionUrl: "https://certiprof.com/",
        Date: "Jun-2020",
        IDCredential: "JLSRPFFJPK-VVBBZKVT-YBJTGQRWYG",
        LinkCredential: "-"
    },
    {
        CourseorCertification: "PC Hardware Technician",
        InstitutionName: "Argentine Technological Institute",
        InstitutionUrl: "-",
        Date: "Dec-2009",
        IDCredential: "-",
        LinkCredential: "-"
    },
    {
        CourseorCertification: "Linux System Operator for KDE and Ubuntu distributions",
        InstitutionName: "AltaGama Institute Educational",
        InstitutionUrl: "-",
        Date: "Jul-2008",
        IDCredential: "-",
        LinkCredential: "-"
    }
];

/* Function Table*/
const coursesContendor = document.querySelector(".table-body");

function crearTable(course) {
    const tr = document.createElement("tr");

    const coursename = document.createElement("td");
    const place = document.createElement("td");
    const placeurl = document.createElement("a");
    const date = document.createElement("td");
    const credential = document.createElement("td");
    const credentialurl = document.createElement("a");

    tr.appendChild(coursename);
    tr.appendChild(place);
    place.appendChild(placeurl);
    tr.appendChild(date);
    tr.appendChild(credential);
    credential.appendChild(credentialurl);

    placeurl.setAttribute("href",course.InstitutionUrl);
    placeurl.setAttribute("target","_blank");

    credentialurl.setAttribute("href",course.LinkCredential);
    credentialurl.setAttribute("target","_blank");

    coursename.textContent = course.CourseorCertification;
    placeurl.textContent = course.InstitutionName;
    date.textContent = course.Date;
    credentialurl.textContent = course.IDCredential;

    coursesContendor.appendChild(tr);
}

courses.forEach(crearTable);
/* Function Table*/

/* Function cards*/
const cardsContenedor = document.querySelector(".courses");

function crearCards(course) {
    const div = document.createElement("div");

    const button = document.createElement("button");
    const coursename = document.createElement("a");
    const panel = document.createElement("div");
    const card = document.createElement("div");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const aplace = document.createElement("a");
    const hplace = document.createElement("h3");
    const date = document.createElement("li");
    const credential = document.createElement("li");
    const idcredential = document.createElement("a");

    div.appendChild(button);
    button.appendChild(coursename);
    div.appendChild(panel);
    panel.appendChild(card);
    card.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(aplace);
    aplace.appendChild(hplace);
    ul.appendChild(date);
    ul.appendChild(credential);
    credential.textContent = "ID Credential: ";
    credential.appendChild(idcredential);

    
    button.className = "accordion";
    coursename.className = "aedu";
    panel.className = "panel";
    card.className = "card--course";
    
    aplace.setAttribute("href",course.InstitutionUrl);
    aplace.setAttribute("target","_blank");
    
    idcredential.setAttribute("href",course.LinkCredential);
    idcredential.setAttribute("target","_blank");

    
    coursename.textContent = "📝 " + course.CourseorCertification;
    hplace.textContent = course.InstitutionName;
    date.textContent = "Expedition date: " + course.Date;

    idcredential.textContent = course.IDCredential;
    cardsContenedor.appendChild(div);
}

courses.forEach(crearCards);
/* Function cards*/


/* Function Search Table */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach((inputField) => {
        const tableRows = inputField
        .closest("table")
        .querySelectorAll("tbody > tr");
        const headerCell = inputField.closest("th");
        const otherHeaderCells = headerCell.closest("tr").children;
        const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
        const searchableCells = Array.from(tableRows).map(
        (row) => row.querySelectorAll("td")[columnIndex]);
  
        inputField.addEventListener("input", () => {
            const searchQuery = inputField.value.toLowerCase();
  
            for (const tableCell of searchableCells) {
                const row = tableCell.closest("tr");
                const value = tableCell.textContent.toLowerCase().replace(",", "");
  
                row.style.visibility = null;
  
                if (value.search(searchQuery) === -1) {
                    row.style.visibility = "collapse";
                }
            }
        });
    });
});
/* Function Search Table*/


/* Funtion for accordion botton*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
        this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
/* Funtion for accordion botton*/