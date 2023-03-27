const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/LAb6s')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  tieude : String,
  tailieu : String
},{
    collection: 'items'
});
const AccountModel = mongoose.model('items',AccountSchema)
module.exports=AccountModel