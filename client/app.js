const AWS = require('aws-sdk');
const queueUrl = ""; /* Add Your SQS Queue URL Here*/
const { Consumer } = require('sqs-consumer');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const rootDir = __dirname; /* Change Dir Path to where you want to save files */
AWS.config.loadFromPath(__dirname + '/config.json');


function getFile(bucket, object) {
  const params = {
    Bucket: bucket,
    Key: object,
  };
  const destination = rootDir + object;
  const fs = require('fs');
  const path = require('path');
  if(!fs.existsSync(path.dirname(destination))){
    fs.mkdirSync(path.dirname(destination));
  } 
  var file = require('fs').createWriteStream(destination);
  s3.getObject(params).createReadStream().pipe(file);
}

const app = Consumer.create({
  queueUrl: queueUrl,
  handleMessage: (message) => {
    console.log('Processing message: ', message);
    const data = JSON.parse(message.Body);
    console.log("Bucket: " + data.bucket);
    console.log("Object: " + data.object);
    getFile(data.bucket, data.object);
  }
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();