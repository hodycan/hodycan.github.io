$(document).ready(function(){

    // heading hover
    $(".centered h1").hover(
    	function(){
        	$(this).css("color", "yellow");
        }, 
        function(){
        	$(this).css("color", "#3DBDB2");
        }
    ),

    // email hover
    $("#email").hover(
    	function(){
        	$(this).css("color", "yellow");
        }, 
        function(){
        	$(this).css("color", "#3DBDB2");
    	}
    ),

    // section-text hover
    $(".section-text").hover(
        function(){
            $(this).css("border", "8px double yellow");
        }, 
        function(){
            $(this).css("border", "8px double #3DBDB2");
        }
    ),

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
    )
    

});