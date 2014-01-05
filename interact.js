// x = document.body.style.backgroundColor="blue"


function foo() {
	x = document.getElementById('rightCol')
	x.parentNode.removeChild(x)
}


YoutubeAmp = {

	playlist_: ["http://www.youtube.com/watch?v=CT_tPxlWViY"],

	get: function(index) {
		return this.playlist_[index];
	},

	put: function(index) {

	}
	
}



console.log(YoutubeAmp.get(0));