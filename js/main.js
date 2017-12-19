$(document).ready(function(){
    // $("a").hover(
    //     function(){
    //         $(this).css("color", "yellow");
    //     }, 
    //     function(){
    //         $(this).css("color", "#3DBDB2");
    //     }
    // ),    


    $("button.accordion").click(
        function(){
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

        }
    ),
    
    $("#menu-button").click(
        function(){
            this.classList.toggle("expanded");
            $("#hamburger-menu").toggleClass("active");
        }
    ),
    
    $(".gallery .photo").click(
        function() {
            $(".photo.active, .image-overlay.active").toggleClass("active");
            $('.image-overlay').empty();

            $('.image-overlay').toggleClass("active");
            this.classList.toggle("active");
            $('.image-overlay').append($(this).clone());
        }
    ),

    
    $(".image-overlay").click(
        function() {
            $(this).empty()
            $('.image-overlay').toggleClass("active");
            $('.gallery').css('display', 'block');
        }
    );
})



