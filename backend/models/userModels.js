import { DataTypes, Sequelize } from "sequelize";
import db from "./../config/databases.js";

const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true
});

export default User;

(async () => {
    await db.sync();
})();