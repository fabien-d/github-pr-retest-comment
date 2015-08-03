# GitHub CI retest comment bookmarklet
Easily retest a PR by automatically adding a retest comment. I plan on creating a site to customize the bookmarklet in the browser.

## Configuration
To edit the comment, open `index.js` and modify the `comment` variable.

```js
const comment = '';
```

## Install bookmarklet

First time:

1. Clone the repo: `git clone git@github.com:fabien-d/github-retest-comment-bookmarklet.git`
2. Install dependencies: `npm install`

To build and install:

1. `gulp`
2. Copy contents of `dist/index.min.js`
3. Create a new bookmarklet, give it a name and paste the content into the "URL" field

## Using the bookmarklet

With a failing pull request window open, click the bookmarklet to automatically add a retest comment.
