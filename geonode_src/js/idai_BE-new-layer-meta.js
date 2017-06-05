(function ($) {
   
    /**
    * HTML FORM DEFINTION FOR ADDITIONAL ELEMENTS 
    */
    var $form = $("<div id='DAIExtended'></div>");
    var _html = `
            <div class="form-group DaiTitle"><h3>Title and Description</h3></div>

            <div class="form-group" id="DaiSubtitle">
               <label for="subtitle">Subtitle: </label>
               <div><input id="subtitle" name="Subtitle"  class="daiMetaData form-control has-popover" data-container="body" data-content="Subtitle for this resource." data-html="true" data-placement="right" type="text" maxlength="255" value="" data-reg=".+" data-original-title></div>
            </div>

            <div class="form-group" id="DaiAuthors">
               <label for="DaiAuthors">Author(s) </label>
               <div><input id="DaiAuthors" name="Author(s)"  class="daiMetaData form-control has-popover" data-container="body" data-content="List all authors and or groups involved in the production of this dataset. Use semicolon (;) to separate entries." data-html="true" data-placement="right" type="text" maxlength="255" value="" data-reg=".+" data-original-title></div>
            </div>


            <div class="form-group" id="DaiDataRecordGroup">
              <label for="DataRecordGroup">Data record group:</label>
              <div><select id="DataRecordGroup" multiple="multiple" name="Data Record Group[]" class="daiMetaData form-control has-popover" data-container="body" data-content="Working group or project designation of data author(s) if applicable." data-html="true">
                    <option>none</option> 
                    <option>DAI-Hinkel-Archive</option>
                    <option>Syrher</option>  
                  </select>
              </div>
            </div>

            <div class="form-group" id="DaiYearOfCreation">
               <label for="OriginalProductionDate">Original production date </label>
               <div><input id="OriginalProductionDate" name="Original production date" class="daiMetaData form-control has-popover" placeholder="2017, 2015-2017, unknown" data-container="body" title="For digital versions of paper originals: Year (or from-to range) of production of original source document(s)." data-html="true" data-placement="right" type="text" data-reg="((1|2)\\d{3}(-(1|2)\\d{3})?|unknown)"></div>
            </div>

            <div class="form-group">
              <label for="CategoryDominant">Category (dominant):</label>
              <div><select id="DaiCategoryDominant" name="Category (dominant)" class="daiMetaData form-control has-popover" data-container="body" data-content="Main/dominant category of this dataset." data-html="true" data-placement="right" >
                    <option disabled selected value> -- select an option -- </option>
                    <option>Archaeology</option>
                    <option>(Archaeo-)Pedology/Botany/Zoology</option>
                    <option>Historical/Political</option> 
                    <option>Topography/Hydrology</option> 
                    <option>Geology/Geomorphology/Geophysics</option> 
                    <option>Remote Sensing/Aerial Imagery</option> 
                    <option>Navigation/Tourism</option> 
                    <option>Cadastre/Infrastructure/Planning</option> 
                    <option>Other</option> 
                </select></div>
            </div>

          <div class="form-group">
            <label for="Daitags">Tags: </label>
            <select id="Daitags" multiple="multiple" name="Daitags[]" class="has-popover form-control daiMetaData" data-container="body" data-content="Choose one or more tags (contact administrator to create additional ones)." data-html="true" data-placement="right" size="2">
              <option value="Contains Hand Written Notes">Contains Hand Written Notes</option>
              <option value="Contains AMS Numbers">Contains AMS Numbers</option>
            </select>
          </div>


            <div class="form-group DaiTitle"><h3>Layer Attributes</h3></div>


            <div class="form-group" id="DaiOriginalAuthors">
               <label for="DaiOriginalAuthors">Original author(s)</label>
               <div><input id="DaiOriginalAuthors" name="Original author(s)"  class="daiMetaData form-control has-popover" data-container="body" data-content="List all persons and/or groups involved in producing the documents on which this dataset is based (such as original maps or airphotos). Use semicolon (;) to separate entries." data-html="true" data-placement="right" type="text" maxlength="255" value="" data-reg=".+" data-original-title></div>
            </div>

            <div class="form-group" id="DaiScaleOfSource">
              <label for="OriginalSourceScale">Original source scale: </label>
              <div><input id="OriginalSourceScale" name="Original source scale" type="text" data-container="body" data-content="Scale of original data source (e.g.paper map or air photo), as applicable. In case of varying scale, specify dominant/most common scale." data-html="true" data-placement="right"  data-reg="(^1:[0-9]{1,8}$|Not applicable)" placeholder="1:1, 1:500, Not applicable" class="daiMetaData form-control has-popover" /></div>
            </div>

            <div class="form-group" id="DaiProjectionOfSource">
              <label for="osrs">Original spatial reference system: </label>
              <div><input id="osrs" name="Original spatial reference system (SRS)" type="text" data-container="body" data-content="EPSG code ('EPSG:<number>) or complete WKT string of spatial reference system used by original data source, as applicable. See: www.spatialreference.org" data-html="true" data-placement="right" data-reg=".+" name="Original spatial reference system (SRS)" class="daiMetaData form-control has-popover" /></div>
            </div>

            <div class="form-group" id="DaiStatesOnLayer">
              <label for="GeographicalCoverage">Geographical coverage: </label>
              <div><input id="GeographicalCoverage" name="Geographical coverage" type="text" data-container="body" data-content="Political or other entities touched or covered by the extent of this dataset (e.g. names of states, municipalities or landmarks), both present or historical." data-html="true" data-placement="right" data-reg=".+" class="daiMetaData form-control has-popover" /></div>
            </div>

            <div class="form-group" id="DaiEstimatedAccuracy">
              <label for="EstimatedAccuracy">Accuracy (estimated):</label>
              <div><select id="EstimatedAccuracy" name="Accuracy (estimated)" data-container="body" class="daiMetaData form-control has-popover" data-content="Rough categorization of the locational accuracy of objects in this dataset. In case of varying accuracy, specify worst." data-html="true" data-placement="right">
                    <option disabled selected value> -- select an option -- </option>
                    <option>Centimetres or better</option>
                    <option>Decimetres</option>
                    <option>Metres</option>
                    <option>Hundreds of metres</option>
                    <option>Kilometres or worse</option>
                    <option>Unknown</option>
                  </select></div>
            </div>

            <div class="form-group" id="DaiVersion"><label>Version history:</label>
              <div class="versionContainer"><p class="versionNr" style="margin-top:6px;">Version 0: </p>
              <input id="versionfield" name="Version history[]" class="versionfield daiMetaData form-control has-popover" data-id="0" data-container="body" data-content="Provide a short description of what changed in this version. Also include a date and author information." data-html="true" data-placement="right" type="text" maxlength="255" data-reg=".+" value="Initial upload" data-original-title></div>
              <button type="button" class="addVersion btn btn-secondary" style="margin-top:15px">+</button>     
            </div>
            
 

          <div class="form-group DaiTitle"><h3>Usage and Links</h3></div>
            <div class="form-group" id="DaiSignatureIDaiWorld">
              <label for="SignatureIDaiWorld">iDAI.welt signature: </label>
              <div><input id="SignatureIDaiWorld" name="iDAI.welt signature"type="text" data-container="body" data-content="Signature IDai World" data-html="true" data-placement="right" data-reg=".+" placeholder="D-DAI-Z-Arch-FWH-4711" class="daiMetaData form-control has-popover" /></div>
            </div>

            <div class="form-group" id="DaiCopyrightLicense">
              <label for="CopyrightLicense">Copyright/license:</label>
                <div>
                  <select id="CopyrightLicense" name="Copyright/license" class="daiMetaData form-control has-popover" data-container="body" data-content="Select license for re-use and dissemination of this dataset." data-html="true" data-placement="right">
                    <option selected>Creative Commons (CC BY)</option>
                    <option>Unrestricted, public domain</option>
                    <option>All rights reserved</option>
                    <option>Other: contact author(s)</option>
                  </select>
                </div>
            </div>

            <div class="form-group" id="DaiCopyRightLinkiDaiObjects">
              <label for="CopyRightLinkiDaiobjects">Copyright link (iDAI.objects): </label>
              <div><input id="CopyRightLinkiDaiobjects" name="Copyright link (iDAI.objects)" type="text" data-container="body" data-container="body" data-content="Copyright Link" data-html="true" placeholder="http://www.example.com" data-reg="https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)" class="daiMetaData form-control has-popover" /></div>
            </div>


            <div class="form-group" id="DaiCopyRightLinkiDaiBibliography">
              <label for="CopyRightLinkiDai_bibliography">Copyright link (iDAI.bibliography): </label>
              <div><input id="CopyRightLinkiDai_bibliography" name="Copyright link (iDAI.bibliography)" data-content="Copyright Link" data-container="body" data-html="true" type="text" placeholder="http://www.example.com" data-reg="https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)" class="daiMetaData form-control has-popover" /></div>
            </div>

            <div class="form-group" id="DaiCitation">
              <label for="Citation">Citation:</label>
              <div>
                <select id="Citation" name="Citation" data-container="body" data-content="Text to use when citing this dataset in published work." data-html="true" class="daiMetaData form-control has-popover">
                  <option selected>No citation provided</option>
                  <option>Contact author(s) or DAI.</option>
                </select></div>
              </div>

            <div class="form-group" id="DaiCitationLinkiDaiObjects">
              <label for="CitationLinkiDai_objects">Citation link (iDAI.objects): </label>
              <div><input id="CitationLinkiDai_objects" name="Citation link (iDAI.objects)" type="text" data-content="Citation Link" data-container="body" data-html="true" placeholder="http://www.example.com" data-reg="https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)" class="daiMetaData form-control has-popover" /></div>
            </div>

            <div class="form-group" id="DaiitationLinkiDaiBibliography">
              <label for="CitationLinkiDai_bibliography">Citation link (iDAI.bibliography): </label>
              <div><input id="CitationLinkiDai_bibliography" name="Citation link (iDAI.bibliography)" type="text" data-container="body" data-content="Citation Link" data-html="true" placeholder="http://www.example.com" data-reg="https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)" class="daiMetaData form-control has-popover" /></div>
            </div>
   `;


    /**
    * SERIALIZE FORM DATA AS JSON OBJECT 
    * @param $form
    * @return json OR NULL
    */
    function getFormData($form){
        var unindexed_array = $form.serializeArray();
        for(var i in unindexed_array) {
                if(unindexed_array.hasOwnProperty(i)) {
                    $('[name="'+unindexed_array[i]['name']+'"][value="'+unindexed_array[i]['value']+'"]').each(function() {
                        $(this).attr('checked', true);
                    })
                }
            }
        var indexed_array = {};
        $.map(unindexed_array, function(n){
            if($.trim( n['value'] ).length){
              if(indexed_array[n['name']] !== undefined){
                   indexed_array[n['name']].push(n['value']);
              } else if(n['name'] !== undefined && n['name'].indexOf('[]') > -1){
                // arrays like Data Record Group
                indexed_array[n['name']] = new Array(n['value']);
              } else {
                // Normal fields like subtitle
                indexed_array[n['name']] = encodeURIComponent(n['value']).replace(/'/g, "%27");
              }
          }
        });

        // check if we have different Versions and overwrite Versions
        if ('Version history[]' in indexed_array){
          if($.isArray(indexed_array['Version history[]'])){
            var list = {};
            for(var t = 0; t < indexed_array['Version history[]'].length; t++) {
                  list['Version '+t] = indexed_array['Version history[]'][t];
            }
          }
            indexed_array['Version history[]'] = list;
            $('#id_resource-edition').val(Object.keys(list).length-1);
        }
          

        return (!$.isEmptyObject(indexed_array) ? JSON.stringify(indexed_array, null, 2) : '');
     }


    /**
    * SHOW WARNING ON WRONG REGEX
    * @param $this
    * @param $thisID
    * @param $thisTitle
    * @param $thisVal 
    * @param warning
    * @return void
    */
    function showWarning($this,$thisID,$thisVal, warning){
      if ( !warning || $this.val() == '' ){
        $this.removeClass("inputError").css('color', '#555');
        $("label[for='"+$thisID+"'] > span").remove();
      } else {
        $this.addClass("inputError").css('color', 'red');
        $("label[for='"+$thisID+"']").css('color:red');
        $("label[for='"+$thisID+"']:not(:has(.wrongFormat))")
        .css('color:red');
      }
    }


    /**
    * POPULATE FORM DATA
    * @param frm (Form ID)
    * @param data (json)
    * @return void
    */
    function populate(frm, data) {   
        $.each(data, function(key, value) {  

          var ctrl = $('[name="'+key+'"]');  
            
            switch(ctrl.prop("type")) { 
                case "radio": case "checkbox":   
                    ctrl.each(function() {
                        if($(this).attr('value') == value) $(this).attr("checked",value);
                    });   
                    break;  
               default:
                if(ctrl !== undefined)
                     if (ctrl.prop("tagName").toLowerCase() == 'select'){
                       if (ctrl.attr("multiple") && $.isArray(value))  
                         ctrl.val(value);
                    }
                    ctrl.val(decodeURIComponent(value));
            }  
        });  
    }

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
    * BIND INPUTS TO SERIALIZER
    * @return void
    */
    $(document).on('keyup change', '.daiMetaData', function(){ 
      var $this = $(this);
      var $thisID = $this.attr('id');
      var $thisVal = $this.val();
      var $thisReg = $this.data('reg');
      var regex = new RegExp($thisReg);
      !regex.test($thisVal) ? 
          showWarning($this,$thisID,$thisVal, true) :  
          showWarning($this,$thisID,$thisVal, false);

      var $form = $("div#DAIExtended input.daiMetaData:not(.inputError),div#DAIExtended select.daiMetaData");
      var data = getFormData($form);

      $('#id_resource-supplemental_information').text(data);
    });

    /**
    * BIND Version button to click / create new input
    * @return void
    */
    $(document).on('click', '.addVersion', function(){
        var lastVersionDiv = $('div#DaiVersion div.versionContainer:last');
        if($('input',lastVersionDiv).val() !== ''){
            var newVersionDiv = lastVersionDiv.clone().insertAfter(lastVersionDiv);
            var nextID = Number(lastVersionDiv.find('input').attr('data-id'))+1;
            
            newVersionDiv.find('.versionNr').html('Version ' + nextID);
            newVersionDiv.find('input').attr('data-id',nextID).val('');   
        } else {
          alert('Please fill in the version information first!');
        }
    
   });

    /**
    * Hide unwanted elements
    * @return void
    */
    function hideElements(){
    $('#div_id_resource-date,' +
      '#div_id_resource-date_type,' +
      '#div_id_resource-maintenance_frequency,' +
      '#div_id_resource-constraints_other,' +
      '#div_id_resource-language,' +
      '#div_id_resource-spatial_representation_type,' +
      '#div_id_resource-temporal_extent_start,' +
      '#div_id_resource-temporal_extent_end,' +
      '#div_id_resource-distribution_description,' +
      '#div_id_resource-data_quality_statement,' +
      '#div_id_resource-edition,' +
      '#div_id_resource-distribution_url,' +
      '#div_id_resource-thumbnail_url,' +
      '#div_id_resource-license,' +
      '#div_id_resource-keywords,' + 
      '#div_id_resource-restriction_code_type,' +
      '#div_id_resource-featured,' +
      '#div_id_resource-is_published,' + 
      '#div_id_resource-keywords,' + 
      '#div_id_resource-poc,' + 
      '#div_id_resource-metadata_author') 
     .hide();
       $("label:contains('Kategorie'),label:contains('Category')").parent().parent().hide();
    }

    function resortElements() {
      $('#div_id_resource-title').insertBefore('#DaiSubtitle');
      $('#div_id_resource-abstract').insertAfter('#DaiDaitags');
      $('#div_id_resource-regions').insertAfter('#DaiStatesOnLayer');
      $('#div_id_resource-regions').insertAfter('#DaiStatesOnLayer');
      $('#div_id_resource-supplemental_information').insertAfter('#DaiitationLinkiDaiBibliography');
    }


    /**
    * INIT
    * @desc If the content of additional information textfield is json
    *       we populate the input data based on the json object
    *       If it´s not json it means this layer has not been edited yet
    *       and the content is the former string. In this case we just
    *       fill the input #AdditionalInfo with this string and empty
    *       the textarea. In every case we format the textarea as readonly
    *       to prevent users change the json object
    */
    function init() {
     
      // hide unrelevant elements
      hideElements();
     
      // insert Form
      $form.append(_html);
      $("#div_id_resource-title").before($form);
     
      // Disable textarea
      $("#id_resource-supplemental_information").attr('readonly','readonly');
      // Translate existing tips
      $("#id_resource-supplemental_information").attr('data-content',"This is an automatically derived JSON representation of this dataset's metadata for internal use.");
      $("#id_resource-title").attr('data-content',"Title for this resource.");
      $("#id_resource-regions").attr('data-content',"Choose one or more regions.");
      $("#id_resource-purpose").attr('data-content',"Summary of the intentions with which the resource(s) was developed.");
      $("#id_resource-abstract").attr('data-content',"Brief narrative summary of the content of the resource(s)");
      // change order of elements
      resortElements()

      // Format Titles and input Size
      $('.DaiTitle').css({ 'margin-bottom': '15px', 'padding-bottom': '5px', 'border-bottom': '1px solid #ccc' });
      $('div.form-controls').removeClass('col-md-6').addClass('col-md-10');

      /** 
      *
      * Populate data based on json 
      *
      **/
      var addText = $('#id_resource-supplemental_information').text();
      if (isJson( addText )){
        var jsonText = $.parseJSON( addText );
        populate('div#DAIExtended', jsonText );

        $('#id_resource-supplemental_information').text('');
          if( jsonText.hasOwnProperty('Version history[]') ){
           
            var oldContainer = $('.versionContainer');
           
            var counter = 0;
            for (var key in  jsonText['Version history[]'] ) {
                var newContainerTmpl = oldContainer.clone();
                $('input.versionfield',newContainerTmpl).val(jsonText['Version history[]'][key]);
                $('input.versionfield',newContainerTmpl).attr('data-id', counter);
                $('p.versionNr',newContainerTmpl).html(key);

                $('#DaiVersion .addVersion').before(newContainerTmpl);
                counter = counter+1;
              }
            oldContainer.remove();
          }
      } else {
        var AdditionalStartText = $('#id_resource-supplemental_information').text();
        $('#AdditionalInfo').val(AdditionalStartText);

      }

      // reformat regions for select2

     $('#id_resource-regions option').each(function(){
        var $this = $(this);
        $this.text($this.text().replace(/_+\s/,""));    
     });

     $("#id_resource-regions").select2();
     $('#s2id_id_resource-regions').css({
	     'border':'none',
	     'padding': '0'
     }).attr('data-content',"Choose one or more regions.").attr('data-container','body');

     $('.select2-container-multi .select2-choices .select2-search-choice').css({
 	      'margin':'5px 0 3px 5px'
     }); 	

      // Mimic first user Input
      $('input[value="17"]').prop("checked", true);
      var $start = $("div#DAIExtended input.daiMetaData:not(.inputError),div#DAIExtended select.daiMetaData");
      var data = getFormData($start);
      $('#id_resource-supplemental_information').text(data);

      // reinit popover
      $('.has-popover').popover({'trigger':'hover'});

      // Warn on page leave
      var warnBeforeLeave=1;

      window.onbeforeunload = confirmExit;
      function confirmExit() {
          if (warnBeforeLeave == 1) {
              return "You have not saved the metadata form. Do you really wish to leave the page?";
          }
      }
      $("input[type='submit']").click(function() {
          warnBeforeLeave = 0;
      });

    }

    jQuery(document).ready(init);
  
})(jQuery);
