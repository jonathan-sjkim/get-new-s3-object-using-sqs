# s3-sync-using-sqs-js
## Overview 
To sync S3 bucket to local environment, local machine needs to informed when S3 bucket gets new objects. To achive this goal with simple method, I used [Amazon SQS](https://aws.amazon.com/sqs/?nc1=h_ls) to inform that the new bucket uploaded and get the new bucket to local machine. the detail architecture is as below.

## Architecutre
![architecture](https://user-images.githubusercontent.com/33510681/110249302-ea818980-7fb8-11eb-990f-394a262c88db.png)
