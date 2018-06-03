const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Courses = require('../models/Courses');

const nodeMail = require('nodemailer');

/* ------------------------- Methods for the users ---------------------- */

/*  "/api/users"
 *    GET: finds all users
 *    POST: creates a new user
 */



/* Get all users. */
router.get('/users', (req, res, next) => {
  User.find(function (error, user) {
    if (error) {
      res.status(401).send('Could not find user.');
    } else {
      res.status(200).send(user);
    }
  });
});




/* Post new user.*/
router.post('/users', (req, res, next) => {
  let userData = req.body;
  let newUser = new User(userData);
  newUser.save((error, user) => {
    if (error) {
      res.json(error);
    } else {
      res.json({mssg: 'User added'});
    }
  });
});


/*  "/api/users/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */
/**
 * Get a user by DePaul ID.
 */
router.get('/users/:depaulID', function (req, res, next) {
  User.findOne({depaulID: req.params.depaulID}, function (error, result) {
    if (error) {
      res.status(401).send('Could not find user.');
    } else {
      res.status(200).send(result);
    }
  });
});

/**
 * Deletes a user.
 */
router.delete('/users/:depaulID', (req, res, next) => {
  User.remove({
    depaulID: req.params.depaulID
  }, function (error, _) {
    if (error) {
      res.send(error);
    } else {
      console.log('User was deleted.');
    }
  })
});

/**
 * Updates a user with that ID.
 */
router.put('/users/:id', (req, res, next) => {
  User.findOneAndUpdate({_id: req.params.id}, {
    $set: {
      depaulID: req.body.depaulID,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      userType: req.body.userType,
      coursesTaken: req.body.coursesTaken
    }
  }, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
});

/* -------------------- End of methods for users    ------------------ */




/* ------------- Methods for the courses ---------------- */

/*  "/api/courses"
 *    GET: finds all courses
 *    POST: creates a new course
 */

/**
 * Get all the courses.
 */
router.get('/courses', (req, res, next) => {
  Courses.find(function (error, courses) {
    if (error) {
      res.status(401).send('Courses not found.');
    } else {
      res.status(200).send(courses);
    }
  });
});


/**
 * All courses offered in the Fall
 */
router.get('/courses/fall', (req, res, next) => {
  Courses.find({OFFERED_FALL: "Y"}, (err, courses) => {
    if (err) {
      res.json(err);
    }
    else {
      res.json(courses);
    }
  });
});

/**
 * All courses offered in the Winter
 */
router.get('/courses/winter', (req, res, next) => {
  Courses.find({OFFERED_WINTER: "Y"}, (err, courses) => {
    if (err) {
      res.json(err);
    } else {
      res.json(courses);
    }
  });
});

/**
 * All courses offered in the Summer
 */
router.get('/courses/summer', (req, res, next) => {
  Courses.find({OFFERED_SUMMER: "Y"}, (err, courses) => {
    if (err) {
      res.json(err);
    } else {
      res.json(courses);
    }
  });
});

/**
 * All courses offered in the Spring
 */
router.get('/courses/spring', (req, res, next) => {
  Courses.find({OFFERED_SPRING: "Y"}, (err, courses) => {
    if (err) {
      res.json(err);
    } else {
      res.json(courses);
    }
  });
});

/**
 * Updates a course with that ID.
 */
router.put('/courses/:id', (req, res, next) => {
  Courses.findOneAndUpdate({_id: req.params.id}, {
    $set: {
      COURSE_ID: req.body.COURSE_ID,
      OFFERED_FALL: req.body.OFFERED_FALL,
      OFFERED_WINTER: req.body.OFFERED_WINTER,
      OFFERED_SPRING: req.body.OFFERED_SPRING,
      OFFERED_SUMMER: req.body.OFFERED_SUMMER,
      PREREQS: req.body.PREREQS,
      ONLINE: req.body.ONLINE
    }
  }, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
});

/* Get a course with specified ID.*/
router.get('/courses/:COURSE_ID',(req, res, next) => {
  Courses.findOne({COURSE_ID: req.params.COURSE_ID}, function (error, result) {
    if (error) {
      res.status(401).send('Could not find user.');
    } else {
      res.status(200).send(result);
    }
  });
});



/**
 * Creates a new course and adds it to the Course table.
 */
router.post('/courses', (req, res, next) => {
  let courseData = req.body;
  let newCourse = new Courses(courseData);
  newCourse.save((error, course) => {
    if (error) {
      res.status(401).send('Course could not be added.');
    } else {
      res.status(200).send(course);
    }
  });
});

/**
 * Deletes a course.
 */
router.delete('/courses/:COURSE_ID', (req, res, next) => {
  Courses.remove({
    COURSE_ID: req.params.COURSE_ID
  }, function (error, _) {
    if (error) {
      res.send(error);
    } else {
      console.log('Course was deleted.');
    }
  });
});


/* ------- Login verification ------- */
/**
 * Login verification
 */
router.post('/login', (req, res) => {
  let userInfo = req.body;
  User.findOne({userID: userInfo.userID}, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send('Invalid user ID');
      } else if (user.password !== userInfo.password) {
        res.status(401).send('Invalid password');
      } else {
        res.status(200).send(user);
      }
    }
  });
  console.log(userInfo);
});


/**
 * Send an email after a user created an account.
 */
router.post('/sendMail', (req, response) => {
  let userData = new User(); /* To avoid undefined we model the user data.*/
  userData.firstName = req.body.firstName;
  userData.lastName = req.body.lastName;
  userData.password = req.body.password;
  userData.userID = req.body.userID;
  userData.email = req.body.email;
  userData.depaulID = req.body.depaulID;

  // Sends the email.
  let transporter = nodeMail.createTransport({
    service: 'gmail',
    auth: {
      user: 'ducsc394@gmail.com',
      pass: 'depaul.123!'
    }
  });
  let mailOptions = {
    from: '"DePaul University, Chicago" ducsc394@gmail.com',
    subject: 'Registration complete',
    to: userData.email,
    html:'<h1>Registration complete</h1> <br> <strong>Account Information</strong> <br>' +
    '<strong>UserID: </strong>' + userData.userID + '<br> ' +
    '<strong>Password: </strong>' + userData.password + '<br>' +
    '<strong>Email: </strong>' + userData.email + '<br>' +
    '<strong>DePaul ID: </strong>' + userData.depaulID
  };

  transporter.sendMail(mailOptions, function (error, response) {
    if(error){
      console.log(error);
    } else {
      console.log(response);
    }
  });
});


module.exports = router;
