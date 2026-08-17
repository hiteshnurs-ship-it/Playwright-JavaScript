```groovy
pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo '===== CHECKING OUT SOURCE CODE ====='
            }
        }

        stage('Environment') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'call npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'call npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'call npx playwright test'
            }
        }
    }

    post {
        always {
            echo '===== PLAYWRIGHT PIPELINE COMPLETED ====='
        }

        success {
            echo '===== ALL PLAYWRIGHT TESTS PASSED ====='
        }

        failure {
            echo '===== PLAYWRIGHT TESTS FAILED ====='
        }
    }
}
```
