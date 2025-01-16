const Item = require('../models/item.model');

const createItem = async (data) => {
    const item = new Item(data);
    return await item.save();
};

const getItems = async () => {
    return await Item.find();
};

const getItemById = async (id) => {
    return await Item.findById(id);
};

const updateItem = async (id, data) => {
    return await Item.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

const deleteItem = async (id) => {
    return await Item.findByIdAndDelete(id);
};

module.exports = {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
};
