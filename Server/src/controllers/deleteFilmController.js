const { Films } = require("../db");

const deleteFilmController = async (id) => {
    const filmToDelete = await Films.findByPk(id)
    await filmToDelete.destroy()
    return {
        message: "Activity successfully deleted"
    };
};

module.exports = deleteFilmController;