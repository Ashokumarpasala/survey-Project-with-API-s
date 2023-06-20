const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let surveys = []; // Array to store submitted surveys
console.log(surveys);

// GET endpoint to fetch survey data
app.get('/api/submit', (req, res) => {
  res.json(surveys);
});

// POST endpoint for submitting data
app.post('/api/submit', (req, res) => {
  const { surveyName, surveyDescription } = req.body; // Use correct property names
  const survey = { surveyName, surveyDescription };
  surveys.push(survey); // Store the submitted survey
  console.log('Received data:', surveyName, surveyDescription); // Use correct property names
  res.sendStatus(200);
});





const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
