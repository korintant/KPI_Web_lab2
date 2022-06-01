import CalculatorModel from './Model/calculator_model.js';
import CalculatorView from './View/calculator_view.js';
import CalculatorController from './Controller/calculator_controller.js';

let model = new CalculatorModel();
let view = new CalculatorView(model);
let controller = new CalculatorController(model, view);
