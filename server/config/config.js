const env = process.env.NODE_ENV || 'development';
require('dotenv').config();

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@tutorappcluster.9zems.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        authCookieName: 'x-auth-token'
    },
    production: {}
}

module.exports = config[env];