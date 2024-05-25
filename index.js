const express = require("express");
const app = express();
const port = 3001;

const {getPersonajesComic, getPersonajesComicById} = require("./controllers/comic.controller")


app.get("/", getPersonajesComic);

app.get("/", getPersonajesComicById)


app.listen(port, () => {
    console.log(`Conectado exitosamente el puerto ${port}`)
});
