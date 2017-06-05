/* Function to remove empty cells from leaflet popup table */

function hideEmptyCols(table) {
    //count # of columns
    var numCols = $("th", table).length;
    for ( var i=1; i<=numCols; i++ ) {
        var empty = true;
        $("td:nth-child(" + i + ")", table).each(function(index, el) {
            if ( $(el).text() != "" ) {
                empty = false;
                return false; 
            }
        });
        if ( empty ) {
            $("td:nth-child(" + i + ")", table).hide(); //hide <td>'s
            $("th:nth-child(" + i + ")", table).hide(); //hide header <th>
        }
    }
}