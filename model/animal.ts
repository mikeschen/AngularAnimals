import * as mongoose from 'mongoose';

export interface IAnimal extends mongoose.Document {
  name: string;
  kind: 'bear' | 'cat' | 'horse';
}

let animalSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true,
    minlength: 3
  },
  kind: {
    enum:['bear', 'cat', 'horse'],
    type: String,
    required: true
  }
});

export default mongoose.model<IAnimal>('Animal', animalSchema);
