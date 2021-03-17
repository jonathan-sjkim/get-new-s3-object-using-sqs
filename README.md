# Sync new S3 bucket objects to Local Machine
## Overview 
To sync [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) bucket to local environment, local machine needs to informed when S3 bucket gets new objects. To achive this goal with simple method, I used [Amazon SQS](https://aws.amazon.com/sqs/?nc1=h_ls) to inform that the new bucket uploaded and get the new bucket to local machine. I used [Amazon SQS FIFO Queue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html) to avoid losing any messages.

When S3 bucket gets new object, Lambda will trigger by PUT event and Lambda function will send messages to FIFO queue with added bucket name and key. client will receive the new bucket name and key from queue and client will get object from S3 bucket.

## Architecutre
![architecture](https://user-images.githubusercontent.com/33510681/110249302-ea818980-7fb8-11eb-990f-394a262c88db.png)

*IMPORTANT NOTE: Deploying this demo application in your AWS account will create and consume AWS resources, which will cost money.*
*IMPORTANT NOTE: This project is not for production usage.*
