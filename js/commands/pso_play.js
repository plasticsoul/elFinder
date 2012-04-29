elFinder.prototype.commands.pso_play = function() {		

	
	this.updateOnSelect = false;

	this.getstate = function(sel) {
		var fm = this.fm;
		var sel = fm.selectedFiles();
		return !this._disabled && sel.length == 1 && sel[0].read && sel[0].mime.indexOf('audio/') !== -1 && fm.file(sel[0].phash) && fm.file(sel[0].phash).write ? 0 : -1;
	};
	
	
	this.exec = function(hashes) {
		
		var self    = this,
			fm      = this.fm,
			files   = this.files(hashes),
			cnt     = files.length,
			count = [],
			num = $('.clonedInput').length,
			newNum  = new Number(cnt + 1);


		if (cnt == 1) {
			file  = files[0];

function example_append() {		 

var $track = $( "#track" ),
	$bttrack = $( "#bttrack" );
	
    $('#playlist').append('<li id="piste'+num+'" class="clonedInput"><span></span><a onclick="playda();return false" id="newlinks" class="fmp-my-track" href="'+fm.url(file.hash)+'"  rel="4">'+file.name+'</a><button id="bttrack'+num+'">•</button></li>'); 	
	
};


example_append();

   	 $('#bttrack' + num).click(function () {
   	 	
      $('#piste' + num).remove();
    });		
	
		

		}}};
		
		function playda(){
		

lire_current();	
	};
