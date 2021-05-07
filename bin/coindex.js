#!/usr/bin/env node

const program = require("commander");
const colors = require("colors");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("key", "Manage API Key -- https://nomics.com".cyan)
  .command("check", "Check Coin Price Info".yellow);

program.parse(process.argv);
