// using mongoose , you can write same things with mongodb only but it will take more effort for the same work . mongoose simplifies it as it is a ODM (object document modal)
const MONGO_URL =
  "mongodb+srv://mepanchal30:root@cluster0.07la5kq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      _db = client.db("airbnb");
      console.log("connected to mongoDB");
      callback();
      // console.log(client);
    })
    .catch((err) => console.log("Error occured :" + err));
};

export const getDb = () => {
  if (!_db) {
    throw new Error("connection to mdb failed...");
  }
  return _db;
};

export default mongoConnect;
