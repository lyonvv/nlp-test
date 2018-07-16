var natural = require('natural');
var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");
var classifier = new natural.BayesClassifier();
var jsonArray = require('./training.json');
var tokenizer = new natural.WordTokenizer();



var classifierSentiment = (text) => {


natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
console.log(classifier.getClassifications((text)));

});

};



module.exports.classifierSentiment = classifierSentiment;
