const { db, Vegetable, Plot, Gardener, PlotVegetable } = require('./model');

const vegetableData = [
  {
    name: 'Carrot',
    color: 'Orange'
  },
  {
    name: 'Lettuce',
    color: 'Green'
  }
];

const gardenerData = [
  { name: 'McGregor', age: 60 },
  { name: 'Hashimoto', age: 37 },
  { name: 'Giancarlo', age: 19 }
];

const plotData = [
  {
    size: 10,
    shaded: true
  },
  {
    size: 40,
    shaded: false
  }
];

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
    return Promise.all([
      Vegetable.bulkCreate(vegetableData),
      Gardener.bulkCreate(gardenerData),
      Plot.bulkCreate(plotData)
    ]);
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ');
    console.log(err);
    db.close();
  });
