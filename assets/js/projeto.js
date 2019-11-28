document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = params['pai']


  let db = coDesConnect('https://projeto2-b7b4f.firebaseio.com/')

  db.download('/', function(data) {

    context = data['portfolio'][value2]['projetos'][value]

    coDesReplace(".container1", context)

    console.log(context)

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

