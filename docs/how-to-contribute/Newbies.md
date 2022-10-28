# Newbies

This is the place for newbies. If this is your first time using git and github or you are not well versed with the github workflow, you can follow this guide as a way to make your first contribution.

Table of Contents

- [Newbies](#newbies)
  - [Git and Github](#git-and-github)
  - [Making your First Contribution](#first-contribution)
  - [Newbie List](#newbie-list)

---

## Git and Github

Your first step to open source would be to master a version control system like [Git](https://git-scm.com/). Following are a few tutorials which would help you with the same.

- [Git and Github - CodeWithHarry](https://www.codewithharry.com/videos/learn-javascript-in-one-video-in-7/)

## First Contribution

This is a tutorial guide for Newbies to make their first contribution to the repository. Following this, you would have forked the repository, made your changes and opened your first pull request.

## Prerequisites

- You must have Node >= v12 installed.
  Firstly, start off by making a fork of this repository on github.

![Forking](/img/Nebies-Fork.png)

Once you've done this, go ahead and clone your repository into your local machine.

![Cloning](/img/Newbies-Cloning1.png)
![Cloning](/img/Newbies-Cloning2.png)

```
What you've done uptil now
- You have made a copy of this repository in your own github profile // called forking
- You then went on and downloaded that repository in your own personal computer // called cloning
```

Now once the repository is cloned, you may open it using your favourite code editor/ide.

Go to the root directory (`AUdocs`) and run the following command:

```
npm install
```

Once you've reached this point, you may see the following structure:

```
.
├── babel.config.js
├── blog
├── build
├── _config.yml
├── docs
├── docusaurus.config.js
├── node_modules
├── package.json
├── package-lock.json
├── README.md
├── sidebars.js
├── src
├── static
└── SUMMARY.md

```

Expand the **docs** folder to find the following structure.

```
├── General
│   ├── about.md
│   ├── contributionguidelines.md
│   ├── courseplans
│   ├── guides
│   ├── Newbies.md
│   ├── README.md
│   ├── repomap.md
│   └── sitemap.md
├── intro.md
├── ISPs
│   └── index.md
└── schools
    ├── amsom
    ├── README.md
    ├── sas
    └── seas

```

_Note_: The above structure may have changed based on new additions but the respective files in these tutorials should positively be here.

Open the Newbies.md document in the General Folder and append your name to the [Newbies List](#newbie-list)

You can now add and commit your changes and push them to your repository.

![add commit](/img/Newbies-addcommit.png)

You have now made changes to your local repository. Go ahead and push them to your own fork(your repo on github).

```
git push
```

Once you have done that. You should be able to see the changes on your fork i.e. on (YourName)/AUdocs.

Now you need to open a new pull request. For that, go to the 'pull requests' tab on github and click 'New pull request'.

![Pull Request](/img/Newbies-PullRequest.png)

Fill in the valid details and create a pull request.

## Newbie List

- Mohnish Mirchandani
- Maulik Ranadive
- Raj Dave
