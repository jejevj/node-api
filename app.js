const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const taskSurveyRoutes = require('./routes/taskSurveyRoutes');
const taskSurveyDetailRoutes = require('./routes/taskSurveyDetailRoutes');
const authRoutes = require('./routes/authRoutes');
const dirWakafRoutes = require('./routes/dirWakafRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());  // Parse incoming JSON requests

// API Routes

app.use('/siwak_mobile/uploads', express.static('uploads'));  // Serve uploaded files
app.use('/siwak_mobile/api/task-survey', taskSurveyRoutes);
app.use('/siwak_mobile/api/task-survey-details', taskSurveyDetailRoutes);
app.use('/siwak_mobile/api/', authRoutes);
app.use('/siwak_mobile/api', dirWakafRoutes);


// Test database connection
sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
