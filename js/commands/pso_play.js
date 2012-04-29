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

//    $('#playlist').append('<li id="track'+num+'" class="clonedInput"><a href="'+fm.url(file.hash)+'" target="_blank">'+file.name+'</a>  <button id="bttrack'+num+'">-</button></li>'); 			
//    $('#playlist').append('<li id="track'+num+'" class="clonedInput"><span></span><a id="links" href="http://localhost/personal-2012/soundupload/wp-soundupload/_includes/nao-pon-elFinder/files/test/'+file.name+'" rel="4">'+file.name+'</a>  <button id="bttrack'+num+'">-</button></li>'); 	
    $('#playlist').append('<li id="piste'+num+'" class="clonedInput"><span></span><a onclick="playda();return false" id="newlinks" class="fmp-my-track" href="'+fm.url(file.hash)+'"  rel="4">'+file.name+'</a><button id="bttrack'+num+'">•</button></li>'); 	
		//custom tracks
			/*
			$('.fmp-my-playlist li a, a.fmp-my-track').live('click', function() {
				//console.log(this.target);
				soundManager.addTrack(this.href, this.title, this.target);
				return false;
			});
	
	*/
};


example_append();

   	 $('#bttrack' + num).click(function () {

                //$('#input' + num).remove();

      $('#piste' + num).remove();
    });		
	
		

		}}};
		
		function playda(){
		
	//soundManager.url = 'http://localhost/personal-2012/soundupload/wp-soundupload/_includes/players/player-base/swf/'; // Chemin du dossier "swf"
//soundManager.debugMode = false; // DebugMode désactivé
/*var premier_son;
	premier_son = soundManager.createSound(
	{
		id : "premier_son",
		url : 'http://localhost/personal-2012/soundupload/wp-soundupload/_includes/nao-pon-elFinder/files/test/BASZ_end_by_PSOv1.mp3'// Attention pas de virgule ici !
	});	*/
	//premier_son.play();
lire_current();	
	};
	/*
	this.exec = function() {
	
	this.exec = function() {
	var m   = 'msg',
		fm  = this.fm,
		spclass = 'elfinder-info-spinner',
		msg = {
			calc     : fm.i18n('calc'),
			size     : fm.i18n('size'),
			unknown  : fm.i18n('unknown'),
			path     : fm.i18n('path'),
			aliasfor : fm.i18n('aliasfor'),
			modify   : fm.i18n('modify'),
			perms    : fm.i18n('perms'),
			locked   : fm.i18n('locked'),
			dim      : fm.i18n('dim'),
			kind     : fm.i18n('kind'),
			files    : fm.i18n('files'),
			folders  : fm.i18n('folders'),
			items    : fm.i18n('items'),
			yes      : fm.i18n('yes'),
			no       : fm.i18n('no'),
			link     : fm.i18n('link')
		};
		
	this.tpl = {
//		main       : '<div class="ui-helper-clearfix elfinder-info-title"><span class="elfinder-cwd-icon {class} ui-corner-all"/>{title}</div><table class="elfinder-info-tb">{content}</table>',
		main       : '<table class="">{content}</table>',

	itemTitle  : '<strong>{name}</strong><span class="">{kind}ooo</span>',
	//	groupTitle : '<strong>{items}: {num}</strong>',
	//	row        : '<tr><td>{label} : </td><td>{value}</td></tr>',
			row        : '<tr><td></td><td>{value}</td></tr>',
	spinner    : '<span>{text}</span> <span class="'+spclass+'"/>'
	}
	
	this.alwaysEnabled = true;
	this.updateOnSelect = false;
		/*
this.shortcuts = [{
		pattern     : 'ctrl+i'
	}];
	this.init = function() {
		$.each(msg, function(k, v) {
			msg[k] = fm.i18n(v);
		});
	}
	this.getstate = function() {
		return 0;
	}

	this.exec = function(hashes) {
		var self    = this,
			fm      = this.fm,
			tpl     = this.tpl,
			row     = tpl.row,
			files   = this.files(hashes),
			cnt     = files.length,
			content = [],
			view    = tpl.main,
			l       = '{label}',
			v       = '{value}',
			opts    = {
				/*
				title : this.title,
				width : 'auto',
				close : function() { $(this).elfinderdialog('destroy'); }
				*/
				/*
			},
			count = [],
			replSpinner = function(msg) { dialog.find('.'+spclass).parent().text(msg); },
			id = fm.namespace+'-info-'+$.map(files, function(f) { return f.hash }).join('-'),
			dialog = fm.getUI().find('#'+id), 
			size, tmb, file, title, dcnt;
			
		if (!cnt) {
			return $.Deferred().reject();
		}
			
		if (dialog.length) {
			dialog.elfinderdialog('toTop');
			return $.Deferred().resolve();
		}
		
			
		if (cnt == 1) {
			file  = files[0];
			//	view  = view.replace('{class}', fm.mime2class(file.mime));
			//	title = tpl.itemTitle.replace('{name}', file.name).replace('{kind}', fm.mime2kind(file));

			//	if (file.tmb) {
			//	tmb = fm.option('tmbUrl')+file.tmb;
			//	}
			/*
			if (!file.read) {
				size = msg.unknown;
			} else if (file.mime != 'directory' || file.alias) {
				size = fm.formatSize(file.size);
			} else {
				size = tpl.spinner.replace('{text}', msg.calc);
				count.push(file.hash);
			}
			//content.push(row.replace(l, msg.size).replace(v, size));
			//file.alias && content.push(row.replace(l, msg.aliasfor).replace(v, file.alias));
			//content.push(row.replace(l, msg.path).replace(v, fm.escape(fm.path(file.hash))));
						file.read && content.push(row.replace(l, msg.link).replace(v,  '<a href="'+fm.url(file.hash)+'" target="_blank">'+file.name+'</a>'));

function example_append() {
    $('#example').append('<a href="'+fm.url(file.hash)+'" target="_blank">'+file.name+'</a>');
}
example_append();
/*
			if (file.dim) { // old api
				content.push(row.replace(l, msg.dim).replace(v, file.dim));
			} else if (file.mime.indexOf('image') !== -1) {
				if (file.width && file.height) {
					content.push(row.replace(l, msg.dim).replace(v, file.width+'x'+file.height));
				} else {
					content.push(row.replace(l, msg.dim).replace(v, tpl.spinner.replace('{text}', msg.calc)));
					fm.request({
						data : {cmd : 'dim', target : file.hash},
						preventDefault : true
					})
					.fail(function() {
						replSpinner(msg.unknown);
					})
					.done(function(data) {
						replSpinner(data.dim || msg.unknown);
					});
				}
			}
			
			
			content.push(row.replace(l, msg.modify).replace(v, fm.formatDate(file)));
			content.push(row.replace(l, msg.perms).replace(v, fm.formatPermissions(file)));
			content.push(row.replace(l, msg.locked).replace(v, file.locked ? msg.yes : msg.no));
		} else {
			view  = view.replace('{class}', 'elfinder-cwd-icon-group');
			title = tpl.groupTitle.replace('{items}', msg.items).replace('{num}', cnt);
			dcnt  = $.map(files, function(f) { return f.mime == 'directory' ? 1 : null }).length;
			if (!dcnt) {
				size = 0;
				$.each(files, function(h, f) { 
					var s = parseInt(f.size);
					
					if (s >= 0 && size >= 0) {
						size += s;
					} else {
						size = 'unknown';
					}
				});
				content.push(row.replace(l, msg.kind).replace(v, msg.files));
				content.push(row.replace(l, msg.size).replace(v, fm.formatSize(size)));
			} else {
				content.push(row.replace(l, msg.kind).replace(v, dcnt == cnt ? msg.folders : msg.folders+' '+dcnt+', '+msg.files+' '+(cnt-dcnt)))
				content.push(row.replace(l, msg.size).replace(v, tpl.spinner.replace('{text}', msg.calc)));
				count = $.map(files, function(f) { return f.hash });
				
			}			

		}
		/*
		view = view.replace('{content}', content.join(''));
		
		dialog = fm.dialog(view, opts);
		dialog.attr('id', id)

		// load thumbnail
		// if (tmb) {
		//	$('<img/>')
		//		.load(function() { dialog.find('.elfinder-cwd-icon').css('background', 'url("'+tmb+'") center center no-repeat'); })
		//		.attr('src', tmb);
		//	}
		
		// send request to count total size
		/*
		if (count.length) {
			fm.request({
					data : {cmd : 'size', targets : count},
					preventDefault : true
				})
				.fail(function() {
					replSpinner(msg.unknown);
				})
				.done(function(data) {
					var size = parseInt(data.size);
					fm.log(data.size)
					replSpinner(size >= 0 ? fm.formatSize(size) : msg.unknown);
				});
		}
	
		
	}
	
}
};

	*/