webpackJsonp(["app/js/open-course-manage/header/index"],{"6f71a7caad5b38655d0d":function(s,a,e){"use strict";$(".js-course-publish-btn").click(function(s){var a=$(s.target);cd.confirm({title:Translator.trans("course_set.manage.publish_title"),content:Translator.trans("course_set.manage.publish_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",function(){$.post(a.data("url"),function(s){s.result?(cd.message({type:"success",message:Translator.trans("course_set.manage.publish_success_hint")}),window.location.reload()):cd.message({type:"danger",message:s.message})})})})}},["6f71a7caad5b38655d0d"]);