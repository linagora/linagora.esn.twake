# linagora.esn.twake

Twake Module for OpenPaaS.

## Install

*Note: The following instructions assumes that you have already installed OpenPaaS ESN in the path referenced by $ESN below.*

While waiting for a npm-based dependency injection handler, you have to install the module in OpenPaaS ESN like this:

**1. Clone**

```bash
git clone https://ci.linagora.com/linagora/lgs/openpaas/linagora.esn.twake.git
```

**2. Install it in OpenPaaS**

There is two way to install the model in OpenPaaS, so choose one of them:

- A. _Using symbolic links_

  The modules must be available in the `$ESN/modules` folder:

  ```bash
  ln -s path_to_module/linagora.esn.twake $ESN/modules/
  ```
- B. _Using npm link_

  Go inside the module repository:

  ```bash
  npm link
  ```

  Go inside OpenPaaS ESN repository:

  ```bash
  cd $ESN
  npm link linagora.esn.twake
  npm install
  ```

**2. Enable the module in the OpenPaaS ESN configuration file**

You must add the module in the modules section in `$ESN/config/default.NODE_ENV.json`. NODE_ENV is the environment variable used to define if the node application is running in 'production' or in 'development' (the default environment is 'development').
Copy the 'modules' array from `$ESN/config/default.json` into `$ESN/config/default.NODE_ENV.json` (`$ESN/config/default.development.json` or `$ESN/config/default.production.json`) and add the module name:

```
"modules": [
  "linagora.esn.core.webserver",
  "linagora.esn.core.wsserver",
  "linagora.esn.twake"
],
```

## Run

Once installed, you can start OpenPaaS ESN as usual.

## Configure

OpenPaaS may need the URL where the Twake application is running. The URL can be defined by configuration using the configuration API and must be defined in the `configurations` array of the `linagora.esn.twake` block as:

- **Method**: `PUT`
- **URL**: `'/api/configurations?domain_id=DOMAIN_ID&scope=domain'`
- **Body**:
  ```json
  [
    {
      "name": "linagora.esn.twake",
      "configurations": [
        {
          "name": "applicationUrl",
          "value": "https://openpaas.twakeapp.com/"
        }
      ]
    }
  ]
  ```
