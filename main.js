jQuery(document).ready(function ($) {

    /** toggle nav **/
    let nav = document.getElementById("nav");
    let toggler = document.getElementById("mobile-menu-toggler");
    let closeNav = document.getElementById("close-nav");
    let overlay = document.querySelector(".overlay");

    toggler.addEventListener("click", function () {
        if (nav.classList.contains("show-nav")) {
            nav.classList.remove("show-nav");
            // $(".connect-btn").css("visibility", "visible");
            $(".connect-btn").show();
        } else {
            nav.classList.add("show-nav");
            toggler.style.display = "none";
            closeNav.style.display = "block";
            $(".connect-btn").hide();

            closeNav.addEventListener("click", function () {
                nav.classList.remove("show-nav");
                toggler.style.display = "block";
                closeNav.style.display = "none";
                toggler.classList.remove("styled-toggler");
                $(".connect-btn").show();
            })
        }

        if (overlay.classList.contains("display-block")) {
            overlay.classList.remove("display-block");
        } else {
            overlay.classList.add("display-block");
        }

        this.classList.toggle("styled-toggler");
    });


    /** Smooth nav link transition **/
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
            
            $(".navbar a").removeClass("active");
            $(this).addClass("active");
        });
    });
});