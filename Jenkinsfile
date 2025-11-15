pipeline {
    agent any

    tools {
        nodejs "node22"
    }

    stages {

        stage('Check Node Version') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                bat 'cd backend && npm install'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                bat 'cd frontend && npm install'
            }
        }

        stage('Build Frontend') {
            steps {
                bat 'cd frontend && npm run build'
            }
        }

        stage('SonarQube Analysis') {
    steps {
        withSonarQubeEnv('sonar-local') {
            withEnv(["JAVA_HOME=${tool 'jdk17'}", "PATH+JDK=${tool 'jdk17'}\\bin"]) {
                bat "\"${tool 'sonar-scanner'}\\bin\\sonar-scanner.bat\""
            }
        }
    }
}


        stage('Docker Build') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Docker Run') {
            steps {
                bat 'docker compose up -d'
                bat 'docker ps'
            }
        }
    }
}
