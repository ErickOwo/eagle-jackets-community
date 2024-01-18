import mongoose, { Schema } from "mongoose";

const SourceSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Por favor ingresa el título'],
  },
  description: {
    type: String,
    required: [true, 'Por favor ingresa a descripción'],
  },
  student: {
    type: String,
    required: [true, 'Por favor ingresa el estudiante'],
  },
  links: {
    type: Array,
    required: [true, 'Por favor ingresa el link'],
  },
  date: {
    type: Date,
    required: [true, 'Por favor ingresa la fecha'],
  },
});

export default mongoose?.models?.Source || mongoose.model('Source', SourceSchema)