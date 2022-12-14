const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");

const propertieController = require("../Controllers/Properties.js");

//Criar registro de palestra e todos os alunos que participaram
router.post(
    "/createPropertie",
    [
        body("linkImage", "Titulo da Propriedade é necessário").exists({
            checkFalsy: true,
        }),
    ],
    [
        body("linkDoc", "Preço atual da Propriedade é necessário").exists({
            checkFalsy: true,
        }),
    ],
    [
        body("description", "Descrição da Propriedade é necessário").exists({
            checkFalsy: true,
        }),
    ],
    [
        body("type", "Tipo da Propriedade é necessário").exists({
            checkFalsy: true,
        }),
    ],
    [
        body("address", "Endereço da Propriedade é necessário").exists({
            checkFalsy: true,
        }),
    ],
    [
        body(
            "specifications",
            "Especificação da Propriedade é necessário"
        ).exists({ checkFalsy: true }),
    ],
    [
        body(
            "price",
            "Preço da Propriedade é necessário"
        ).exists({ checkFalsy: true }),
    ],
    propertieController.createPropertie
);

router.get(
    "/getProperty/:id",
    [
        param("id", "ID da Propriedade é necessário").exists({
            checkFalsy: true,
        }),
    ],
    propertieController.getProperty
);

router.get(
    "/getPropertyMetadata/:id",
    [
        param("id", "ID da Propriedade é necessário").exists({
            checkFalsy: true,
        }),
    ],
    propertieController.getPropertyMetadata
);

router.get("/getProperties", propertieController.getProperties);

router.get("/getPropertiesMetadata", propertieController.getPropertiesMetadata);

//Exporta o ROUTER
module.exports = router;
