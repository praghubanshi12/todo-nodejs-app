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



