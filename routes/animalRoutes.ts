import * as express from 'express';
import Animal from '../model/animal';

let router = express.Router();

// GET all animals
router.get('/', (req, res) => {
  Animal.find().then((animals)=> {
      res.json(animals);
  }).catch((err) => {
      res.status(500);
      console.error(err);
  })
});

// Get a single animal by id
router.get('/:id', (req, res) => {
  Animal.findById(req.params['id']).then((animal) => {
    res.json(animal);
  });
});

// Create new animal
router.post('/', (req, res) => {
  let animal = new Animal();
  animal.name = req.body.name;
  animal.kind = req.body.kind;

  // save new animal
  animal.save().then((newAnimal) => {
    res.json(newAnimal);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// Update existing animal
router.post('/:id', (req, res) => {
  let animalId = req.params.id;

  Animal.findById(animalId).then((animal) => {
    animal.name = req.body.name;
    animal.kind = req.body.kind;

    // save updated animal
    animal.save().then((updatedAnimal) => {
      res.json(updatedAnimal);
    }).catch((err) => {
      res.status(400).json(err);
    });

  }).catch(() => {
    res.sendStatus(404);
  });

});

// Delete animal
router.delete('/:id', (req, res) => {
  let animalId = req.params.id;
  Animal.remove({_id:animalId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    res.status(500);
    console.log(err);
  });
});

export default router;
