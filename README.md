🚀 Hello World AWS (ECS + GitHub Actions)

🧩 Description

This is a simple Node.js project built with Express that displays the message “Hello World from AWS ECS and GitHub Actions 🚀”.
The goal is to demonstrate the complete automated deployment workflow from GitHub to AWS Fargate (ECS).

🏗️ Technologies Used

Node.js (v18)

Express.js

Docker

GitHub Actions

Amazon ECS (Fargate)

Amazon ECR

AWS IAM Roles

⚙️ Project Structure

📦 hello-world-aws
 ┣ 📜 app.js
 ┣ 📜 package.json
 ┣ 📜 Dockerfile
 ┣ 📜 ecs-task-def.json      ← ECS Task Definition
 ┣ 📜 README.md
 ┗ 📂 .github
    ┗ 📂 workflows
       ┗ 📜 deploy.yml



💻 How to Run Locally

Clone this repository:

git clone https://github.com/your_username/hello-world-aws.git
cd hello-world-aws


Install dependencies:

npm install


Run the project:

npm start


Open in your browser:
👉 http://localhost:3000

🐳 Building and Deploying with Docker

Build the image:

docker build -t hello-world-aws .


Run the container:

docker run -p 3000:3000 hello-world-aws


☁️ Deployment on AWS ECS with GitHub Actions

Every time a push is made to the repository, GitHub automatically triggers the deploy.yml workflow that:

Builds a new Docker image of the project.

Pushes it to Amazon ECR.

Updates the ECS service on Fargate to reflect the new changes.

The workflow file is located at:

.github/workflows/deploy.yml


🔐 GitHub Secrets Configuration

In Settings → Secrets and Variables → Actions, the following variables were added:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

AWS_SESSION_TOKEN

AWS_REGION (e.g., us-east-1)

ECR_REPOSITORY (e.g., karen123g/hello-world-aws)

🌍 Public Access

The project is deployed on ECS and can be accessed through the public IP assigned by AWS:
👉 http://44.195.48.191:3000/

👩‍💻 Author

Karen García
Project developed for the AWS Laboratory — Universidad Central del Ecuador
