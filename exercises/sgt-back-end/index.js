const express = require('express');
const server = express();

// Connect Node to the Postgres database
const pg = require('pg')
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

// User can GET all grades
server.get('/api/grades', (req, res, next) => {
  db.query('SELECT * FROM "grades"')
    .then(response => {
      res.status(200).json(response.rows);
    })
      .catch(err => {
        res.status(500).json({ error: 'An unexpected error occured' });
      })
})

// User can POST a grade to the db
server.post('/api/grades', express.json(), (req, res, next) => {
  if (!req.body) {
    res.status(400).json({ error: 'No body found in request' });
    return;
  }
  const { name, course, grade } = req.body;

  if (!name || !course || !grade) {
    res.status(400).json({ error: 'Must provide name, course and grade properties to add to the database' });
    return;
  }
  if (isNaN(grade) || grade < 1) {
    res.status(400).json({ error: 'grade property must be a positive integer' });
    return;
  }

  const sql = `
    INSERT INTO "grades" ("name", "course", "grade")
    VALUES ($1, $2, $3)
    RETURNING *`;
  const values = [name, course, grade];
  db.query(sql, values)
    .then(response => {
      res.status(201).json(response.rows);
    })
    .catch(error => {
      res.status(500).json({ error: 'An unexpected error occured' });
    })
})

// User can edit(PUT) an entry in the database
server.put('/api/grades/:id', express.json(), (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ error: 'Must specify an ID to PUT' });
    return;
  }
  if (!req.body) {
    res.status(400).json({ error: 'No body found in request' });
    return;
  }
  if (!req.body.name || !req.body.course || !req.body.grade) {
    res.status(400).json({ error: 'Must provide name, course and grade fields in order to PUT' });
    return;
  }
  const { name, course, grade } = req.body;

  const sql = `
    UPDATE "grades"
    SET    "name" =   $1,
           "course" = $2,
           "grade" =  $3
    WHERE "gradeId" = $4
    RETURNING *`;
  const values = [name, course, grade, id];

  db.query(sql, values)
    .then(response => {
      const grade = response.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find Id ${id}`});
        return;
      }
      res.status(200).json(grade);
    })
    .catch(error => {
      res.status(500).json({ error: 'An unexpected error occured' });
    })
})

// User can DELETE records from the database
server.delete('/api/grades/:gradeId', (req, res, next) => {
  const { gradeId } = req.params;
  if (!gradeId) {
    res.status(400).json({ error: 'Must specify an ID to DELETE' });
    return;
  }
  const sql = `
    DELETE FROM "grades"
    WHERE  "gradeId" = $1
    RETURNING *`;
  const values = [gradeId];

  db.query(sql, values)
    .then(response => {
      const grade = response.rows;
      if (!grade) {
        res.status(404).json({ error: `Cannot find ID ${gradeId}`});
        return;
      }
      res.status(204);
    })
    .catch(error => {
      res.status(500).json({ error: 'An unexpected error occurred' });
    })
})

// Server listening port
server.listen(3000, ()=> {
  console.log('Express Server is listening on port 3000')
});
