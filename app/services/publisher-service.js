var mock = require( __base + 'app/models/mock' );

module.exports.PublisherService = {

	getRecentPub: function(skip, limit){
		return mock.publishers.sort(recentPubUpdateCompare).slice(skip).slice(0, limit);
	},

	getPubByPubName: function(PubName){
		return findPubByPubName(mock.publishers, PubName);
	},

	getPubByPub_id: function(Pub_id){
		return findPubByPub_id(mock.publishers, Pub_id);
	}
};


function recentPubUpdateCompare(a, b){
  if(a.updated > b.updated) return -1;
  else if (a.updated < b.updated) return 1;
  else return 0;
}

function findPubByPubName(pubs, PubName){

	for(var i=0; i <= pubs.length-1 ; i++ ){
		var pub = pubs[i];
		if(pub.PubName === PubName)
			return pub;
		}
}

function findPubByPub_id(pubs, Pub_id){

	for(var i=0; i <= pubs.length-1 ; i++ ){
		var pub = pubs[i];
		if(pub._id === parseInt(Pub_id))
			return pub;
		}
}
