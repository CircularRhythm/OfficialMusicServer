var fs = require("fs")

var input = "./in.bmson"

var file = fs.readFileSync(input, 'utf8')
var data = JSON.parse(file)

data.sound_channels.forEach(function(e) {
  e.notes.forEach(function(e) {
    e.y += 960
  })
})

fs.writeFileSync("out.bmson", JSON.stringify(data))
