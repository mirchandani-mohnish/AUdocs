# An AUwide Resource Sharing Repository.

_Built and Run by AUites_

[![discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/jvheUYMXtq)

Welcome to the official AUwide resource sharing repository. The following is made for reference purposes only. All resources shared here are free and open source. You may clone them at **Your Own Risk**.

If you are new here, check out the Newbies section.

---

## How to use this Repository

This is a FOSS library for the true AUite. You may use it as a reference or as a source. Please refrain from citing the entire repository for any material you may or may not have referred from the repository.

## Contributing to the Repository.

All contributions are truly welcome. You can submit resources, change the source code, update the documentation, fix bugs or make additional changes as and when required.

With respect to submission of resources, we request you to submit only complete and correct resources. Please go through the [Contribution Guidelines](general/contributionguidelines.md) before contributing to the repository.

We follow [semantic versioning](https://semver.org/) for all major updates. All contributions are subject to being reviewed by the community.

Partial Pull Requests will not be entertained. If you are unable to work upon an assigned task, feel free to contact the community on the respective github issues page or via our [Discord](https://discord.gg/efyvzstC) server.

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
