
import { ControllerPlugin } from 'ldk';
import { Controller } from './controller'

const impl = new Controller();
const controllerPlugin = new ControllerPlugin(impl);
controllerPlugin.serve();

