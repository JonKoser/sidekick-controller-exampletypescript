import { hostIfc, styleIfc, eventIfc, configIfc, ControllerIfc } from './types';

export class Controller implements ControllerIfc {
  configSettings: configIfc;
  style: styleIfc;
  host: hostIfc

  constructor() {
    this.configSettings = {
      foo: 'bar',
    };
    this.style = {
      backgroundColor: '#fff',
      highlightColor: '#651fff',
      primaryColor: '#666',
    };
  }

  start(host: hostIfc): void {
    this.host = host;
  }

  stop(): void {
  }

  config() {
    return this.configSettings;
  }

  setConfig(config: configIfc): void {
    this.configSettings = config;
  }

  onEvent(event: eventIfc): void {
    if (event.data.text) {
      this.host.emitWhisper({
        icon: 'bathtub',
        label: 'Example Controller Node',
        markdown: `# New Text Event
\`\`\`
${event.data.text.trim()}
\`\`\`
`,
        style: this.style,
      });
    }
  }
}
