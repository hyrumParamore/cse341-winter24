
// Middleware that checks if the inputs are empty or not.
const checkEmptyKeysMiddleware = (req, res, next) => {
    // Checks for required keys to be filled out.
    const requiredKeys = ["firstName", "lastName", "email", "favoriteColor", "birthday"];

    for (const key of requiredKeys) {
        if (!req.body[key]) {
            return res.status(400).json({ error: `One or more field is empty, please enter the correct information.` });
        }
    }

    next();
};


module.exports = {
    checkEmptyKeysMiddleware
}