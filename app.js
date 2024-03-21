const express = require('express');
const taskRoute = require('./routes/tasks');

const app = express();

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Task manager App!');
});

app.use('/api/v1/tasks', taskRoute);

const port = 3000;

// server
app.listen(port, console.log(`Server is listening on port ${port}`));
