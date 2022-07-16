const {MongoClient} = require("mongodb");

// open mongoDB Compass and connect local mongodb connection or copy link from MongoDB Atlas
// https://www.mongodb.com/docs/manual/crud/
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
// your Database name
const dbName = 'School';

client.connect((error, client) => {
    if(error){
        return console.log(`Connection failed`);
    }
    const db = client.db(dbName);

    //! Read document (menampilkan)
    console.log(
        db
            .collection('collectionName')
            .find({result: 100})
            .toArray((error, result) => {
                if(error){
                    console.log(error);
                }
                console.log(result);
            })
    );

    // ! Update berdasarkan result, bisa juga dipakai key yang lain
    const updateProm = db.collection('collectionName').updateOne(
        {result:100},
        {
            $set:{
                nama: "updatethis",
                email: "narokko"
            }
        }
    );
    // ambil Promise
    updateProm.then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });

    console.log(
        db.collection('collectionName').find({result:100}).toArray((error, result) => {
            console.log(result);
        })
    );

    //! Mengubah data lebih dari 1 
    db.collection('collectionName').updateMany(
        {
            nama:"erikost"
        },
        {
            $set: {
                nama: "erikostops"
            }
        }
    )
    // bisa juga tanpa promise

    //! menambah lebih dari 1 data
    db.collection('collectionName').insertMany(
        [
            {
                nama: "erikost",
                email: "dandrof@gmail.com",
                result: 100
            },
            {
                nama: "podfdf",
                email: "dastirof",
                result: 145
            },
            {
                nama: "kinstong",
                email: "kingstong@gmail.com",
                result: 10
            }
        ],(error, result)=>{
            if(error){
                console.log(error);
            }
            console.log(result);
        }
    )

    //! menambah 1 data ke collection contoh
    db.collection('contoh').insertOne({
        nama: "nonast",
        email: "digarharu@gmail.com"
    }, (error, result)=>{
        if(error){
            return console.log('gagal menambahkan data');
        }
        console.log(result);
    });

    // ! Delete 1 data
    // db.collection('collectionName').deleteMany({ nama:"podfdf"})
    db.collection('collectionName').deleteMany({ nama:"podfdf"})
        .then((result) => {
            console.log(result)
        }).catch((Error)=>{
            console.log(Error);
        });

});