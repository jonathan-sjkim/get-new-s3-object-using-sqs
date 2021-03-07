var AWS = require('aws-sdk');
var queueUrl = "";

var sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

exports.handler = function(event, context, callback) {
    const bucket = event.Records[0].s3.bucket.name;
    const object = event.Records[0].s3.object.key;
    let code = 200;
    let message = null;
    const sqsMsg = {
        "bucket":bucket,
        "object": object,
    }
    console.log(bucket + "/" + object);

    var params = {
        MessageBody:JSON.stringify(sqsMsg),
        MessageGroupId:"gid3876",
        QueueUrl: queueUrl,
    }


    sqs.sendMessage(params, function(err, data) {
        if (err) {
            code = 400;
            message = err;
            console.log("ERROR:", err)
        }
        else {
            code = 200;
            message = "new log file [" + bucket + "/" + object + "] uploaded";
            console.log("SUCCESS: ", data);
        }
    });
    const response = {
        statusCode: code,
        body: JSON.stringify({ message: message }),
    };
    callback(null, response);
};
