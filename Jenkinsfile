pipeline {
	agent any
	stages {
		stage('Clone stage') {
			steps {
				echo 'Start cicd'  
			}
		}
		stage('Restore packages'){
			steps {
				bat '"C:\\Program Files\\nodejs\\npm.cmd" install --prefer-offline --no-audit --force'
				bat '"C:\\Program Files\\nodejs\\npm.cmd" run export --force'
				bat 'C:\\Windows\\System32\\inetsrv\\appcmd stop site /site.name:Ecom_cms'
				sleep 5
				bat 'xcopy "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\vme_cms\\out" "E:\\Site\\MicroService\\cms" /h /i /c /k /e /r /y' 
				bat 'C:\\Windows\\System32\\inetsrv\\appcmd start site /site.name:Ecom_cms'
			}
		}
	}
}