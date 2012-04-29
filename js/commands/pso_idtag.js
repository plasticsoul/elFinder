elFinder.prototype.commands.pso_idtag = function() {		

	
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
			
			



<!-- Begin
function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=365,height=auto,left = 420,top = 75');");
}
// End -->

<!-- STEP TWO: Paste this onLoad event handler into the BODY tag -->

popUp('http://localhost/personal-2012/soundupload/wp-soundupload/_includes/id3/demos/demo.write_by_PlasticSoul.php?Filename=../../nao-pon-elFinder/files/'+fm.path(file.hash)+'');

<!-- Script Size:  0.73 KB  -->

function example_append() {		 

var $track = $( "#track" ),
	$bttrack = $( "#bttrack" );


};


example_append();

   	 $('#bttrack' + num).click(function () {

                //$('#input' + num).remove();

      $('#track' + num).remove();
    });		
	
		

		}}};
