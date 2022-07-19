const http = require('http')

const options = {
    hostname: "localhost",
    port: 3000,
    path: '/produtos',
    headers: {
        'Accept': "application/json"
    }
}
http.get(options, (res) => {
    console.log(res.statusCode);
    
    res.on('data', function(body){
        console.log(`Body ${body}`)
    })
})