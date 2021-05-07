const program = require("commander");
const check = require("../commands/check")

program
  .command("price")
  .description("Check Price of coins")
  .option("--coin <type>", "Add specific coin types in CVS format", "BTC,ETH,XRP")
  .option("--cur <type>", "Change the currency", "USD")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
