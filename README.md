# RayRay's Node Boilerplate

## Motivation
This boilerplate is designed as a super simple boilerplate to get a Node Lambda up and running using:
- `Serverless` for deployment
- `Sentry` for logging 
- `ESLint` for linting with `eslint-config-airbnb-base` and `prettier`
- `Jest` for testing

## How to use

- Copy this repo, it's a template repo so it should be easy
- Go to the Repo Settings -> Secrets and insert your `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` and `AWS_REGION`
- Follow the steps in https://blog.sentry.io/2019/12/17/using-github-actions-to-create-sentry-releases to set the `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT` and `SENTRY_DEPLOY_ENVIRONMENT` variables
