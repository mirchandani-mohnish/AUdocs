# How to Contribute

- [Submitting Resources](how-to-contribute.md#submitting-resources)
- [Submitting Patches](how-to-contribute.md#submitting-patches)

Please follow this guide for all contributions. If you are new to git and github, we request you to go through the [Newbies](./Newbies.md) section.

You may also discuss contributions and other stuff on our [discord](how-to-contribute.md) server.

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

**The First line of every course should be `# CourseName //with spaces and punctuation`**

If the course name contains multiple words, you may seperate them using a hyphen.

The file must be placed in accordance with its position in the documentation. For example: A Language course such as french being offerred in the School of Arts and Sciences should be placed along the following path `/docs/schools/sas/conversational-french.md`

## General Guidelines

- We request you to check your commits for repetitive commits before updating content to the documentation.
- We follow the [contributor's covenent](https://www.contributor-covenant.org/) as a structure for our community.
