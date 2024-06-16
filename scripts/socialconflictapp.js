class SocialConflictApp extends FormApplication {
  // Override necessary methods and create the form here
}

Hooks.once('init', async function() {
  game.socialConflictApp = new SocialConflictApp();
  game.socialConflictApp.render(true);
});
