/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-faviconxmlfuzz' : '&#xe001;',
			'icon-faviconwpscan' : '&#xe004;',
			'icon-faviconwebsecurify' : '&#xe005;',
			'icon-faviconscanner' : '&#xe007;',
			'icon-faviconbackframe' : '&#xe002;',
			'icon-faviconclassic' : '&#xe009;',
			'icon-faviconrforge' : '&#xe00a;',
			'icon-faviconretest' : '&#xe00b;',
			'icon-faviconrest' : '&#xe00c;',
			'icon-faviconresend' : '&#xe00d;',
			'icon-faviconrecon' : '&#xe00f;',
			'icon-faviconreburp' : '&#xe010;',
			'icon-faviconpublic' : '&#xe011;',
			'icon-faviconprojects' : '&#xe012;',
			'icon-faviconfoundation' : '&#xe014;',
			'icon-faviconhttpview' : '&#xe015;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};