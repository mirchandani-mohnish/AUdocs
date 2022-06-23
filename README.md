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

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Building the Repo in your local machine

```
git clone {link of your fork}

cd AUdocs
npm install
npm run start
```

## How to Contribute

- [Submitting Resources](how-to-contribute.md#submitting-resources)
- [Submitting Patches](how-to-contribute.md#submitting-patches)

Please follow this guide for all contributions. If you are new to git and github, we request you to go through the [Newbies](https://audocs.netlify.app/docs/how-to-contribute/Newbies) section.

You may also discuss contributions and other stuff on our [discord](https://discord.gg/jvheUYMXtq) server.

## Submitting Resources

You can submit resources using one of the following two methods.

### 1. Creating an issue

You may create an issue on this repository listing the resource you want to submit. Please mention the following for any resource you would like to submit. Please follow the following template structure when you create an issue to submit resources.

```
Issue Title: Resource Update: <Resource Type>/<Resource Name>

Resource Title:
Resource Course:
Resource Type: // (Project, Reference, Book, Guide, Exam Paper)
Resource Links: // place the drive links shared across the university.
```

### 2. Directly Updating Resources to the Repository

You may directly update the resources by forking the repository, updating the resources you want to contribute at the specific location and then opening a pull request. We request you to open only complete pull requests. Every pull request would be reviewed in order to maintain the repository structure.

## Submitting Patches

You may submit patches to the repository wherever you feel they are required. Please do not open issues and submit patches for minor gramatical errors and spacing corrections. Such updates would then be considered in the next patch submission. We also request you to discuss any major changes with the community before opening a pull request.

## Uploading New Courses

All courses are supposed to be housed in their respective locations. You can generally figure out the location based on the folder structure. Every course must only have one file consisting of all the links to the respective material.

The file for the respective course must be named as follows

`CourseName.md`

If the course name contains multiple words, you may seperate them using a hyphen.

The file must be placed in accordance with its position in the documentation. For example: A Language course such as french being offerred in the School of Arts and Sciences should be placed along the following path `/docs/schools/sas/conversational-french.md`

## General Guidelines

- We request you to check your commits for repetitive commits before updating content to the documentation.
- We follow the [contributor's covenent](https://www.contributor-covenant.org/) as a structure for our community.
