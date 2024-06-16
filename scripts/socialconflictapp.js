
class SocialConflictApp extends FormApplication {
  // Override necessary methods and create the form here
}

Hooks.once('init', async function() {
  console.log('my-social-conflict-module | Initializing Social Conflict App');
  game.socialConflictApp = new SocialConflictApp();
  game.socialConflictApp.render(true);
});

