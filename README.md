# dynamic-react-base-template
## Requirements:
- node@20+
- npm@10+
- @modyo/cli@latest

## Installation and initial setup
The best way to install this template is using the [modyo-cli](https://docs.modyo.com/en/platform/channels/cli.html)

```console
npx @modyo/cli@latest get dynamic-react-base-template my-project
cd my-project
npm i
npm run start
```

### Setup
1. Change the property name in `package.json` to the name of your project
2. Change the root `id` property to your project name in `public/index.html` and `src/index.tsx`

**Note**: The root id should be _unique_ in your site and it should be written in camelCase.

## Deployment to Modyo and CI
For deploying your project to Modyo and integrating it with your CI/CD pipeline, follow these steps:

Configure the necessary environment variables in an `.env` file or as part of your CI settings:

```yaml
# Base URL of your Modyo organization
MODYO_ACCOUNT_URL=https://my-org.modyo.cloud/

# Either the host or the ID where you will deploy your micro frontend (not both)
# MODYO_SITE_HOST=my-site
MODYO_SITE_ID=65

# Token for authorizing the deployment, obtained from Modyo
MODYO_TOKEN=gT0ogV43LSy4nV9cYtc_hH0i_rUFa01q-12ptFzoW8

# Major version of the Modyo platform where the deployment will take place (8 or 9)
MODYO_VERSION=10

# Directory containing the micro frontend bundle
MODYO_BUILD_DIRECTORY=build

# Name to identify your Micro Frontend in Modyo
WIDGET_NAME=dynamic-react-base-template

# Directive necessary for safely removing some libraries from the liquid parser
MODYO_DISABLE_LIQUID_REGEX=raw
```

## Learn More
Find more information about microfrontends and configuration details on [Modyo Docs](https://docs.modyo.com) & [Modyo Community](https://www.modyo.com/community)
