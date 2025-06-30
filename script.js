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
        "modalId": "cannes",
        "coverImg": "assets/cannes young lions/Cover_CannesYoungLions.png",
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
        "modalId": "iLRN2024",
        "coverImg": "assets/iLRN2024/iLRN_thumbnail.png",
        "title": "iLRN 2024",
        "category": "Published Paper",
        "modalMedia": [
            modalImage("assets/iLRN2024/iLRN_cover.png"),
            modalImage("assets/iLRN2024/ilrn_background.png"),
            modalImage("assets/iLRN2024/iLRN_abstract.png"),
        ]
    },

    {
        "modalId": "workinclass",
        "coverImg": "assets/workinclass/workinclass_logo_cover.png",
        "title": "workinclass",
        "category": "Learning Design",
        "modalMedia": [
            modalImage("assets/workinclass/wicslide1.jpg"),
            modalImage("assets/workinclass/wicslide2.jpg"),
            modalImage("assets/workinclass/wicslide3.jpg"),
            modalImage("assets/workinclass/wicslide4.jpg"),
            modalImage("assets/workinclass/wicslide5.jpg"),
            modalImage("assets/workinclass/wicslide6.jpg"),
            modalImage("assets/workinclass/wicslide7.jpg"),
            modalImage("assets/workinclass/wicslide8.jpg"),
            modalImage("assets/workinclass/wicslide9.jpg"),
            modalImage("assets/workinclass/wicslide10.jpg"),
            modalImage("assets/workinclass/wicslide11.jpg"),
            modalImage("assets/workinclass/wicslide12.jpg"),
            modalImage("assets/workinclass/wicslide13.jpg"),
            modalImage("assets/workinclass/wicslide14.jpg"),
            modalImage("assets/workinclass/ECT_workinclass_poster_rgb.jpg"),
        ]
    },

    {
        "modalId": "litw",
        "coverImg": "assets/learning in the wild/coverbookmock.jpg",
        "title": "Learning in the Wild",
        "category": "Research, Learning Design",
        "modalMedia": [
            modalImage("assets/learning%20in%20the%20wild/coverbookmock.jpg"),
            modalImage("assets/learning%20in%20the%20wild/LITW BRIEF.png"),
            modalImage("assets/learning%20in%20the%20wild/book_contents_mockup.jpg")
        ]
    },

    {
        "modalId": "24hour",
        "coverImg": "assets/24-hour%20idea%20blitz/24houridea_rise_cover.png",
        "title": "24-hour Idea Blitz",
        "category": "Learning Design",
        "modalMedia": [
            modalImage("assets/24-hour%20idea%20blitz/cover_24hour_project.jpeg"),
            modalImage("assets/24-hour%20idea%20blitz/24hour_text.png"),
            modalVideo("assets/24-hour%20idea%20blitz/iMac_Mockup_24Blitz.mp4", "video/mp4")
        ]
    },

    {
        "modalId": "socialpopup",
        "coverImg": "assets/social%20pop-up/mockup_white.png",
        "title": "Social Pop-up",
        "category": "UX",
        "modalMedia": [
            modalImage("assets/social%20pop-up/mock_up_2.png"),
            modalImage("assets/social%20pop-up/socialpopup_desc.png"),
            modalImage("assets/social%20pop-up/sketch1.png"),
            modalImage("assets/social%20pop-up/sketches_2.png")
        ]
    },

    {
        "modalId": "hondacity",
        "coverImg": "assets/hondacity/COVER.jpg",
        "title": "Honda City",
        "category": "Strategic Planning",
        "modalMedia": [
            modalImage("assets/hondacity/COVER.jpg"),
        ]
    },

    {
        "modalId": "BottleforBotol",
        "coverImg": "assets/bottleforbotol/bottleforbotol_logo.png",
        "title": "Bottle for Botol",
        "category": "Visual Design",
        "modalMedia": [
            modalImage("assets/bottleforbotol/bottleforbotol_logo.png"),
            modalImage("assets/bottleforbotol/BFB_project.png"),
            modalImage("assets/bottleforbotol/visualidentity_promotional.png"),
        ]
    },

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