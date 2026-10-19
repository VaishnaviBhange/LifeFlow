// LF-12: Donor registration and profile management endpoint
app.post('/api/donors', (req, res) => {
    const donor = req.body;
    res.status(201).json({ message: "Donor registered successfully", donor });
});