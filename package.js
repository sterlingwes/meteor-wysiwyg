Package.describe({
    summary: "WYSIWYG widget using Trumbowyg Editor"
});

Package.on_use(function(api) {
    
    api.use('standard-app-packages');
    api.use('external-file-loader');
    api.use('session-extras');
    
    api.add_files([
        'client/views/editor.html',
        'client/views/editor.js'
        
    ],'client');
    
});