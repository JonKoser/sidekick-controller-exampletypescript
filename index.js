
const { ControllerPlugin } = require('ldk');
const Controller = require('./controller');

const impl = new Controller();
const controllerPlugin = new ControllerPlugin(impl);
controllerPlugin.serve();

