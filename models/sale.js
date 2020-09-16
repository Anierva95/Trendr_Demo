module.exports = function(sequelize, DataTypes) {
    var Sale = sequelize.define("Sale", {
        Num: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Pedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Emissão: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Producto: {
            type: DataTypes.STRING, //length 10 and 2 decimal places
            allowNull: false,
        },
        Quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        VLR_UNIT: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        VLR_Desc: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        VLR_Frete: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        VLR_ICMS_ST: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        VLR_IPI: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        Deps_Aces: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        VLR_Total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        COD_Producto: {
            type: DataTypes.STIRNG,
            allowNull: false,
        },
        Marca: {
            type: DataTypes.STIRNG,
            allowNull: false,
        },
        Grupo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Descrição_Linha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    })

    return Sale;
};