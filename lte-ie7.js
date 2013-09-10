/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Font-Websecurify\'">' + entity + '</span>' + html;
	}
	var icons = {
			'websecurify-icon-faviconxmlfuzz' : '&#xe012;',
			'websecurify-icon-faviconwpscan' : '&#xe013;',
			'websecurify-icon-faviconwebsecurify' : '&#xe005;',
			'websecurify-icon-faviconscanner' : '&#xe006;',
			'websecurify-icon-faviconrforge' : '&#xe007;',
			'websecurify-icon-faviconretest' : '&#xe008;',
			'websecurify-icon-faviconrest' : '&#xe009;',
			'websecurify-icon-faviconresend' : '&#xe000;',
			'websecurify-icon-faviconrecon' : '&#xe001;',
			'websecurify-icon-faviconreburp' : '&#xe00f;',
			'websecurify-icon-faviconpublic' : '&#xe00a;',
			'websecurify-icon-faviconprojects' : '&#xe00b;',
			'websecurify-icon-faviconlaunch' : '&#xe00c;',
			'websecurify-icon-faviconjsonfuzz' : '&#xe00d;',
			'websecurify-icon-faviconhttpview' : '&#xe00e;',
			'websecurify-icon-faviconhaxor' : '&#xe010;',
			'websecurify-icon-faviconfoundation' : '&#xe011;',
			'websecurify-icon-faviconclassic' : '&#xe002;',
			'websecurify-icon-faviconbackframe' : '&#xe003;',
			'websecurify-icon-faviconarena' : '&#xe004;'
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
		c = c.match(/websecurify-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};