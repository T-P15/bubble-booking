import { ContentfulClientApi, createClient } from "contentful";
import { useMemo } from "react";

let client: ContentfulClientApi<undefined> | undefined;

function getContentfulBrowserClient() {
  if (client) {
    return client;
  }

  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  });

  return client;
}

function useContentfulClient() {
  return useMemo(getContentfulBrowserClient, []);
}

export default useContentfulClient;
