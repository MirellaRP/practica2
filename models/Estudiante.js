var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstudianteSchema = new Schema({
    cod:        {type: String, required: true, max: 15},
    nom:        {type: String, required: true, max: 20},
    apel:       {type: String, required: true, max: 20},
    sexo:       {type: String, required: true, max:2},
    aingreso:   {type: String, required: true, max:4}
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);
