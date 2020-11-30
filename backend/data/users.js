import bcrypt from "bcryptjs";

const users = [
  {
    name: "Amish Gadhia",
    email: "gadhiaamish@gmail.com",
    password: bcrypt.hashSync("amish123", 10),
    isAdmin: true,
  },
  {
    name: "Amisha Gadhia",
    email: "amishagadhia@gamil.com",
    password: bcrypt.hashSync("amisha123", 10),
  },
  {
    name: "Ayman Gadhia",
    email: "aymangadhia@gamil.com",
    password: bcrypt.hashSync("ayman123", 10),
  },
];

export default users;
