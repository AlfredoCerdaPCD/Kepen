# PCD Knowledge Base (Powered by Docusaurus 3.4)

### Prerequisites

Node 18.20+
Tested on 20.12, 20.11.1, 20.9 & 18.20.3


Validate node version:

 ```CMD
 node --version
```

Validate yarn version:

 ```CMD
 yarn --version
```

### Installation

Install yarn
[Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

```CMD
npm install --global yarn
```

Run Yarn

```CMD
yarn
```

### Local Development

```CMD
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```CMD
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Test build in local

```CMD
python3 -m http.server
php -S localhost:8000
```

---

# Documentation

## Structure

### Technical documentation:

Technical documentation, each project / application / services will be added in its respective folder and this documentation will be in English.

**Path:**

```
 docs\USIGlobal Applications
```

### Operator Manuals / Operation Documentation:

Documentation for the end user, each project / application / services will be added in its respective folder and this documentation will be in Spanish.

**Path:**

```
 docs_operator\USIGlobal Applications
```

:::tip Tip

If necessary, within each project folder add the `image` folder for its corresponding images
:::

## Add Doc

To add documentation for a new project / application / services, create the folder with its name in each of the paths:

- For technicians:  `docs\USIGlobal Applications`
- For Operators:  `docs_operator\USIGlobal Applications`

And copy the corresponding templates that are in the *Templete* folder of this project.

Select the type of documentation you are going to make and you can copy the templates as you need to rename them with the name of the module or application and add them to the path that you previously created:

- **For technicians**

  Application documentation:
  `Templates\Template_Tec_Documentation.md`

  > **Example:**
  >
  >> *File Name*: Nexim Interfaces Web.md
  >> *Path*: docs\USIGlobal Applications\Nexim Interfaces
  >>
  >

  Troubleshooting documentation:
  `Templates\Template_Tec_Troubleshooting.md`

  > **Example:**
  >
  >> *File Name*: Troubleshooting Nexim Interfaces Web.md
  >> *Path*: docs\USIGlobal Applications\Nexim Interfaces
  >>
  >
- **For Operators**

  Operator manuals:
  `Templates\Template_Opr_Documentation.md`

  > **Example:**
  >
  >> *File Name*: Nexim Interfaces Web.md
  >> *Path*: docs_operator\USIGlobal Applications\Nexim Interface
  >>
  >

  Troubleshooting:
  `Templates\Template_Opr_Troubleshooting.md`

  > **Example:**
  >
  >> *File Name*: Troubleshooting Nexim Interfaces.md
  >> *Path*: docs_operator\USIGlobal Applications\Nexim Interface
  >>
  >
