const {models} = require("../models")

exports.index = async (req, res, next) => {

    const quizzes = await  models.Quiz.findAll();
    res.render("quizzes/index", {quizzes} )


};