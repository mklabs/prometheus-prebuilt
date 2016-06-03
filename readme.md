# prometheus-prebuilt

Install [prometheus][] prebuilt binaries for command-line
use using npm. This module helps you easily install the `prometheus` command
for use on the command line without having to compile anything.

> [Prometheus][] is an open-source systems monitoring and alerting toolkit originally
built at SoundCloud. Since its inception in 2012, many companies and
organizations have adopted Prometheus, and the project has a very active
developer and user community. It is now a standalone open source project and
maintained independently of any company.
~ https://prometheus.io/docs/introduction/overview/#what-is-prometheus

[Prometheus]: https://prometheus.io/
[prometheus]: https://prometheus.io/

## Installation

Download and install the latest build of prometheus for your OS and add it to
your projects `package.json`:

```
npm install prometheus-prebuilt --save-dev
```

This is the preferred way to use prometheus, as it doesn't require users to
install prometheus globally.

You can also use the `-g` flag (global) to symlink it into your PATH:

```
npm install -g prometheus-prebuilt
```

Now you can just run `prometheus` to run prometheus:

```
$ prometheus --help
usage: prometheus [<args>]


   -version false
      Print version information.

   -config.file "prometheus.yml"
      Prometheus configuration file name.

   ...
```

## Options

## os

If you want to change the OS version that is downloaded (e.g., `windows` on a
`linux` machine), you can use the `--os` flag with npm install or set the
`npm_config_os` environment variable:

```
npm install --os=windows prometheus-prebuilt
```

## version

Binaries are downloaded from [github repo
releases](https://github.com/prometheus/prometheus/releases).

Default version is always the
[latest](https://api.github.com/repos/prometheus/prometheus/releases/latest)
one, unless you use `--version` flag with npm install or set the
`npm_config_version` environment variable:

```
npm install --version="0.18.0" prometheus-prebuilt
```

## About

Works on OSes that prometheus supports: https://prometheus.io/download/

The version numbers of this module should match the version number of the
[offical prometheus
releases](https://github.com/prometheus/prometheus/releases).

A pre-release version may be used to have a lower precedence versionning
specific to prometheus-prebuilt package.

---

> Based on https://github.com/electron-userland/electron-prebuilt/
