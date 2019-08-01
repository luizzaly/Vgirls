// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Bodypart = require("../models/Bodypart");
const Gyn = require("../models/Gyn");

const bcryptSalt = 10;

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/app", {
    useNewUrlParser: true
  })
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

let bodypart = [
  {
    title: "Clitoris",
    embryology:
      "Did you know that girls and boys have the same genitalia? ...well, we had. Until the 12th pregnancy week we have an identical genitalia. Does that mean we all had a small penis at one point? Yes and no. Maybe it was a giant clitoris..",

    description:
      "The clitoris is located at the beginning of the vulva. Did you know that she isn’t so small as you think? The clit is actually quite a big organ with two branches under the labias left and right. In those branches we have an erectile tissue called Corpus Cavernosum… wait. What?! Yes. You heard right. Maybe boys and girls are not that different in the end.",
    info:
      "More than 8000 sensory nerves are located on both the clitoris and the head of the penis. Since the clitoris head is much smaller than the penis head, the clitoris is much more sensible to touch. To hard stimulation can actually result to numbness or pain. It is just like scratching a mosquito bite. Scratch to hard and it results in pain."
  },
  {
    title: "Vestibulum vaginae",
    embryology:
      "The Vestibulum vaginae was developed from the urogenital folds.",
    description:
      "The female urethra and the genital opening is located in the “front yard” (Vestibulum vaginae) of the vulva. Some glands are located at the vestibulum vaginae to lubricate the delicate tissue.",
    info:
      "Some important glands are located at the vestibulum vaginae. One of them is the Glandula vestibularis major(Bartholin's gland). It is producing the lubrication of the vulva. Sometimes the Glandula vestibularis majora gets infected."
  },
  {
    title: "Labia majora pudendi",
    embryology:
      "Back in our mother’s womb there was a time, where we all had the same structures. They just changed while we were developing our beautiful body.  Some parts have some similarities. The outer labia for instance, were developed from the same structure as the scrotum. Both may have darker skin after puberty.",
    description:
      "We want to introduce you to our beautiful airbags. The outer labias! They protect our super sensible and important female inner genitalia and for that, they are made of a lot of fat tissue. The labias have normal skin. That means, they are not immune to skin imperfections, like the skin on our faces.",

    info:
      "Big, small, asymmetric.. Our outer labia come in a lot of different forms - and every form is beautiful. By the way, did you know that the skin on the outer labia is a bit darker pigmented than the skin around it? The color usually starts to change when girls hit puberty."
  },
  {
    title: "Labia minora pudendi",
    embryology:
      "Did you know that girls and boys have the same genitalia? ...well, we had. Until the 12th pregnancy week we have an identical genitalia. Does that mean we all had a small penis at one point? Yes and no. Maybe it was a giant clitoris..",

    description:
      "Our inner labias are more delicate and more sensitive than their outer counterpart. Their main function is to seal. When sexually aroused, the inner labias start to fill up with blood and expand. The inner labia are made of mucosa, different than the outer labia, which are made of normal skin. The inner labia can be creased and wrinkled.",
    info:
      "Creased, wrinkled, long and short. The inner labias can be sometimes longer than the outer labia. That is totally normal. Hello diversity!"
  },
  {
    title: "Hymen",
    embryology: "The hymen is formed right after the vagina.",
    description:
      "The hymen is a thin tissue. Not everyone has one. It is like ",
    info:
      "The hymen. So many stories. So many myths. Let’s bust those myths today. An intact hymen is NOT a sign for virginity. In fact, the hymen has the ability to stretch. Just sometimes, when the hymen lacks elasticity it rips. Some religions and societies makes us believe that the hymen is the most important part of us women and that we have to protect our virginity no matter what. Some women get hymen reconstruction just to keep up the illusion of virginity. It is scary that the false information about the hymen is still spread - and can result in death or loss of honor for the women."
  },
  {
    title: "Urethral Opening",
    embryology: "Is formed from the Sinus urogentials.",
    description:
      "The Urethral Opening is located between the clitoris head and is part of the  Vestibulum vaginae.",
    info:
      "Ever had a bladder infection or heard the term “honeymoon cystitis”? Women have a much higher risk of getting a bladder infection, because our Urethra is much shorter than our male counterparts. So what’s the deal with honeymoon cystitis? From the thrusting of the back wall of the bladder during sex, the bladder gets irritated. The solution? Pee right after sex."
  },
  {
    title: "Cervix",
    embryology:
      "Is developed out of two ducts (Müllerian ducts). Also the Uterus and Vagina is developed from it.",
    description:
      "The cervix is the portal from the outside world, to the inside world of the Uterus. It is just two to three centimeters long and nearly everything that you experience as discharge is formed here. It consists of two main parts. The portio and the cervix canal. It is a very crucial portion of our body,because those two parts have different tissue.",
    info:
      "Hey girls! Have you ever got a Pap-test done? If no, we from VGirls want you to know, that the Pap-test is one of the most important procedures done at the OB-Gyn. As you may know, cervical cancer is a deadly cancer that can be also found in young girls. With the Pap-test, the doctor can assess if there are any abnormalities and can treat you accordingly. So grab your best friend, go to your OB-GYN, take off your panties and get your Pap-test done!"
  },
  {
    title: "Uterus",
    embryology:
      "Is developed out of two ducts (Müllerian ducts). Also the Cervix and Vagina is developed from it.",
    description:
      "The super-organ of the female body: the Uterus! Normally the uterus is only as big as your fist, but when pregnant it grows as big as the Embryo. It looks like a pear turned on its head and is tilted forwards for most women. What about the other women you ask? The uterus can also be tilted backwards.  The Uterus consists of three layers. The Endometrium, that consists of a functional layer(shed during menstruation) and a basal layer(never shed), the Myometrium (the uterus- muscle) and the Perimetrium (outer layer).",
    info:
      "Do you remember that we told you about the muscle-layer of the uterus? It actually helps us getting rid of the functional layer of the Endometrium during our period. It contracts and presses out all the skin from the tiny cervix canal. Sounds painful, right? Also we should talk about Endometriosis: Endometriosis is a condition, where the Endometrium is growing outside the Uterus. The Endometrium outside the Uterus is changing while the monthly cycle like the one inside and leads to pain while the menstruation."
  },
  {
    title: "Tuba uterina (Oviduct)",
    embryology:
      "The Oviduct is formed out of the upper part of the Müllerian duct.",
    description:
      "The Oviducts are sticking out of the sides of the uterus and are around 10cm long. Their function is to transport the Ovum to the Uterus. To catch the Ovum, the Oviducts have Fimbriaes right on the Ovaries.",
    info: "The Oviducts are"
  },
  {
    title: "Ovaries",
    embryology:
      "The Oviduct is formed out of the upper part of the Müllerian duct.",
    description:
      "Welcome to the Ovum-Factory! Where Ovums are stored and developed every month! Different than men, we girls have a set amount of Ovums. Those Ovums are already pre-produced when we are in the womb. Like in a bakery chain, the pre-produced buns are getting finished off, right before they will be sold. Every month we produce up to a thousand Ovums and only the best is allowed to leave the Ovary. The Ovaries are also producing important hormones.",
    info:
      "Attention, attention! Our body are a masterpiece - but sometimes a masterpiece has also it’s flaws. The ligament that holds our Ovaries in place also holds the artery and the vein of the ovaries, which can cause problems. For instance, when you develop a cyst, the ovary can actually turn around itself and cut off the blood supply."
  },
  {
    title: "Vagina",
    embryology:
      "Is developed out of two ducts (Müllerian ducts). Also the Uterus and Cervix is developed from it.",
    description:
      "The vagina is a 7cm to 10cm muscle tube. Around the vagina we have muscles that we call pelvic floor. The inside of the vagina is coated by mucos.",
    info:
      "Actually the vagina itself is not particularly sensitive, but some women enjoy the stimulation of the G-Spot. Through sexual arousement the blood circulation in the genital area gets activated more and leads to more lubrication."
  },
  {
    title: "Introitus vaginae",
    embryology:
      "Not everything is 100% known about the female genital area yet...",
    description:
      "The entrance to the vagina. Probably one of the more sensitive areas of the vagina.",
    info: "May or may not be “covered” by the hymen"
  }
];

let gyn = [
  {
    name: "Christoph Walter",
    address: "Drakestr.32, 12205 Berlin",

    phoneNumber: "0308314063"
  },
  {
    name: "Dr.med.Annette Nickel",
    address: "Friedrichsstr.150, 10117 Berlin",

    phoneNumber: "030263023100"
  },
  {
    name: "Dr.med.Anna Stegelmann",
    address: "Clayallee 225a, 14195 Berlin",

    phoneNumber: "030814576565"
  },
  {
    name: "Dr.med.Kecia Schleyer",
    address: "Kurfürstendamm 33, 10719 Berlin",
    phoneNumber: "030322923323"
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

Bodypart.insertMany(bodypart)
  .then(() => {})
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });

Gyn.insertMany(gyn)
  .then(() => {})
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
