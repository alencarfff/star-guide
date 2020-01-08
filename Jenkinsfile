pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('checkout') {
            steps {
                //git checkout
            }
        }
        stage('build') {
            steps {
                sh 'npm install'
                sh 'ng build --base-href "https://alencarfff.github.io/star-guide/" --deploy-url "/star-guide/"'
            }
        }
        stage('test'){
            steps {
                sh 'npm test'
            }
        }
        state('push'){
            steps {
                sh 'ngh --message="fixed movie details style" --branch="master"'
            }
        }
    }
}
