/*
 * The main object that will handle the playlist
 *
*/


function log(text) {
	x = document.createElement('div');
	x.innerText = text;
	document.body.appendChild(x);
}

YoutubeAmp = {

	playlist_: ["http://www.youtube.com/watch?v=CT_tPxlWViY"],
    
    i : 0,


	get: function(i) {
		return this.playlist_[i];
	},

	add: function(song) { 
		this.playlist_.length++;
		this.playlist_[this.playlist_.length]=song;

	},

	getNext: function() {
        this.i++; 
        if (this.i>=this.playlist_.length) this.i=0;
        return this.playlist_[this.i];

	},

	test: function() {
		chrome.extension.getBackgroundPage().console.log('foo');
	}

	
}

FakeYoutube = {

	addButtonAdd: function() {
		button = document.createElement ('button')
		button.innerText = "Add Song"
		button.onclick = function() {
			YoutubeAmp.add("http://www.youtube.com/watch?v=zWbsnAHXyBU");
		}
		document.body.appendChild(button);
	},

	addButtonChange: function() {
		button = document.createElement ('button')
		button.innerText = "Change Song"
		button.onclick = function() {
			ChangeVideo.change();
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



