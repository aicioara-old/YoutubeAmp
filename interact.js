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

	}

	getNext: function() {

	}
	
}


console.log(YoutubeAmp.get(0));