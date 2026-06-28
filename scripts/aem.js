const ENDPOINT = 'https://author-p24056-e1593080.adobeaemcloud.com/content/cq:graphql/zenx-eds-site/endpoint.json';

async function gql(query) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  return (await res.json()).data;
}

export async function getAccounts() {
  const data = await gql(`
    query {
      accounttypemodelList {
        items {
          title
          description
        }
      }
    }
  `);
  return data.accounttypemodelList.items;
}
