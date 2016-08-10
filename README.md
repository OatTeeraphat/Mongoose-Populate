# Mockup data
dependencies 
* body-parser
* node.js
* express
* express-router
* mongoose
* morgan 
# Install node module
```sh
$ npm install
```
# run-windows CMD
```sh
$ set NODE_ENV=development
$ node server
```
# run osx CMD
```sh
$ sudo NODE_ENV=development node server &
```
# port80
```sh
localhost/mock >> all stringsify
localhost/mock!json >>all res.json

localhost/mock/user!id=1 >>user stringsify id=1
localhost/mock/user!json!id=1 >>all res.json >>user res.json id=1

```