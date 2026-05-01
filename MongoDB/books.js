const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/amazon").then(() => {
  console.log("Connected Sucessfully To An Amazon Database");
});

let bookSchema = moongose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    immutable: true,
    maxlength: 5,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Book = moongose.model("Bookinfo", bookSchema);
// let Book1 = new Book({
//   title: "Rich Dad Poor Dad",
//   author: "Vishnu Mutrak",
//   price: 700,
// });

// // Book1.save();

// let Book2 = new Book({
//   title: "Hari",
//   author: "Vishnu Mutrak",
//   price: 700,
// });
// Book2.save();

// let Book3 = new Book({
//   title: "Priya",
//   price: 700,
// });
// Book3.save();

Book.findByIdAndUpdate("69eddaed436ab0da5c80877a", {
  title: "Hari Ji",
}).then((res) => {
  console.log(res);
});
