pipeline {
    agent any

    stages {
        stage('Install Backend') {
            steps {
                sh 'cd backend && npm install'
            }
        }

        stage('Install Frontend') {
            steps {
                sh 'cd frontend && npm install'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'cd frontend && npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Docker Run Test') {
            steps {
                sh 'docker compose up -d'
                sh 'docker ps'
            }
        }
    }
}
