const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST /');
    console.log('here is the data we got mailed:', req.body);

    let newFeeling = req.body.feedback.feelings;
    console.log(req.body.feedback.feelings);
    let newUnderstanding = req.body.feedback.understanding;
    let newSupport = req.body.feedback.support;
    let newComments = req.body.feedback.comments;

    let sqlText = `
      INSERT INTO "feedback"
      ("feeling", "understanding", "support", "comments")
      VALUES
      ($1, $2, $3, $4);
      `;
    let sqlValues = [newFeeling, newUnderstanding, newSupport, newComments,]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      console.log('Feedback was added!')
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    })
})

module.exports = router;