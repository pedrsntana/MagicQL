module.exports = sendJSON = (target) => {
    return (req, res) => {
        if (res.data && target) {
            res.json(res.data[target])
            return
        }
        res.json({})
    }
}