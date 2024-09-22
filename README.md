# todo-nodejs-app
A simple app for create, read, update, and delete todo items using NodeJS

## Main tools
* Node JS (Version: 20.17.0)
* MySQL (Version: 10.4.24-MariaDB)
* eJs Templating Engine

## Front End Libraries (Other than dependencies in package.json file)
* Bootstrap (Version: 4.6.2)
* Sweetalert2
* jQUery (Version: 3.5.1)
* Font Awesome (Version: 4.7.0)

## Database Configuration

[config.json file](https://github.com/praghubanshi12/todo-nodejs-app/blob/main/config.json)

> Setup user, password for mysql. And, create database named **todo_app_pranaya**
```
{
  "dev": {
    ...,
    "db": {
        ...,
        "mysql": {
            "user": "your_user_name",
            "password": "your_password",
            "dbName": "todo_app_pranaya"
        }
    }    
  }
}
```
## System Configuration

* The default port is set to 8081. You can change it from [config.json file](https://github.com/praghubanshi12/todo-nodejs-app/blob/main/config.json) as well
* Please hit **npm run start** command after database configuration, and installing all the [packages](https://github.com/praghubanshi12/todo-nodejs-app/blob/main/package.json) for running this application

Links available are
* **Dashboard Page** [http://localhost:8081](http://localhost:8081)
* **Todo items list** [http://localhost:8081/todo](http://localhost:8081/todo)
* **Todo items create** [http://localhost:8081/todo/create](http://localhost:8081/todo/create)

## Main UI Features
* Create, List pages
* Edit, Delete Popup modals
* Filter Todo items list by Done, and Upcoming
* Create single/multiple items for a single date
* Notifications (sweetalert2) messages

## Technical features used
* Client / Server side Validation on create, and edit todo items.
* API Routing
* Database Schema in MySQL using Serialize JS library
* MVC Architecture
* Error handling

## Extra Features
* An option to add dummy data from dashboard in case of no records in database.

## API documentation

* (GET) http://localhost:8081/api/todo?filter=
  * filter=done/upcoming
  * **Description** : fetch all todo items 
  * **Response** : {data: Array<{name: string, shortDescription: string, date: date, time: time}>, filterCounts: {all: integer, done: integer, upcoming: integer} }
 
* (GET) http://localhost:8081/api/todo/filterCounts
  * **Description** : fetch counts for all/done/upcoming todo items
  * **Response** :  {all: integer, done: integer, upcoming: integer}

* (GET) http://localhost:8081/api/todo/:id
  * **Description** : fetch todo item details by id
  * **Response** :  {name: string, shortDescription: string, date: date, time: time}

* (POST) http://localhost:8081/api/todo
  * **Description** : creating multiple todo items
  * **FormBody** : Array<{name: string, shortDescription: string, date: date, time: time}>
  * **Response** :  {message: string}
 
* (PUT) http://localhost:8081/api/todo
  * **Description** : updating todo item
  * **FormBody** : Array<{id: biginteger, name: string, shortDescription: string, date: date, time: time}>
  * **Response** :  {data: Array<{name: string, shortDescription: string, date: date, time: time}>, filterCounts: {all: integer, done: integer, upcoming: integer}, message: string}
 
* (DELETE) http://localhost:8081/api/todo/:id
  * **Description** : deleting todo item
  * **Response** :  {data: Array<{name: string, shortDescription: string, date: date, time: time}>, filterCounts: {all: integer, done: integer, upcoming: integer}, message: string}
 
* (DELETE) http://localhost:8081/api/todo/deleteForDate/:date
  * **Description** : deleting todo items for specific date
  * **Response** :  {data: Array<{name: string, shortDescription: string, date: date, time: time}>, filterCounts: {all: integer, done: integer, upcoming: integer}, message: string}

## Some screenshots

![Screenshot 2024-09-23 012513](https://github.com/user-attachments/assets/516aaf00-7491-4e2b-9387-210f197bdd9d)
![Screenshot 2024-09-23 012545](https://github.com/user-attachments/assets/a00f4bbd-bf42-4bf0-82e7-992865755c10)
![Screenshot 2024-09-23 012607](https://github.com/user-attachments/assets/1831ed35-f666-4c52-af13-075464a1ac5c)
![Screenshot 2024-09-23 012632](https://github.com/user-attachments/assets/3f2b1900-6703-4ea2-a9a5-a14427917a67)
![Screenshot 2024-09-23 012756](https://github.com/user-attachments/assets/b0888d69-71ed-4d8f-ad9f-c8ee6aa6db59)
![Screenshot 2024-09-23 012816](https://github.com/user-attachments/assets/b07c1f5e-f865-4af3-993f-e23f0c89de69)
![Screenshot 2024-09-23 012842](https://github.com/user-attachments/assets/beb78cea-ee1f-489c-956b-80aea95478dd)


