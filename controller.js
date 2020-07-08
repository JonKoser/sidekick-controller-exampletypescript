class Controller {
  constructor() {
    this.config = {
      foo: 'bar',
    };
    this.style = {
      backgroundColor: '#fff',
      highlightColor: '#651fff',
      primaryColor: '#666',
    };
  }

  start(host) {
    this.host = host;
  }

  stop() {
  }

  config() {
    return this.config;
  }

  setConfig(config) {
    this.config = config;
  }

  onEvent(event) {
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

module.exports = Controller;
