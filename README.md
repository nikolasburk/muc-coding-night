# graphql-chat

## Clone the repository

```sh
git clone git@github.com:nikolasburk/muc-coding-night.git
cd muc-coding-night
```

## Get your GraphQL endpoint

### 1. Install Graphcool CLI

You first have to install the [Graphcool CLI](https://www.graph.cool/docs/reference/cli/overview-kie1quohli/):

```sh
npm install -g graphcool
```

### 2. Bootstrap local file structure for GraphQL server

```sh
graphcool init server # create files in new directory called `server`
```

### 3. Configure data model

Paste the following data model into the new file `server/types.graphql` and save the changes:

```graphql
type Person @model {
  id: ID! @isUnique    # required system-field (read-only)
  createdAt: DateTime! # optional system-field (read-only)
  updatedAt: DateTime! # optional system-field (read-only)
  name: String!
  messages: [Message!]! @relation(name: "UserMessages")
}

type Message @model {
  id: ID! @isUnique    # required system-field (read-only)
  createdAt: DateTime! # optional system-field (read-only)
  updatedAt: DateTime! # optional system-field (read-only)
  text: String!
  sentBy: Person! @relation(name: "UserMessages")
}
```

> Every type that's annotated with the `@model` directive is mapped to the database.

### 4. Deploy the GraphQL server

Navigate into the `server` directory and deploy the server:

```sh
cd server
graphcool deploy
```

When prompted, choose any of the **Shared Clusters**, e.g. `eu-west-1`.

## Run the app 🚀

That's it, you can now start the app:

```sh
yarn install
yarn start
```

Go to **http://localhost:3000** in your browser to start chatting 💬

