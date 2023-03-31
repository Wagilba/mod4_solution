// Define helloSpeaker object
/*var helloSpeaker = {
  speak: function(name) {
    console.log("Hello " + name);
  }
};
*/

(function(window) {	
	var speakWord = "Hello";
	var helloSpeaker = {};	
	helloSpeaker. speak = function (name) {
		console.log(speakWord + " " + name);
	}
	window.helloSpeaker =  helloSpeaker;
})(window);
