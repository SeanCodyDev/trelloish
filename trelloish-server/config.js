exports.DATABASE_URL =
    process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb+srv://trelloish-user_1:trelloish-user_1@cluster0-br9ju.mongodb.net/test?retryWrites=true&w=majority';;

exports.PORT = process.env.PORT || 8080;