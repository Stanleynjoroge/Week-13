const express = require('express');
const router = express.Router();

// Route to display the registration form
router.get('/', (req, res) => {
    res.render('register');
});

// Route to handle form submission (example: just logging the data)
router.post('/', (req, res) => {
    const { username, password } = req.body;
    console.log(`Username: ${username}, Password: ${password}`);
    res.send('Registration successful');
});

module.exports = router;
