var mock = require( __base +'app/models/mock');

module.exports.ArticleService = {

	getRecentArt: function(skip, limit){
		if(skip && limit) return mock.columns.sort(recentColUpdateCompare).slice(skip).slice(0, limit);
		///else return mock.articles;
		else return mock.articles.sort(recentColUpdateCompare);
	},

	getArtByColId: function(columnId,skip, limit){
		return findArtByColId(mock.columns, columnId).sort(recentColUpdateCompare).slice(skip).slice(0, limit);
	}
};


function recentColUpdateCompare(a, b){
  if(a.updated > b.updated) return -1;
  else if (a.updated < b.updated) return 1;
  else return 0;
}

function findArtByColId(cols, columnId){

	for(var i=0; i <= cols.length-1 ; i++ ){
		var col = cols[i];
		if(col._id === parseInt(columnId))
			return col.articles;
		}
	}
