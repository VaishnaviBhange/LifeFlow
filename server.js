// LF-14: Blood unit inventory and expiry tracking engine
app.get('/api/inventory', (req, res) => {
    res.json({ bloodGroup: "O+", unitsAvailable: 15, expiryStatus: "Optimal" });
});