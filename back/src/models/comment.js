const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const Comentario = sequelize.define('Comentario', {
    idComentarios: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Comentario: {
        type: DataTypes.TEXT,
        allowNull: false,    
    }
    }, {tableName: 'tblcomentarios'});

    return Comentario;
}