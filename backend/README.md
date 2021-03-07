# S3 Sync Backend Side
## Description
When S3 gets new object, Lambda will trigger and send message to inform the new object is inserted.

## Start Manual
1. Create FIFO SQS
- `Content-based deduplication` must be enabled! 

2. Create Lambda Function
- Add S3 Event Trigger
- Copy index.js code and past to Lambda function and add queryUrl.
- Add SQS Write policy to Lambda function role

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/33510681/110253306-f414ec80-7fcc-11eb-8ede-e48a28e64298.gif)
