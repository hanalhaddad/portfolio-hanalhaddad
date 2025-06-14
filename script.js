document.addEventListener('galleryLoaded', function() {
    window.addEventListener('scroll', function() {
        let body = document.querySelector('body');
        let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPosition = window.scrollY;

        if (scrollPosition >= scrollHeight - 100) {
            body.classList.add('show-footer');
        } else {
            body.classList.remove('show-footer');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const rollingText = document.getElementById("rollingText");
    const textArray = [
        "Strategic Planner",
        "Learning Designer",
        "Problem-Solver",
        "Conceptual Creator",
        "Digital Doodler",
        "Pattern Searcher",
        "Growth Seeker",
    ];

    let currentIndex = 0;

    function updateText() {
        rollingText.textContent = textArray[currentIndex];
        rollingText.classList.add("show");
        setTimeout(function() {
            rollingText.classList.remove("show");
            currentIndex = (currentIndex + 1) % textArray.length;
        }, 3000); // Wait 3 seconds before changing the text
        setTimeout(updateText, 4000); // Wait 4 seconds before running the next text change
    }

    updateText(); // Start the rotation
});

// JavaScript functions for modal
function openModal(modalId, event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById(modalId).classList.add('active');
    setTimeout(function() {
        document.getElementById(modalId).style.display = 'block';
    }, 100); // Adjust the delay (in milliseconds) for the darkening effect
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    setTimeout(function() {
        document.getElementById(modalId).style.display = 'none';
    }, 300); // Adjust the delay (in milliseconds) for the closing effect
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModalWithEscape(); // Call the function to close modal
    }
});

function closeModalWithEscape() {
    // Get all the modal elements
    const modals = document.querySelectorAll('.modal');

    // Loop through each modal and close it
    modals.forEach(modal => {
        if (modal.classList.contains('active')) {
            const modalId = modal.getAttribute('id');
            closeModal(modalId);
        }
    });
}

const galleryItems = [
    {
        "modalId": "tickle",
        "coverImg": "assets/tickle/coverlogo.jpg",
        "coverImgAltText": "@Tickle",
        "title": "@Tickle",
        "category": "Learning Design",
        "modalMedia": [
            modalImage("assets/tickle/iphone_mock.png"),
            modalImage("assets/tickle/project_tickle_info.png"),
            modalImage("assets/tickle/tickle_grid.png")
        ]
    },
    {
        "modalId": "litw",
        "coverImg": "assets/learning in the wild/coverbookmock.jpg",
        "coverImgAltText": "Learning in the Wild",
        "title": "Learning in the Wild",
        "category": "Learning Design",
        "modalMedia": [
            modalImage("assets/learning%20in%20the%20wild/coverbookmock.jpg"),
            modalImage("assets/learning%20in%20the%20wild/project_info_litw.png"),
            modalImage("assets/learning%20in%20the%20wild/book_contents_mockup.jpg")
        ]
    },
    {
        "modalId": "socialpopup",
        "coverImg": "assets/social%20pop-up/Mockupcover.jpg",
        "coverImgAltText": "Social Pop-up",
        "title": "Social Pop-up",
        "category": "UX",
        "modalMedia": [
            modalImage("assets/social%20pop-up/Mockupcover.jpg"),
            modalImage("assets/social%20pop-up/projectinfopopup.png"),
            modalImage("assets/social%20pop-up/sketch_1.png"),
            modalImage("assets/social%20pop-up/sketch_2.png")
        ]
    },
    {
        "modalId": "24hour",
        "coverImg": "assets/24-hour%20idea%20blitz/logo_test.png",
        "coverImgAltText": "24-hour",
        "title": "24-hour Idea Blitz",
        "category": "UX",
        "modalMedia": [
            modalImage("assets/24-hour%20idea%20blitz/cover_24hour_project.jpeg"),
            modalImage("assets/24-hour%20idea%20blitz/project%20info%2024-hour.png"),
            modalVideo("assets/24-hour%20idea%20blitz/iMac_Mockup_24Blitz.mp4", "video/mp4")
        ]
    },
    {
        "modalId": "cannes",
        "coverImg": "assets/cannes young lions/Cover_CannesYoungLions.png",
        "coverImgAltText": "Cannes Young Lions",
        "title": "Cannes Young Lions",
        "category": "Strategic Planning, UX",
        "modalMedia": [
            modalImage("assets/cannes%20young%20lions/Cover_CannesYoungLions.png"),
            modalImage("assets/cannes%20young%20lions/Brief_Cannes.png"),
            modalImage("assets/cannes%20young%20lions/Howitworks_Cannes.png"),
            modalImage("assets/cannes%20young%20lions/Magazine%20Mockup.jpg")
        ]
    },
    {
        "modalId": "afterschool",
        "coverImg": "assets/Afterschool/Afterschool_Assets-02.png",
        "coverImgAltText": "Afterschool",
        "title": "Afterschool",
        "category": "UX",
        "modalMedia": [
            modalImage("assets/Afterschool/Afterschool_Assets-02.png"),
            modalImage("assets/Afterschool/background_after.jpg"),
            modalImage("assets/Afterschool/problem_after.jpg"),
            modalImage("assets/Afterschool/problem_interview.jpg"),
            modalImage("assets/Afterschool/hmw_after.jpg"),
            modalImage("assets/Afterschool/mockupafter_1.jpg"),
            modalImage("assets/Afterschool/mockupafter_2.jpg.jpg")
        ]
    }
]

// used when defining gallery item elements
function modalImage(src) {
    return {"type": "image", "src": src};
}

// used when defining gallery item videos
function modalVideo(src, srcType) {
    return {"type": "video", "src": src, "srcType": srcType};
}

const galleryLoaded = new Event("galleryLoaded")

const galleryItemTemplateString = `
  <div class="gallery-item">
        <a href="#" class="clickContainer">
            <div class="img-container">
                <img src="{{coverImg}}" alt="{{title}}">
            </div>
            <div class="caption">
                <h1 class="title">{{title}}</h1>
                <h2 class="category">{{category}}</h2>
            </div>
        </a>
    </div>
`;
const galleryItemTemplate = Handlebars.compile(galleryItemTemplateString);

// add the gallery items when the document loads!
document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");
    galleryItems.forEach((galleryElt) => {
        // first add the gallery item
        galleryContainer.appendChild(createGalleryItemWithTemplate(galleryElt));
        // now add the modal for the item as a sibling
        galleryContainer.appendChild(createModalWithTemplate(galleryElt));
    });
    document.dispatchEvent(galleryLoaded);
});

