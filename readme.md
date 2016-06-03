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
your projects `package.json` as a `devDependency`:

```
npm install prometheus-prebuilt --save-dev
```

This is the preferred way to use prometheus, as it doesn't require users to
install prometheus globally.

You can also use the `-g` flag (global) to symlink it into your PATH:

```
npm install -g prometheus-prebuilt
```

If that command fails with an `EACCESS` error you may have to run it again with
`sudo`:

```
sudo npm install -g prometheus-prebuilt
```

Now you can just run `prometheus` to run prometheus:

```
prometheus
```

If you want to change the OS version that is downloaded (e.g., `windows` on a
`linux` machine), you can use the `--os` flag with npm install or set the
`npm_config_os` environment variable:
```
npm install --os=windows prometheus-prebuilt
```

## About

Works on OSes that prometheus supports: https://prometheus.io/download/

The version numbers of this module match the version number of the [offical
prometheus releases](https://github.com/prometheus/prometheus/releases).

---

> Based on https://github.com/electron-userland/electron-prebuilt/
