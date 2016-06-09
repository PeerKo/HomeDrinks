function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


$(document).ready(
    function() {
        $('#open').click(
            function() {
                $('#overlay').show('slow',
                    function() {
                        $('#container').fadeIn('slow');
                        $('#changeText').html('Dynamischer Inhalt');
                    }
                );
            }
        );
 
         $('#close').click(
            function() {
                $('#container').hide('slow',
                     function() {
                          $('#overlay').fadeOut();          
                     }    
                );
            }
        );  
    }
);

