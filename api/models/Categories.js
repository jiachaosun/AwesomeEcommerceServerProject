/**
 * Categories.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'localMysql',
  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    title: {
      type: 'string',
      defaultsTo: '分类标题'
    },
    subtitle: {
      type: 'string',
      defaultsTo: '子标题'
    },
    desc: {
      type: 'string',
      defaultsTo: '描述'
    },
    icon: {
      type: 'string',
      defaultsTo: 'https://m.360buyimg.com/mobilecms/jfs/t3274/333/5931514372/4075/37f346af/58959da3N38fcdf28.jpg!q70.jpg'
    },

    // reference to products
    products: {
      collection: 'product',
      via: 'categoryBy'
    }
  }
};

