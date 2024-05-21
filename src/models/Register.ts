import { models, model, Schema } from "mongoose";

const RegisterSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  leader: {
    type: String,
    required: true,
  },
  member1: {
    type: String,
    required: true,
  },
  member2: {
    type: String,
    required: true,
  },
  member3: {
    type: String,
    required: true,
  },
  member4: {
    type: String,
    required: true,
  },
  alternate1: {
    type: String
  },
  alternate2: {
    type: String
  }
});

export default models.Register || model("Register", RegisterSchema);