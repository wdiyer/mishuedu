webpackJsonp(["app/js/material-lib/document-player/index"],{"37092401f34d80ed9e30":function(e,t,a){"use strict";var i=a("e3591734a7ec9a6a6c56"),l=function(e){return e&&e.__esModule?e:{default:e}}(i),n=$("#document-player"),r=n.data("params");new l.default({element:"#document-player",swfUrl:r.swf,pdfUrl:r.pdf})},e3591734a7ec9a6a6c56:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a("7ab4a89ebadbfdecc2bf"),n=i(l),r=a("4602c3f5fe7ad9e3e91d"),s=i(r),d=a("c04c1b91e3806f24595a"),o=i(d);a("9a5c59a43068776403d1");var f=function(){function e(t){var a=t.element,i=t.swfUrl,l=t.pdfUrl,r=t.watermarkOptions,s=t.canCopy;(0,n.default)(this,e),this.element=$(a),this.swfUrl=i||"",this.pdfUrl=l||"",this.swfPlayerWidth="100%",this.swfPlayerHeight="100%",this.swfPlayerUrl="",this.watermarkOptions=r||"",this.canCopy=s||!1,this.init()}return(0,s.default)(e,[{key:"init",value:function(){this.isSupportHtml5()&&!this.isIE9()?this.initPDFJSViewer():this.initSwfViewer(),this.onFullScreen()}},{key:"onFullScreen",value:function(e){window.onmessage=function(e){if(null!=e&&void 0!=e){var t=e.data;if("boolean"==typeof t){var a=$("#task-content-iframe",window.parent.document);t?(a.removeClass("screen-full"),a.width("100%")):(a.addClass("screen-full"),a.width(window.document.body.offsetWidth+"px"))}}}}},{key:"isIE9",value:function(){return-1!=navigator.appVersion.indexOf("MSIE 9.")}},{key:"isSupportHtml5",value:function(){return $.support.leadingWhitespace}},{key:"initPDFJSViewer",value:function(){$("html").attr("dir","ltr");var e=app.cloudOldDocumentSdkUrl+"#"+this.pdfUrl;this.canCopy||(e+="#false");var t='<iframe id="doc-pdf-player" class="task-content-iframe" \n     src="'+e+'" style="width:100%;height:100%;border:0px" \n     allowfullscreen="" webkitallowfullscreen="">\n      </iframe>';this.element.append(t),this.addWatermark()}},{key:"initSwfViewer",value:function(){$.html('<div id="website"><p align="center" class="style1">'+Translator.trans("site.flash_not_install_hint")+"</p></div>");var e={doc_url:decodeURI(this.swfUrl.value)},t={bgcolor:"#efefef",allowFullScreen:!0,wmode:"window",allowNetworking:"all",allowscriptaccess:"always",autoPlay:!1},a={id:"website"};o.default.embedSWF(this.swfPlayerUrl,"website",this.swfPlayerWidth,this.swfPlayerHeight,"9.0.45",null,e,t,a),this.addWatermark()}},{key:"addWatermark",value:function(){this.watermarkOptions&&this.element.WaterMark(this.watermarkOptions)}}]),e}();t.default=f}},["37092401f34d80ed9e30"]);