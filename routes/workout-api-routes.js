var db = require("../models/index.js");



module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/workouts", function(req, res) {
   console.log("in here 1") 
   db.Workout.find({}, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      console.log("in else");
      //console.log(found)
      res.json(found);
      //console.log("break");
      //var id = found.day;
      //console.log(id)
      //var found2 = JSON.parse(found)
      //console.log(found2)

    }
  });
});

  // Find all Authors and return them to the user with res.json
  app.get("/api/workouts/range", function(req, res) {
   console.log("in here range") 
   db.Workout.find({}, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      console.log("in else");
      //console.log(found)
      res.json(found);
      //console.log("break");
      //var id = found.day;
      //console.log(id)
      //var found2 = JSON.parse(found)
      //console.log(found2)

    }
  });
});



// PUT route for updating posts
//app.post("/api/workouts", function(req, res) {
//  console.log(req.body) 
      
//});

// PUT route for updating posts
//app.put("/api/workouts", function(req, res) {
//  console.log("in here 2") 
//  console.log(req.body)
      
//});

// Get route for retrieving a single post
//app.put("/api/workouts/:id", function(req, res) {
//  console.log("in here 3") 
//  console.log(req.body)
//  console.log(req.parms)
//  db.Workout.findOneAndUpdate({
//    where: {
//      Objectid: req.params.id
//    }
//  },{$push: {exercises: req.body}}).then(function(dbWorkout) {
//    console.log(dbWorkout);
//    res.json(dbWorkout);
//  }).catch (function(error) {
//    console.log(error);
//    })
//});

app.put("/api/workouts/:id", (req, res) => {
  console.log("in here 3") 
  console.log(req.body)
  console.log(req.params.id)
  db.Workout.update(
    {
      _id: req.params.id 
    },
    {
      $push: {
        exercises: req.body
      }
    },
    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

//app.post("/api/workouts/", (req, res) => {
//  console.log("in here 4") 
//  console.log(req.body)
//  console.log(req.params.id)
//  db.Workout.insert(req.body, (error, saved) => {
//       if (error) {
//        console.log(error);
//        res.send(error);
//      } else {
//        console.log(edited);
//        res.send(edited);
//      }
//    }
//  );
//});

// POST route for saving a new post
app.post("/api/workouts", function(req, res) {
  db.Workout.create(req.body).then(function(dbWorkout) {
    res.json(dbWorkout);
  });
});
  

};
