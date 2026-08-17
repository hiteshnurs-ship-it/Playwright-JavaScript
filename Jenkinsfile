pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo '===== CHECKOUT ====='
            }
        }

        stage('Node Version') {
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
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

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