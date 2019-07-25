// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Cards = require("../models/Cards");

const bcryptSalt = 10;

mongoose
  .connect("mongodb://localhost/app", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt))
  }
];

let cards = [
  {
    title: "Clitoris",
    etymology:
      "Did you know that girls and boys have the same genitalia? ...well, we had. Until the 12th pregnancy week we have an identical genitalia. Does that mean we all had a small penis at one point? Yes and no. Maybe it was a giant clitoris..",

    description:
      "The clitoris is located at the beginning of the vulva. Did you know that she isn’t so small as you think? The clit is actually quite a big organ with two branches under the labias left and right. In those branches we have an erectile tissue called Corpus Cavernosum… wait. What?! Yes. You heard right. Maybe boys and girls are not that different in the end.",
    info:
      "More than 8000 sensory nerves are located on both the clitoris and the head of the penis. Since the clitoris head is much smaller than the penis head, the clitoris is much more sensible to touch. To hard stimulation can actually result to numbness or pain. It is just like scratching a mosquito bite. Scratch to hard and it results in pain."
  },
  {
    title: "Vestibulum vaginae",

    description:
      "The clitoris, female urethra and the genital opening is located in the “front yard” (Vestibulum vaginae) of the vulva. Some glands are located at the vestibulum vaginae to lubricate the delicate tissue."
  },
  {
    title: "Labia majora pudendi",
    description:
      "We want to introduce you to our beautiful airbags. The outer labias! They protect our super sensible and important female inner genitalia and for that, they are made of a lot of fat tissue. The labias have normal skin. That means, they are not immune to skin imperfections, like the skin on our faces.",

    info:
      "Big, small, asymmetric.. Our outer labia come in a lot of different forms - and every form is beautiful. By the way, did you know that the skin on the outer labia is a bit darker pigmented than the skin around it? The color usually starts to change when girls hit puberty."
  },
  {
    title: "Labia minora pudendi",
    description:
      "Our inner labias are more delicate and more sensitive than their outer counterpart. Their main function is to seal. When sexually aroused, the inner labias start to fill up with blood and expand. The inner labia are made of mucosa, different than the outer labia, which are made of normal skin. The inner labia can be creased and wrinkled.",
    info:
      "Creased, wrinkled, long and short. The inner labias can be sometimes longer than the outer labia. That is totally normal. Hello diversity!"
  },
  {
    title: "Hymen",
    description:
      "The hymen is a thin tissue. Not everyone has one. It is like ",
    info:
      "The hymen. So many stories. So many myths. Let’s bust those myths today. An intact hymen is NOT a sign for virginity. In fact, the hymen has the ability to stretch. Just sometimes, when the hymen lacks elasticity it rips. Some religions and societies makes us believe that the hymen is the most important part of us women and that we have to protect our virginity no matter what. Some women get hymen reconstruction just to keep up the illusion of virginity. It is scary that the false information about the hymen is still spread - and can result in death or loss of honor for the women."
  }
];

User.deleteMany()
  .then(() => {
    return User.create(users);
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });

Bodypart.insertMany()
  .then(() => {
    return Bodypart.create(bodypart);
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
