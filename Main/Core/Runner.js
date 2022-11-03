const Express = require("express")
const App = Express()
const Path = require("path")
const Middleware = require("middleware")

var Port = 8080
var RootDirectory = Path.resolve("./")

var MainFolder = RootDirectory + "/Main"
var PagesFolder = MainFolder + "/Pages"
var AssetsFolder = MainFolder + "/Assets"

App.use(Express.static(AssetsFolder))

App.use((Request, Response, Next) => {
  console.log("-------------------- \n " + "Request: \n Requested URL: '" + Request.url + "'")
  Next()
})

App.get("/", (Request, Response) => {
  Response.sendFile(Path.join(PagesFolder, "/Home.html"))
})

App.listen(Port)