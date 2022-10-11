#!/usr/bin/env node

const mapscii = require("mapscii/src/Mapscii");

const runMapscii = (options) => {
  const map = new mapscii({ initialZoom: options.zoom });

  if (options.lat !== undefined && options.lon !== undefined) {
    map.center = {
      lat: Number.parseFloat(options.lat),
      lon: Number.parseFloat(options.lon),
    };
  }

  map.init().catch((err) => {
    console.error("Failed to start MapSCII.");
    console.error(err);
  });
};

const parseArgs = () => {
  let args = require("yargs")
    .scriptName("mapscii-at")
    .usage("$0 <lat> <lon> [--flags]...")
    .command("$0", "default command", (yargs) => {
      return yargs
        .positional("lat", {
          desc: "latitude to center map at",
          type: "number",
        })
        .positional("lon", {
          desc: "longitude to center map at",
          type: "number",
        })
        .option("zoom", {
          desc: "zoom level to start map at",
          type: "number",
          default: 10,
        });
    })
    .help().argv;

  // map positional arguments onto object
  const pos = args["_"];
  if (pos.length >= 2) {
    args.lat = pos[0];
    args.lon = pos[1];
  } else if (pos.length == 1 && pos[0].includes(",")) {
    const parts = pos[0].split(",");
    args.lat = parts[0];
    args.lon = parts[1];
  } else {
    // default from src/Mapscii.js source code
    args.lat = 52.51298;
    args.lon = 13.42012;
  }
  return args;
};

if (require.main === module) {
  const args = parseArgs();
  runMapscii(args);
}
