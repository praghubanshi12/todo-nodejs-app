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

## Main UI Features
* Create, List pages
* Edit, Delete Popup modals
* Todo items list filtering by Done, and Upcoming
* Create single/multiple items for a single date
* Notifications (sweetalert2) messages

## Technical features used
* Client / Server side Validation on create, and edit todo items.
* API Routing
* Database Schema in MySQL using Serialize JS library
* MVC Architecture
* Error handling

## Extra Features
* An option to add dummy data in case of no records in database.



