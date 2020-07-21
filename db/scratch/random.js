
let done = true

window.addEventListener('load', () => {




    app.get("/personnel", (req, res) => {
        collection.find().aggregate([{ $sample: { size: 1 } }])((error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    });


    

  
    

   

        
    
    })



db.collection.count( function(err, count){
    db.collection.distinct( "_id" , function( err, result) {
        if (err)
            res.send(err)
        var randomId = result[Math.floor(Math.random() * (count-1))]
        db.collection.findOne( { _id: randomId } , function( err, result) {
            if (err)
                res.send(err)
            console.log(result)
        })
    })
})
