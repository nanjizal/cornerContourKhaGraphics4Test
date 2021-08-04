const project = new Project('CornerContour_graphics4');
project.addSources('Sources');
project.addSources('src');
project.addShaders('Shaders/**');
project.windowOptions.width = 1024;
project.windowOptions.height = 768;
project.addLibrary('fracs');
project.addLibrary('justPath');
project.addLibrary('cornerContour');
resolve( project );
