# graphql-chat

## Data model

This is what the data model for the chat looks like:

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

> Every type that's declared with the `@model` directive is mapped to the database.

## Get your GraphQL endpoint

### 1. Install Graphcool CLI

You first have to get your GraphQL endpoint for the above schema using the [Graphcool CLI](https://www.npmjs.com/package/graphcool):

```sh
npm install -g graphcool
```

### 2. Bootstrap local file structure for GraphQL server

```sh
graphcool init server # create files in new directory called `server`
```

### 3. Configure data model

Paste the data model from above into the new file `server/types.graphql` and save the changes.

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

