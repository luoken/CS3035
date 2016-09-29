//array of restaurants you're going to print out.

/*
 var restaurants = [];
 restaurants.push([new TextCell("Bucco de\nBeppo"), new TextCell("$$$")]);
 restaurants.push([new TextCell("Mastro's Ocean\nClub"), new TextCell("$$$$")]);
 restaurants.push([new TextCell("Denny's"), new RTextCell("$")]);
 console.log(restaurants);
 */

function rowHeights(rows) {
    return rows.map(function(row) {
	return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
	}, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function(_, i) {
	return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
	}, 0);
    });
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);
    function drawLine(blocks, lineNo) {
	return blocks.map(function(block) {
            return block[lineNo];
	}).join(" ");
    }

    function drawRow(row, rowNum) {
	var blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
	});
	return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
	}).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
	result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
	return Math.max(width, line.length);
    }, 0);
};

TextCell.prototype.minHeight = function() {
    return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
	var line = this.text[i] || "";
	result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function UnderlinedCell(inner) {
    this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
	return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
	return keys.map(function(name) {
            var value = row[name];
            if (typeof value == "number")
		return new RTextCell(String(value));
            else
		return new TextCell(String(value));
	});
    });
    return [headers].concat(body);
}

function RTextCell(text) {
    TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);

RTextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
	var line = this.text[i] || "";
	result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};

//problem 1

function CenterTextCell(text){
    TextCell.call(this,text);
}

CenterTextCell.prototype = Object.create(TextCell.prototype);

CenterTextCell.prototype.draw = function(width, height){
    var result = [];
    for(var i = 0; i < height; i++){
	var line = this.text[i] || "";
	if((width-line.length)%2 == 0){
	    
	    result.push(repeat(" ", Math.floor((width-line.length)/2)) + line + repeat(" ", Math.floor((width - line.length)/2)));
	}
	else{
	    result.push(repeat(" ", Math.floor((width-line.length)/2))+ " " + line + repeat(" ", Math.floor((width - line.length)/2)));
	}
    }
    return result;
};

var restaurants = [];
restaurants.push([new CenterTextCell("Bucco de\nBeppo"), new CenterTextCell("$$$")]);
restaurants.push([new CenterTextCell("Mastro's Ocean\nClub"), new CenterTextCell("$$$$")]);
restaurants.push([new CenterTextCell("Denny's"), new CenterTextCell("$")]);
console.log(restaurants);


console.log(drawTable(restaurants));
