## npm package to quickly generate templates


--------

<details>
     <summary>Expand Contents</summary>

<!-- toc -->

- [1](#1)
   * [1.1](#11)
   * [1.2](#12)
- [2](#2)

<!-- tocstop -->

</details>

--------

## 1

test toc

### 1.1

1.1

### 1.2

1.2

## 2

This is a template to quickly build npm packages with eslint typescript support

You only need to clone and install the dependencies and you can run it. After all, the configuration of webpack, eslint, babel, and ts is quite troublesome~

In your preferred directory run:

````
git clone https://github.com/theajack/npm-ts-template.git
````

````
cd npm-ts-template
````

Install dependencies using Taobao mirror

````
npm i --registry=https://registry.npm.taobao.org
````

Run the demo with webpack-dev-server

````
npm run dev
````

Pack:

````
npm run build [version]
````