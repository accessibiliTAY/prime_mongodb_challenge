db.bios.find({awards:{$exists:true} })
db.bios.find({awards:{$exists:false} })
 db.bios.find({$or: [{contribs: "OOP"}, {contribs: "UNIX"}]}).pretty()
db.bios.find({awards:{$elemMatch:{award:"Turing Award"}}}).pretty()
.bios.find({$and: [{_id:{$lt:7}}, {_id:{$gt:3}}]}).pretty()

    db.bios.find({$and: [{birth:{$exists:true} }, {death:{$exists:false} }]}).pretty()
