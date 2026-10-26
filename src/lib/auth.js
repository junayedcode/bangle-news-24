import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("bangla-news-24");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
 socialProviders: {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectURI: "http://localhost:3000/api/auth/callback/google",
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    redirectURI: "http://localhost:3000/api/auth/callback/github",
  },
},
  database: mongodbAdapter(db, {
    client,
  }),
});