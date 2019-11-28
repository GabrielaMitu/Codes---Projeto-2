document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projeto2-b7b4f.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    console.log(context)
    coDesReplace('.section-menu', context)

  })


  db.download('/', function(data) {
    context = data
    coDesReplace('.nav', context)
})

  db.download('/', function(data) {
    context = data
    coDesReplace('.nav2', context)
})

  })

