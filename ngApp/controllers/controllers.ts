namespace mongoose.Controllers {

    export class HomeController {
      public animals;
      public animal = {};

      public save() {
        this.animalService.save(this.animal).then(()=> {
          this.animals = this.animalService.list(); // redisplay list
          this.animal = {};  // clear form
        }).catch((err) => {
          console.error(err);
        })
      }

      public remove(animalId) {
        this.animalService.remove(animalId).then(() => {
          this.animals = this.animalService.list(); // redisplay list
        }).catch((err) => {
          console.error(err);
        });
      }

      constructor(private animalService:mongoose.Services.AnimalService) {
        this.animals = this.animalService.list();
      }
  }

  export class EditController {
      public animal;

      public save() {
        this.animalService.save(this.animal).then(()=> {
          this.$state.go('home'); // navigate back to home
        }).catch((err) => {
          console.error(err);
        })
      }

      constructor(
        private animalService:mongoose.Services.AnimalService,
        private $state: ng.ui.IStateService,
        private $stateParams: ng.ui.IStateParamsService
      ) {
        let animalId = $stateParams['id'];
        this.animal = this.animalService.get(animalId);
      }
  }


  export class AboutController {
      public message = 'Hello from the about page!';
  }

}
