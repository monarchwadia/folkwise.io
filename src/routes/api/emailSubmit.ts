// must use lowercase post as per this: https://stackoverflow.com/questions/73098227/sveltekit-post-method-not-allowed-on-endpoint
// we will have to change it to uppercase when we upgrade svelte versions

export const post = async ({ request }: { request: Request }) => {
  const body = await request.json();

  console.log(`Name: ${body.name}; Email: ${body.email}; Message: ${body.message}`);

  const name = body.name;
  const email = body.email;
  const message = body.message;

  return {
    body: {
      name,
      email,
      message
    }
  };
};
