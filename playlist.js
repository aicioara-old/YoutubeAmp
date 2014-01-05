/*
 * The main object that will handle the playlist
 *
*/

YoutubeAmp = {

	playlist_: ["http://www.youtube.com/watch?v=CT_tPxlWViY",
	"https://www.youtube.com/watch?v=wVLcByj3ik8"],

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

ChangeVideo= {
	function scrie() {
		x=YoutubeAmp.getNext;
		x= x.replace("watch?v=","embed/");
		x= x + "?rel=0"
		document.getElementById("video").src=x;
	}

}



FakeYoutube.addButton();


