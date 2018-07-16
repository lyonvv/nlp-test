
var yargs = require('yargs');

var classifiersentiment = require('./classifiersentiment');


var argv = yargs
.argv;

// for(var index = 0; index < jsonArray.length; index++)
// {
//   classifier.addDocument(JSON.stringify(jsonArray[index].Feedback), JSON.stringify(jsonArray[index].Category));
// }
//
// //
// //
//
// classifier.train();


// classifier.save('classifier.json', function(err, classifier) {
//
// });


classifiersentiment.classifierSentiment(argv._[0]);
