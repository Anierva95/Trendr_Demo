module.exports = function(sequelize, DataTypes) {
    var Sale = sequelize.define("Sale", {
        Pedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Emissão: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Produto: {
            type: DataTypes.STRING, 
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
        Desp_Aces: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        VLR_Total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        COD_Produto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Marca: {
            type: DataTypes.STRING,
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