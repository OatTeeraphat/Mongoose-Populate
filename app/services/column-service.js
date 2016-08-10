var mock = require( __base + 'app/models/mock' );

module.exports.ColumnService = {

	getRecentCol: function(skip, limit){
		if(skip && limit) return mock.columns.sort(recentColUpdateCompare).slice(skip).slice(0, limit);
		else return mock.columns.sort(recentColUpdateCompare);
	},

	getColByPubId: function(publisherId,skip, limit){
		return findColByPubId(mock.publishers, publisherId).sort(recentColUpdateCompare).slice(skip).slice(0, limit);
	}
};


function recentColUpdateCompare(a, b){
  if(a.updated > b.updated) return -1;
  else if (a.updated < b.updated) return 1;
  else return 0;
}

function findColByPubId(pubs, publisherId){

	for(var i=0; i <= pubs.length-1 ; i++ ){
		var pub = pubs[i];
		if(pub._id === parseInt(publisherId))
			return pub.column;
		}
	}
