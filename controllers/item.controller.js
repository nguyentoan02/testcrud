const itemService = require('../services/item.service');

// Create
const createItem = async (req, res) => {
    try {
        const item = await itemService.createItem(req.body);
        res.status(201).send(item);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Read
const getItems = async (req, res) => {
    try {
        const items = await itemService.getItems();
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getItemById = async (req, res) => {
    try {
        const item = await itemService.getItemById(req.params.id);
        if (!item) return res.status(404).send('Item not found');
        res.send(item);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update
const updateItem = async (req, res) => {
    try {
        const item = await itemService.updateItem(req.params.id, req.body);
        if (!item) return res.status(404).send('Item not found');
        res.send(item);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete
const deleteItem = async (req, res) => {
    try {
        const item = await itemService.deleteItem(req.params.id);
        if (!item) return res.status(404).send('Item not found');
        res.send(item);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
};
