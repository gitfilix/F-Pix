/**
 * Created by FLX on 05.06.2015.
 */
// Browser Features we need
var features = ['canvas', 'rgba','borderradius', 'cssanimations', 'opacity', 'csstransforms3d' ];
//
var featurestest = [];
// test variable for essentials
var essentialfeatures = false;
// init app
$(document).ready(function(){

    for (i=0;i<features.length;i++){
        if ($('html').hasClass(features[i])){
            featurestest.push(true);
            essentialfeatures = true;
            //console.log(features[i]);
            //console.log("essentialfeatures: " +essentialfeatures);
        }else{
            essentialfeatures = false;
        }
    }



    // it is a touch -device ?
    if(Modernizr.touch){
        //alert("touch supported");
        touchdev = true;
    }

    // it is a Apple device?
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)){
        iosdev = true;
        //alert("iosdev device detection is: " +iosdev);
    }else{
        iosdev = false;
        console.log("iOS device detection is: "+iosdev);
    }


    // make a new instance of the object "app()"
    application = app()	//OOP:  instance is javascript CLASS Object
    // Launch app
    application.init()

});


// general function from outer scope (link teaser-module)
function goTo(x){
    application.goToAlbum(x);
}
