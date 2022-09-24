const dynamo = require("dynamoose")
const { Document } = require("dynamoose/dist/Document")
const aws = require("aws-sdk")
aws.config.region = "ap-southeast-1"



dynamo.aws.ddb.local("http://localhost:8000")


const schema = new dynamo.Schema({
    "id": String,
    "age": Number
}, {
    "saveUnknown": true,
    "timestamps": true
});

const sampleDB = dynamo.model("sample-db", schema)
console.log(sampleDB)