Handlebars.registerHelper('ifEquals', function(arg1, arg2) {
    return (arg1 === arg2);
});

function createGalleryItemWithTemplate(galleryElt) {
    const container = document.createElement("div");
    container.innerHTML = galleryItemTemplate(galleryElt);
    const out = container.children[0];
    out.getElementsByClassName("clickContainer")[0].onclick = openModal.bind(this, galleryElt.modalId);
    return out;
}

const modalTemplateString = `
    <div id="{{modalId}}" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('{{modalId}}')">&times;</span>
            <div class="modal-header">
                <h1>{{title}}</h1>
                <div class="tools">
                    <i class="fab fa-figma"></i>
                </div>
            </div>
            <div class="modal-main-content">
                <div class="modal-image-container">
                    {{#each modalMedia}}
                        {{#if (ifEquals this.type "image")}}
                        <img src="{{this.src}}"/>
                        {{/if}}
                        {{#if (ifEquals this.type "video")}}
                            {{> videoElement this}}
                        {{/if}}
                    {{/each}}
                </div>
            </div>
        </div>
    </div>
`;
const modalTemplate  = Handlebars.compile(modalTemplateString);
function createModalWithTemplate(galleryElt) {
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalTemplate(galleryElt);
    return modalContainer.children[0];
}

const videoTemplateString = `
    <video width="100%" height="auto" autoplay muted>
        <source src="{{src}}" type="{{srcType}}"/>
        Your browser does not support the video tag.
    </video>
`;
Handlebars.registerPartial('videoElement', videoTemplateString);