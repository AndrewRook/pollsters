var data_utils = {

    parseRow: function(row) {
	var parseDate = d3.timeParse("%m/%d/%Y");
	var parsed_row = {};
	parsed_row["approve"] = +row["approve"];
	parsed_row["disapprove"] = +row["disapprove"];
	parsed_row["enddate"] = parseDate(row["enddate"]);
	parsed_row["grade"] = row["grade"];
	parsed_row["pollster"] = row["pollster"];
	parsed_row["population"] = row["population"];
	parsed_row["samplesize"] = +row["samplesize"];
	parsed_row["startdate"] = parseDate(row["startdate"]);
	parsed_row["weight"] = +row["weight"];
	if (parsed_row["approve"] < min_rating) {
	    min_rating = parsed_row["approve"];
	}
	if (parsed_row["disapprove"] < min_rating) {
	    min_rating = parsed_row["disapprove"];
	}
	if (parsed_row["approve"] > max_rating) {
	    max_rating = parsed_row["approve"];
	}
	if (parsed_row["disapprove"] > max_rating) {
	    max_rating = parsed_row["disapprove"]
	}
	//console.log(parsed_row);
	return parsed_row; 
    },
}
