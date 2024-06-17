class SocialConflictApp extends FormApplication {
  constructor(object = {}, options = {}) {
    super(object, options);
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: "Social Conflict Application",
      template: "modules/social-conflict-module/templates/factions.html",
      width: 600,
      height: 400,
      closeOnSubmit: true,
    });
  }

  async getData() {
    // Return data to the template
    return {
      factions: module.factions
    };
  }

  activateListeners(html) {
    super.activateListeners(html);
    // Add your event listeners here
  }

  _updateObject(event, formData) {
    // Handle form submission here
  }
}

Hooks.once('init', async function() {
  console.log('my-social-conflict-module | Initializing Social Conflict App');
  game.socialConflictApp = new SocialConflictApp();
});

Hooks.once('ready', async function() {
  game.socialConflictApp.render(true);
});
