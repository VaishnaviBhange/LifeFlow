// LF-16: Emergency blood request handling endpoint
app.post('/api/requests', (req, res) => {
    const emergencyRequest = req.body;
    res.status(201).json({ message: "Emergency blood request logged", emergencyRequest });
});