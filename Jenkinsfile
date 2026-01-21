pipeline {
    agent any

    environment {
        CONTAINER_NAME = "nestjs-app"
        IMAGE_NAME = "nestjs-image"
        EMAIL = "mcvreddy280496@gmail.com"
        PORT = "3000"
    }

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Cloning the Repository'
                git branch: 'main', url: 'https://github.com/medamchan/movie-booking-app-cicd-jenkins-ec2-docker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker Image'
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage('Stop & Remove Previous Container') {
            steps {
                echo 'Stopping & Removing Previous Containers'
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Docker Container Run') {
            steps {
                echo 'Running the Docker Container'
                sh "docker run -d -p ${PORT}:${PORT} --name $CONTAINER_NAME $IMAGE_NAME"
            }
        }

        stage('Send Email') {
            steps {
                echo 'Sending Email'
                emailext(
                    subject: "NESTJS App Deployed Successfully on EC2 using Jenkins",
                    body: "Your NESTJS App is Deployed and running!",
                    to: "${EMAIL}"
                )
            }
        }
    }
}
