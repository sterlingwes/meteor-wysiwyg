Template.wysiwyg_editor.rendered = function() {

    Session.whenTrue(['hasWysiwygEditor','hasSanitizer'], function() {
        Meteor.setTimeout(function() {
            _.each($('.wygeditor').get(), function(w) {
                var editor = $(w);
                if(!("trumbowyg" in editor))
                    window.location.reload(0);  // shouldn't hit this
                else {
                    var btns = $.trumbowyg.btnsGrps;
                    editor.trumbowyg({
                        btns:   ['bold','italic','underline','|',btns.justify,'|',btns.lists,'|','link','insertImage']
                    });
                 }
            });
        }, 200);
    });
    Meteor.Loader.loadCss('/lib/wysiwyg/css/trumbowyg.css');
    Meteor.Loader.loadJs('/lib/wysiwyg/trumbowyg.min.js', function() {
        Session.set('hasWysiwygEditor', true);
    });
    Meteor.Loader.loadJs('/lib/sanitize/sanitize.js', function() {
        Session.set('hasSanitizer',true);
    });
};