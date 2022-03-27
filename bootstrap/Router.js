router.get("/", (req, res) => {
    res.write("Hello");
    res.end();
});
