
(function () {

    /**
    * CHECK IF STRING IS JSON
    * @param str
    * @return bool true | false
    */
    function isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    /**
    * INIT
    */
    function init($){
    var j = $('#DaiExtendedData').val();

    if ( isJson( j )){
      var json = $.parseJSON(j);
        $(json).each(function(i,val){
            $.each(val,function(k,v){

                if (typeof v === 'object'){
                    var mapped = $.map(v, function(e,k) { return k+': '+e });
                    mapped = mapped.join('<br>');
                    $('div.more').append('<dt>'+k.replace("[]","")+'</dt><dd>'+decodeURIComponent(mapped)+'</dd>');
                } else {
                    $('div.more').append('<dt>'+k.replace("[]","")+'</dt><dd>'+decodeURIComponent(v)+'</dd>');
                }
                
            
            });
        });    
    // more space for metadata
    $( "#DaiJsonData" ).hide().next('dd').hide();
    $('.dl-horizontal dt').css({'width':'215px'});
    $('.dl-horizontal dd').css({'margin-left':'230px'});
    }
 
    // Number Format scale
    var formatScale = $( "dt:contains('Original source scale')" ).next('dd');
    var formatScaleText = formatScale.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") ;
    formatScale.text( formatScaleText );

    // Reorder Elements
    var subtitle = $( "dt:contains('Subtitle')" );
    var subdesc = subtitle.next('dd');
    var title = $( "#afterTitle" );
    subdesc.insertAfter(title);
    subtitle.insertAfter(title);

    // Reorder Elements
    var subVersion = $( "dt:contains('Version history')" );
    var subVersionText = subVersion.next('dd');
    var version = $( "#afterVersion" );
    subVersionText.insertAfter(version);
    subVersion.insertAfter(version);
       
    // hide fields
    $( "#sprache" ).hide().next('dd').hide();
    $( "#dcategory" ).hide().next('dd').hide();
    $( "dt:contains('Ausgabe')" ).html('Version');
}
    
jQuery(document).ready(init);
})(jQuery);
