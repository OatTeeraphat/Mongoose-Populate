var mock = require('./mock-data');

function recentColUpdateCompare(a, b){
  if(a.updated > b.updated) return -1;
  else if (a.updated < b.updated) return 1;
  else return 0;
}

function findColByPublisherId(cols, publisherId){
	for(var i=0, col = cols[i]; i<cols.length; i++){
		if(col._publisher._id === parseInt(publisherId)) return col;
	}
	return ;
}

module.exports.ColumnService = {
	getRecentColumns: function(numOfCols){
		if(numOfCols) return mock.columns.sort(recentColUpdateCompare).slice(0, numOfCols);
		else return mock.columns.sort(recentColUpdateCompare);
	},

	getPublisherColumns: function(publisherId){
		return findColByPublisherId(mock.columns, publisherId);
	}
};