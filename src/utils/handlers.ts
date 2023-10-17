import {
  LanguageValuesCreate,
  PrestashopMultiLanguageString
} from '../types/prestashop.type';

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
      )
    };
  }

  return newBody;
};

const isPrestashopMultiLanguageString = (
  value: unknown
): value is PrestashopMultiLanguageString => {
  if (Array.isArray(value) && value.length > 0) {
    const keys = Object.keys(value[0]);

    return (
      Array.isArray(value) &&
      value.length > 0 &&
      keys.length === 2 &&
      keys.includes('id') &&
      keys.includes('value')
    );
  }

  return false;
};

/**
 * Transform PrestashopBasicValueObject to LanguageValuesCreate.
 *
 * @param body
 * @returns
 */
export const handleCreateUpdateMultiLanguagesFields = <T>(body: T) => {
  let newBody = body;

  const keys = Object.keys(newBody as Record<string, unknown>) as Array<
    keyof T
  >;

  const valuesToTransform = keys.filter((key) =>
    isPrestashopMultiLanguageString(newBody[key])
  );

  valuesToTransform.forEach((key) => {
    const oldValue = newBody[key];

    if (isPrestashopMultiLanguageString(oldValue) && Array.isArray(oldValue)) {
      const newValue: LanguageValuesCreate = {
        language: oldValue.map((item) => ({
          '@id': parseInt(item.id),
          '#text': item.value
        }))
      };

      newBody = {
        ...newBody,
        [key]: newValue
      };
    }
  });

  return newBody;
};
