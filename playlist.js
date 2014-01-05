/*
 * The main object that will handle the playlist
 *
*/

YoutubeAmp = {

	playlist_: ["http://www.youtube.com/watch?v=CT_tPxlWViY"],
    
    i : 0,


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
		chrome.extension.getBackgroundPage().console.log('foo');
	}

	
}

FakeYoutube = {

	_state : 0,

	addButtonAdd: function() {
		button = document.createElement ('button')
		button.innerText = "Add Song"
		button.onclick = function() {
			if (this._state==0) {
				YoutubeAmp.test();
				YoutubeAmp.add("http://www.youtube.com/watch?v=zWbsnAHXyBU");
			} else {
				YoutubeAmp.test();
				YoutubeAmp.add("http://www.youtube.com/watch?v=gYZA7pn6WM4");
			}
			_state ++;
		}
		document.body.appendChild(button);
	},

	addButtonChange: function() {
		button = document.createElement ('button')
		button.innerText = "Change Song"
		button.onclick = function() {
			ChangeVideo.change();
			// Change Video implementation test
		}
		document.body.appendChild(button);

	},

	addNewLine: function() {
		br = document.createElement('br');
		document.body.appendChild(br);

	}

}


console.log(YoutubeAmp.get(0));

ChangeVideo = {
	change: function() {
		x=YoutubeAmp.getNext();
		x= x.replace("watch?v=","embed/");
		x= x + "?rel=0"
		document.getElementById("video").src=x;
	}

}


FakeYoutube.addNewLine();
FakeYoutube.addButtonAdd();
FakeYoutube.addNewLine();
FakeYoutube.addButtonChange();
FakeYoutube.addNewLine();



