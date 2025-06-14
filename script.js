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

// add the gallery items when the document loads!
document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");
    galleryItems.forEach((galleryElt) => {
        // first add the gallery item
        const galleryItem = createElementWithClass("div", "gallery-item");
        const clickTargetContainer = document.createElement("a");
        clickTargetContainer.addEventListener("click", openModal.bind(this, galleryElt.modalId));
        clickTargetContainer.setAttribute("href", "#");
        galleryItem.appendChild(clickTargetContainer);
        // cover image
        const coverContainer = createElementWithClass("div", "img-container");
        const coverImg = simpleImage(galleryElt.coverImg);
        coverContainer.appendChild(coverImg);
        clickTargetContainer.appendChild(coverContainer);
        // caption
        const caption = createElementWithClass("div", "caption");
        const captionChildren = [
            simpleTextElementWithClass("h1", "title", galleryElt.title),
            simpleTextElementWithClass("h2", "category", galleryElt.category),
        ];
        caption.append(...captionChildren);
        clickTargetContainer.appendChild(caption);

        // now add gallery item to section
        galleryContainer.appendChild(galleryItem);
        // now add the modal for the item as a sibling
        galleryContainer.appendChild(createModal(galleryElt));
    });
    document.dispatchEvent(galleryLoaded);
});

function createModal(galleryElt) {
    const modalContainer = createElementWithClass("div", "modal");
    modalContainer.setAttribute("id", galleryElt.modalId);
    const modalContent = createElementWithClass("div", "modal-content");
    modalContainer.appendChild(modalContent);
    // modal controls
    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.onclick = closeModal.bind(this, galleryElt.modalId);
    closeButton.textContent = "\u00d7";
    modalContent.appendChild(closeButton);
    const modalHeader = createElementWithClass("div", "modal-header");
    modalHeader.appendChild(simpleTextElement("h1", galleryElt.title));
    modalContent.append(modalHeader);

    const tools = createElementWithClass("div", "tools");
    const figmaContainer = document.createElement("i");
    figmaContainer.classList.add(...["fab", "fa-figma"]);
    tools.appendChild(figmaContainer);
    modalHeader.append(tools);

    // modal main content
    const modalMainContent = createElementWithClass("div", "modal-main-content");
    const modalImageContainer = createElementWithClass("div", "modal-image-container");
    // add media elements to image container
    const modalMediaElements = galleryElt.modalMedia.map(mediaElt => {
        if (mediaElt.type === "video") {
            return createVideoElement(mediaElt.src, mediaElt.srcType);
        } else if (mediaElt.type === "image") {
            return simpleImage(mediaElt.src);
        }
    });
    modalImageContainer.append(...modalMediaElements);
    modalMainContent.appendChild(modalImageContainer);
    modalContent.appendChild(modalMainContent);
    return modalContainer;
}

function simpleTextElement(eltType, text) {
    const out = document.createElement(eltType);
    out.textContent = text;
    return out;
}

function simpleTextElementWithClass(eltType, className, text) {
    const out = document.createElement(eltType);
    out.classList.add(className);
    out.textContent = text;
    return out;
}

function simpleImage(src) {
    const out = document.createElement("img");
    out.setAttribute("src", src);
    return out;
}

function createElementWithClass(eltType, className) {
    const out = document.createElement(eltType);
    out.classList.add(className);
    return out;
}

function createVideoElement(src, srcType) {
    const out = document.createElement("video");
    out.setAttribute("width", "100%");
    out.setAttribute("height", "auto");
    out.setAttribute("autoplay", "");
    out.setAttribute("muted", "");
    out.textContent = "Your browser does not support the video tag."
    const sourceElt = document.createElement("source");
    sourceElt.setAttribute("src", src);
    sourceElt.setAttribute("type", srcType);
    out.appendChild(sourceElt);
    return out;
}