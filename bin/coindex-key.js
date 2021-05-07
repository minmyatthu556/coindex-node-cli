const program = require("commander");
const colors = require("colors")
const key = require("../commands/key");

program
  .command("set")
  .description("Set API Key -- get at https://nomics.com".cyan)
  .action(key.set);

program
  .command("show")
  .description("Show API Key".yellow)
  .action(key.show);

program.command("remove")
  .description("Remove API Key".red)
  .action(key.remove);

program.parse(process.argv);
