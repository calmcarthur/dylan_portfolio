import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2024-10-01","projectId":"demo-project","dataset":"production","useCdn":true}
          );

globalThis.sanityClient = sanityClient;
