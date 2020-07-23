class Controller {
  constructor() {
    this.style = {
      backgroundColor: '#fff',
      highlightColor: '#651fff',
      primaryColor: '#666',
    };
  }

  async start(host) {
    this.host = host;

    // setup defaults
    if (!(await this.host.storageHasKey("counter"))) {
      await this.host.storageWrite("counter", JSON.stringify(0));
    }
  }

  stop() {
    this.host = null;
  }

  async onEvent(event) {
    // ignore any non-text events
    if (!event.data.text) {
      return
    }

    // read and update counter
    let counter = JSON.parse(await this.host.storageRead("counter"));
    if (!Number.isInteger(counter)) {
      console.error("invalid value for counter, resetting")
      counter = 0;
    }
    counter += 1;
    await this.host.storageWrite("counter", JSON.stringify(counter));

    // send whisper to sidekick
    this.host.emitWhisper({
      icon: 'bathtub',
      label: 'Example Controller Node',
      markdown: `# New Text Event
\`\`\`
${event.data.text.trim()}
\`\`\`
Counter: ${counter}
`,
      style: this.style,
    });
  }
}

module.exports = Controller;
