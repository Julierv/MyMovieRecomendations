const express = require('express');
const apiRoutes = require('./routes/api');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3004;

const corsOptions = {
  origin: '*',
  methods: 'GET', // adjust this based on the allowed HTTP methods
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
