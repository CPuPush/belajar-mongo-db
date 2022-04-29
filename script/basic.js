// membuat database jika database name belum ada (jika sudah ada berarti hanya melakukan switch untuk menggunakan database tersebut)
// use mahasiswa

// menampilkan database
// show databases

//menghapus database
db.dropDatabase()

// mengambil nama database
db.getName()

/**membuat database mahasiswa tetapi jika dilakukan pengecheckan tidak ada */
/**database dibuat pertama kali ketika pembuatan collection pertama kali */



/**Database method untuk collection */
// membuat collection
db.createCollection("userOne")

// Mengambil semua nama collection
db.getCollectionNames()

// menampilkan info collection
db.getCollectionInfos()

// mendapatkan object collection
db.userOne
//atau
db.getCollection("userOne")


/**Collection method */
// menghapus collection userOne didatabase mahasiswa
db.userOne.drop()

// mengambil semua document dalam collection
db.userOne.find()

//

