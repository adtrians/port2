window.addEventListener("load", event => {

    const videos = [{
            name: "Showreel",
            img: "img/1.jpeg",
            video: "https://www.youtube.com/embed/H2Ay1vC9sEQ"
        },
        
        {
            name: "Showreel",
            img: "img/2.jpeg",
            video: "https://www.youtube.com/embed/CcFYzYj0xHw"
        },

        {
            name: "Showreel",
            img: "img/3.jpeg",
            video: "https://www.youtube.com/embed/DkB2FKEP274"
        },

        {
            name: "Showreel",
            img: "img/4.jpeg",
            video: "https://www.youtube.com/embed/lUr8-Y2aae4"
        },

        {
            name: "Showreel",
            img: "img/5.jpeg",
            video: "https://www.youtube.com/embed/JG5DNuh-1tY"
        },

        {
            name: "Showreel",
            img: "img/6.jpeg",
            video: "https://www.youtube.com/embed/fkBXO1RfuOw"
        },

        {
            name: "Showreel",
            img: "img/7.jpeg",
            video: "https://www.youtube.com/embed/WXUIUe6NSFA"
        },

        {
            name: "Showreel",
            img: "img/8.jpeg",
            video: "https://www.youtube.com/embed/as0MMwCR0NQ"
        },

        {
            name: "Showreel",
            img: "img/9.jpeg",
            video: "https://www.youtube.com/embed/e88UnsczUws"
        },

        {
            name: "Showreel",
            img: "img/10.jpeg",
            video: "https://www.youtube.com/embed/glJWVZ7APOM"
        },

        {
            name: "Showreel",
            img: "img/11.jpeg",
            video: "https://www.youtube.com/embed/Fgv-Y8ITDNg"
        },

        {
            name: "Showreel",
            img: "img/12.jpeg",
            video: "https://www.youtube.com/embed/DG6eb4jCFmU"
        },

        {
            name: "Showreel",
            img: "img/13.jpeg",
            video: "https://www.youtube.com/embed/HAPCvCK2fCY"
        },
        
        
        


    ];

    const videosContent = document.querySelector('.videos__content');

    videos.forEach(function (el) {
        const template = `
            <div class="videos__item" data-video="${el.video}">
            <p class="videos__name">${el.name}</p> 
            <i class="videos__play"> <img src="https://www.rafaelalucas.com/dailyui/16/assets/play.svg" alt = "" ></i>
            <img class="videos__image" src="${el.img}" alt = "" >
            </div>`;
        videosContent.insertAdjacentHTML('beforeend', template);

    });


    const videoItem = document.querySelectorAll('.videos__item'),
        modalVideo = document.querySelector('.modal'),
        iconCloseVideo = document.querySelector('.modal__icon'),
        videoFrame = document.querySelector('.modal__video iframe'),
        body = document.querySelector('body');;

    videoItem.forEach(function (el) {
        el.addEventListener("click", openVideo);
    })

    iconCloseVideo.addEventListener("click", closeVideo);


    function openVideo(e) {
        const videoSrc = e.currentTarget.dataset.video;

        videoFrame.src = videoSrc;

        setTimeout(() => {
            modalVideo.classList.add('open');

        }, 300);

        body.style.overflow = "hidden";


    }

    function closeVideo() {

        modalVideo.classList.remove('open');
        videoFrame.src = "";

    }

    if (window.innerWidth > 799) {
        document.querySelector('.wrapper').style.height = window.innerHeight + "px";

    }
    document.querySelector('.modal').style.height = window.innerHeight + "px";

});