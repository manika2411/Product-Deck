pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/manika2411/Product-Deck.git'
            }
        }

        stage('Install Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'cd backend && npm install'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'cd frontend && npm install && npm run build'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                echo "Will run when SonarQube is connected"
            }
        }

        stage('Run Selenium Tests') {
            steps {
                echo "Will run after Selenium setup"
            }
        }
    }
}
