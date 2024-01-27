// Middleware that checks if the required input keys are empty in the request body.
const checkEmptyKeysMiddleware = (req, res, next) => {

    // List of keys that are required to be present in the request body.
    const requiredKeys = ["firstName", "lastName", "email", "favoriteColor", "birthday"];

    // Iterating over the required keys to check for empty values.
    for (const key of requiredKeys) {

        // If the key is not present in the request body or has an empty value.
        if (!req.body[key]) {

            // Returning a 400 status with an error message if any key is empty.
            return res.status(400).json({ error: `One or more field is empty, please enter the correct information.` });
        }
    }

    // Calling the 'next' function to pass control to the next middleware or route handler.
    next();
};


// Exports the Middleware Module to be used in needed Routes
module.exports = {
    checkEmptyKeysMiddleware
}
