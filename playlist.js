/*
 * The main object that will handle the playlist
 *
*/

YoutubeAmp = {

	playlist_: ["http://www.youtube.com/watch?v=CT_tPxlWViY"],

	get: function(index) {
		return this.playlist_[index];
	},

	add: function(song) {

	},

	getNext: function() {

	},

	test: function() {
		console.log("It is working");
	}
	
}

FakeYoutube = {
	addButton: function() {
		button = document.createElement ('button')
		button.innerText = "Fake Add"
		button.onclick = function() {
			YoutubeAmp.test();
		}
		document.body.appendChild(button);
	}

}


console.log(YoutubeAmp.get(0));


function scrie() {
	x=YoutubeAmp.get(0);
	document.write(x);
}
scrie();



FakeYoutube.addButton();


