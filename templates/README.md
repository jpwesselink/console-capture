# <%= package.name %>

[![Codeship Status for sytac/gulp-commonjs-tasks](https://codeship.com/projects/fbd845d0-42d7-0133-683e-1e375ee071eb/status?branch=master)](https://codeship.com/projects/103903)

## Description

<%= package.description %>

## Why?

I walked into a situation where I have to validate the existence of a log
file stored in a system variable before I can fire up a proper logger.
If either the system variable or the log file will not exist I have to abort the
process. If not, I have to write the location of the log file to
the logs.

## Installation

```bash
$ npm install --save <%= package.name %>
```

## Usage

*If you'd like to try the examples, please link the module first by running `gulp prepare-examples`*

<%= examples.capture.index %>


## Running tests

```bash
$ gulp test
```

Test reports are written to `./reports`.

## Contributing

-   Do pull requests.
-   Make sure there's tests and meaningful coverage.
-   Respect `./eslintrc`.
-   Issues should go in issues.
