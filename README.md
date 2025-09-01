## Serverless REST API with DynamoDB and API Gateway

## Table of Content
- [Solution Overview](#solution-overview)
- [Architecture Diagram](#architecture-diagram)
- [AWS Services Used](#aws-services-used)
  - [Amazon API Gateway](#Amazon-API-Gateway)
  - [AWS Lambda](#aws-lambda)
  - [Amazon DynamoDB](#amazon-dynamodb)
  - [AWS IAM](#AWS-IAM)
  - [Amazon CloudWatch](#Amazon-CloudWatch)
  - [Amazon S3](#Amazon-S3)
- [WorkFlow](#WorkFlow)
- [Learning Outcomes](#Learning-Outcomes)
- [Demo Link](#demo-link)
- [Contact / Support](#contact--support)

 




# Solution Overview

**Description**
Develop a serverless REST API using Amazon API Gateway, AWS Lambda, and DynamoDB to manage a simple to-do list. The API allows users to create, read, update, and delete (CRUD) data without managing servers.


**Key AWS Services Used**

1. Amazon API Gateway: Exposes REST endpoints.
2. AWS Lambda: Handles API requests (CRUD operations).
3. Amazon DynamoDB: NoSQL database for storing records.
4. AWS IAM: Controls access via roles and permissions.
5. Amazon CloudWatch: Logs and monitors API activity.
6. S3: to host the front-end of your application 




# Architecture Diagram

![Architecture Diagram](https://github.com/noureldien2021/Project-2-Serverless-Image-Processing-with-S3-and-Lambda/blob/main/_Serverless%20Image%20Processing.jpeg?raw=true)

# AWS Services Used

#### Amazon-API-Gateway
1. Exposes RESTful endpoints for the front-end to interact with the backend  
2. Integrates seamlessly with AWS Lambda 

#### AWS Lambda
1. Executes the backend logic for all CRUD operations (Create, Read, Update, Delete)
2. Processes incoming requests from API Gateway and interacts with DynamoDB
3. **Requires IAM role permissions** to access the DynamoDB.

#### Amazon DynamoDB
1. Serves as a NoSQL database to store application data (To-Do items)
2. Provides fast and predictable performance for CRUD operations

#### AWS IAM
1. Grants Lambda functions the necessary permissions to interact with DynamoDB.
2. Follows the principle of least privilege to enhance security

#### Amazon CloudWatch
1. Monitors and logs all API requests and Lambda function executions.
2. Provides insights into application performance and latency
3. Helps in detecting errors, failures, and unusual activity in real time


#### Amazon S3
1. Hosts the front-end of the application (HTML, CSS, JavaScript)
2. Provides a highly available and durable storage solution for static files

# WorkFlow
1. Upload image to source S3 bucket.  
2. Lambda is triggered automatically.  
3. Image is processed (resize, watermark).  
4. Processed image is saved to destination bucket.  
5. Metadata is saved to DynamoDB (optional).  

# Learning Outcomes
1. Designing scalable, event-driven serverless applications.
2. Implementing API Gateway with Lambda for stateless execution
3. Using DynamoDB as a managed NoSQL database with best practices.
4. Securing APIs with IAM roles and resource policies.




# Demo Link

You can view the live demo of the Serverless Image Processing project here:  

<a href="https://drive.google.com/file/d/1hL2IYWyO8VBe94ezH_22tzpzFdHMNshr/view?usp=drive_link">
  <img src="https://github.com/noureldien2021/Project-2-Serverless-Image-Processing-with-S3-and-Lambda/blob/main/demo2.jpg?raw=true" alt="Demo Video" width="70"/>
</a>


# Contact / Support

For any questions or support regarding this project, you can reach me at:

- **Email:** noureldiensami2021@gmail.com
- **LinkedIn:** [Noureldin Sami](https://www.linkedin.com/in/noureldien-sami/)
- **Website:** [Noureldin Sami](https://noureldien-sami2024.netlify.app/)  
- **GitHub Issues:** [Open an Issue](https://github.com/noureldien2021/Project-2-Serverless-Image-Processing-with-S3-and-Lambda/issues)
 
