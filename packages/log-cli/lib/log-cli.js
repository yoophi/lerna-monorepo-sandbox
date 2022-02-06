#!/usr/bin/env node

const { program } = require("commander");
const LogCore = require("@hello/log-core");

program.action((cmd) => LogCore());

program.parse(process.argv);
