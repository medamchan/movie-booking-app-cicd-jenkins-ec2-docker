pipeline{
    agent any

    environement {
        CONTAINER_NAME = "nestjs-app"
        IMAGE_NAME = "nestjs-image"
        EMAIL = "mcvreddy280496@gmail.com"
        PORT = "3000"
    }

    stages{
        stage('Clone Repo'){
            echo 'Cloning the Repository'
            steps{
                git branch: 'main', 
                url: 'https://github.com/medamchan/movie-booking-app-cicd-jenkins-ec2-docker.git'
            }

        }

        stage('Build Docker Image'){
            echo 'Building Docker Image'
            steps{
                sh 'docker build -t $IMAGE_NAME'
            }
        }

        stage('Stop & Remove Previous Container'){
            echo 'Stopping & Removing Previous Containers'
            steps{
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true

                '''
            }
        }
        stage('Docker Container Run'){
            echo 'Running the Docker Container'
            steps{
                sh '''
                    docker run -d -p ${PORT}:${PORT} --name $CONTAINER_NAME

                '''
            }
        }
        stage('Send Email'){
            echo 'Sending Email'
            steps{
                emailtext(
                    subject: "NESTJS App Deployed Successfully on EC2"
                    body: "Your NESTJS App is Deployed and running! on http://54.209.202.194:${PORT}/"
                    to: "${EMAIL}"
                )
            }
        }
    }
}