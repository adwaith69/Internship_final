const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adwaithsp24:3lJFBQXvVoEJlben@test-db.uruss.mongodb.net/?retryWrites=true&w=majority&appName=test-db')
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });
