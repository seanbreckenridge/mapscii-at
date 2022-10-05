## mapscii-at

A small CLI for [mapscii](https://github.com/rastapasta/mapscii), to let you pick a starting latitude, longitude and zoom level

Packaged like this just so I can install it from git like:

```
npm install -g git+https://github.com/seanbreckenridge/mapscii-at
```

Usage:

```
mapscii-at <lat> <lon> [--flags]...

Positionals:
  lat  latitude to center map at                                        [number]
  lon  longitude to center map at                                       [number]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  --zoom     zoom level to start map at                   [number] [default: 10]
```

Provide the latitude and longitude as positional arguments:

`mapscii-at 40.73548026809237 -73.98723410030651 --zoom 10`

All other controls work the same as mapscii
