/*
 * The main object that will handle the playlist
 *
*/

YoutubeAmp = {
	playlist_: ["http://www.youtube.com/watch?v=CT_tPxlWViY"],
    
     i:1;

		get: function(i) {
			return this.playlist_[i];
		},

		add: function(song) { 
			playlist_.length++;
			playlist_[playlist_.length]=song;

		},

		getNext: function() {
            i++; 
            if (i>=playlist_.length) i=0;
            return playlist_[i];

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


