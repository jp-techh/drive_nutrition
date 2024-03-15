//To Run data base
download and install mongodb server
1. open cmd
2. cd int mongodb server folder: C:\Program Files\MongoDB\Server\7.0\bin
3. run "mongod.exe"

//To Run backend
1. download apache-maven-3.3.9-bin.tar.gz file from https://maven.apache.org/download.cgi
2. copy the folder under c:\Program Files
3.set variables as this: M2_HOME ----- C:\Program Files\apache-maven-3.3.9 
                         M2 ----- C:\Program Files\apache-maven-3.3.9
add Path variable to this: ;C:\Program Files\apache-maven-3.3.9\bin
open cmd and cd into project backend folder and run  "mvn spring-boot:run"

//To Run frontend
1. download and install node.js
2. open cmd prompt
3. run "npm install -g typescript"
4. run "npm install -g @angular/cli"
5. cd into frontend code
6. run "npm install"
7. run "ng serve"
