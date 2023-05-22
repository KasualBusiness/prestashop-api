export const handleBodyCreateUpdateAssociations = <T>(body: T) => {
  let newBody = body;

  // If associations is present, we have to add a key to be accepted by the prestashop api.
  const { associations } = body as unknown as {
    associations: Record<string, Record<string, unknown>[]> | undefined;
  };

  if (associations) {
    newBody = {
      ...body,
      associations: Object.fromEntries(
        Object.entries(associations).map(([key, value]) => {
          let newKey = key.slice(0, -1);

          if (key === 'categories') {
            newKey = 'category';
          }

          if (key === 'addresses') {
            newKey = 'address';
          }

          if (key === 'taxes') {
            newKey = 'tax';
          }

          if (key === 'product_option_value') {
            newKey = 'product_option_value';
          }

          if (key === 'accessories') {
            newKey = 'accessory';
          }

          if (key === 'product_bundle') {
            newKey = 'product_bundle';
          }

          return [key, { [newKey]: value }];
        })
      ),
    };
  }

  return newBody;
};
