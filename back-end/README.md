# Back-end #

## Starting the project ## 

First of all use `npm install` in order to install all the necessary dependencies.

Second, create the `.env` file on the main `back-end`'s project folder. \
The `.env` file should look similar with this:
```
// port on witch the back-end server will run
PORT=5000

// resource api root for users and photos
RESOURCES_API=https://jsonplaceholder.typicode.com

// limiting communication and availability only to the client app
CORS_FRONT_END=http://localhost:3000

```

After installing the dependencies and creating the `.env` file, you should build the typescript project, by using `npm run tsc`.

Afterwards, you can start the project by using `npm start`.

## APIs ##
- `GET` `/api/v1/users`: provides a json that with 10 users `{id, name, score}`.
- `GET` `/api/v1/photos`: provides a json with up to 500 picture links `{{"totalResults":5000,"totalPages":1,"currentPages":1,"data":[{"albumId","id","title","url","thumbnailUrl"}...]}`. Can be used with the following query string parameters:
  - page : used for pagination
  - limit : used for pagination
  - searchtext: filter results after title containg `searchtext`
  - albumid: filter results after `albumid`
  - ord: order the list with `asc` and `desc`