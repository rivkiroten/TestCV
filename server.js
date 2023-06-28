const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// show interface of participant

app.get('/conference/:conferenceId', async (req, res) => {
  const conferenceDetails = await getConferenceDetails(conferenceId)
  res.send(conferenceDetails);
});

app.get('/conference/:conferenceId/participants', async (req, res) => {
    /** getParticipants function: gets from the DB the participants 
     * that are assiciated to that conferenceId, including participants details, 
     * and return detailed participants (json)
     */
  const participants = await getParticipants(conferenceId)
  res.send(participants);
});

/* this route will be called when a participant joins a conference */
app.post('/conference/:conferenceId/participant', async (req, res) => {
  const participant = req.body;
  // call a function that adds a participant (with details) to the DB, assiciated to a conferenceId
  res.send("participant added successfully");
});