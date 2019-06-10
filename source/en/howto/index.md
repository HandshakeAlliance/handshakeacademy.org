---
title: How to...
lead: Tutorials for everything Handshake
date: 2019-06-08 09:20:20
categories:
tags:
---

## Getting Started
A-Z guides on how to use all the software you'll ever need for Handshake.

#### Setup

Most of these guides make the assumption you are on a MacOS device with at least average specs. The more technical guides will require that you have a working development environment. Since most of the software around HNS uses nodeJS, it might be beneficial to install the latest node and npm versions.

```
TODO: code for that here.
```

These guides also assume an elementary understanding of the command line interface, as well as nodeJS development experience. That being said, the developers on [handshake.community](https://handshake.community/) are able and willing to help any newer developers get their enviornment setup.






## Run HSD locally

### Installation

HSD is undeniably the most important piece of the Handshake. It lets you connect to other users and help build a consensus around the blockchain. It is a key dependency of much of the software revolving around Handshake.

First, verify you have the correct version of Node installed (>= v10).
```
$ node --version
```

To start developing on HSD, go to the [github](https://github.com/handshake-org/hsd) and clone the repo.

```
$ git clone git://github.com/handshake-org/hsd.git
$ cd hsd
$ npm install --production
$ ./bin/hsd
```

### Usage

This will start populating the chain the first time its run and connect you to peer nodes after that. The console will then continuously display the node logs until it's process is killed. You can rerun this command with any of these various flags to get different behavior

| Flag   |      Description     |
|----------|:-------------:|------:|
| daemon |  Run the node in the background  |
| index-tx |   *Must be run before the chain is built (remove ~/.hsd)*    |
| index-address |    *Must be run before the chain is built (remove ~/.hsd)*    |
| listen |  ?  |
| plugins | Plugin a 3rd party application into HSD  |

```
# example - runs the node in the background
$ ./bin/hsd --daemon
# example - runs the node with the Nomenclate plugin
$ ./bin/hsd --plugins=nomenclate
```

### Caveats

This software is currently in the testnet phase. As such, the api can change at a moment's notice, so these commands may not be entirely accurate. When in doubt, always default to the README.md in the repo

Rarely while on the testnet, handshake node data can be corrupted. If you experience this, remove .hsd from your home directory and rerun `./bin/hsd`


### Biding on a domain
HSD comes with various other utilities associated with mining and naming.

### Mining through hsd
<!-- TODO -->










## Spin up the HandyMiner

<!-- TODO -->

## Navigating the blockchain with HNScan

<!-- TODO -->

## Spin up a Provide node

<!-- TODO -->

## Go hardcore with RSD

<!-- TODO -->

## Contribute to the Alliance

The strength of Handshake comes from the myriad of developers that have banned together to advance its goals. We have developers all over the world. From San Franscisco to New Zealand, Minnesota to Thailand. Our alliance is strong.

We have developers with all levels of experience. We have engineers fresh out of college and developers considered legends in our industry. We even have people that aren't developers!

If you want to be a contributor, but don't know how you can help, start by going to [our github](https://github.com/HandshakeAlliance) and seeing if you there are any issues you can help out with.

If you have a great idea around Handshake, and would like some support around it, contact our support email, hit up the community site, or contact any of the companies in the alliance, and we'll see what we can do to help you build it.

If you just think Handshake is a swell idea and would like to donate to one of the companies or developers working on it, reach out to us and we can connect you with that company or individual.