namespace mongoose.Services {

    export class AnimalService {
        private AnimalResource;

        public get(id) {
          return this.AnimalResource.get({id:id});
        }

        public list() {
          return this.AnimalResource.query();
        }

        public save(animal) {
          return this.AnimalResource.save({id:animal._id}, animal).$promise;
        }

        public remove(animalId) {
          return this.AnimalResource.remove({id:animalId}).$promise;
        }

        constructor($resource:ng.resource.IResourceService) {
          this.AnimalResource = $resource('/animals/:id');
        }
    }

    angular.module('mongoose').service('animalService', AnimalService);
  }
