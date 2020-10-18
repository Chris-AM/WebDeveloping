let closes = document.querySelectorAll(".close");

closes.forEach(function(close) {

    //Event added to the exit botton
    close.addEventListener("click", function(ev) {
        /*ev.preventDefault();*/
        let content = document.querySelector('.content');

        //ZoomIn animation removed
        content.classList.remove("animate__zoomIn");
        content.classList.remove("animate__animated");

        //ZoomOut animation added
        content.classList.add("animate__zoomOut");
        content.classList.add("animate__animated");

        //setting time
        setTimeout(function() {
            //back to the index
            location.href = "/";
        }, 600)



    })
})