$(document).ready(function(){

    $(".centered h1").hover(
    	function(){
        	$(this).css("color", "yellow");
        }, 
        function(){
        	$(this).css("color", "#3DBDB2");
        }),

    $("#email").hover(
    	function(){
        	$(this).css("color", "yellow");
        }, 
        function(){
        	$(this).css("color", "#3DBDB2");
    	}),

    $(".section-text").hover(
        function(){
            $(this).css("border", "8px double yellow");
        }, 
        function(){
            $(this).css("border", "8px double #3DBDB2");
        })
});