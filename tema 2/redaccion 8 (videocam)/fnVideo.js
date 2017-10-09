function capvideo(){
	navigator.getUserMedia(
  {video: true}, 
  function(stream) {
    initvideo();
  }, 
  function(error) {
    console.log("permiso denegado");
  });
}
function initvideo(){
	navigator.getUserMedia = navigator.getUserMedia ||  
                         navigator.webkitGetUserMedia || 
                         navigator.mozGetUserMedia || 
                         navigator.msGetUserMedia;
                          
	window.URL = window.URL || 
             window.webkitURL || 
             window.mozURL || 
             window.msURL;
 
	window.addEventListener('load', function() {
   
		navigator.getUserMedia({
			video: true
		}, 
		function(stream) {
			var src = window.URL.createObjectURL(stream),
			video = document.querySelector('video');
			video.src = src;      
		}, 
		function(e) {
			console.log(e);
		});
   
		}, false);
}
capvideo();

	