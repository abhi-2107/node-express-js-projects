import db from "../utils/databaseUtils.js";

export class Home {
  constructor(houseName, description, price, location, rating, photoUrl, id) {
    this.houseName = houseName;
    this.price = parseFloat(price);
    this.location = location;
    this.rating = parseFloat(rating);
    this.photoUrl = photoUrl;
    this.description = description;
    this.id = id;
  }

  save() {
    if (this.id) {
      return db.execute(
        "UPDATE homes SET houseName=?, price=?, location=?, rating=?, photoUrl=?,description=? WHERE id=?",
        [
          this.houseName,
          this.price,
          this.location,
          this.rating,
          this.photoUrl,
          this.description,
          this.id,
        ]
      );
    } else {
      return db.execute(
        "INSERT INTO homes (houseName, description, price, location, rating, photoUrl) VALUES (?,?,?,?,?,?)",
        [
          this.houseName,
          this.description,
          this.price,
          this.location,
          this.rating,
          this.photoUrl,
        ]
      );
    }
  }

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(id) {
    return db.execute("SELECT * FROM homes WHERE id=?", [id]);
  }

  static deleteById(id) {
    console.log(id);
    return db.execute("DELETE FROM homes WHERE id=?", [id]);
  }
}
