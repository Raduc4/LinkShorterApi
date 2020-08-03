const express = require('express')
const connectDB = require('./config/db')

const app = express()

// connect to db
connectDB();

app.use(express.json({extend: false}))

// Define Routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
})