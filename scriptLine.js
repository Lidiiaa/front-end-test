document.addEventListener("DOMContentLoaded", function(e){
    /*ajout de la classe active on click*/
    let getStops = document.querySelectorAll('#busStops ul li');
    getStops.forEach(function(stop) {
      stop.addEventListener('click', function(e) {
        getStops.forEach(function(el){
            el.classList.remove('active');
        })
        stop.classList.add('active');
        console.log(e); 
      });
    });
});

 
 
 