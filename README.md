# prestashop-api

Prestashop's webservices calls simplified.

## Installation

```bash
npm install @kasual-business/prestashop-api
```

## Usage/Examples

```javascript
import { init, products } from '@kasual-business/prestashop-api';

// Init the api url and key (without the / at the end of the url)
init('https://my-prestashop', 'my-api-key');

export default () => {
  // List all products
  const response = await products.getAll();
}
```

## API Reference

#### addresses

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `getAll` | GetAllParams        | List all addresses      |
| `get`    | id, GetParams       | Get an address by id    |
| `create` | body, PostParams    | Create an address       |
| `update` | id, body, PutParams | Update an address by id |

#### attachments

| Name     | Parameters          | Description                |
| :------- | :------------------ | :------------------------- |
| `getAll` | GetAllParams        | List all attachments       |
| `get`    | id, GetParams       | Get an attachment by id    |
| `create` | body, PostParams    | Create an attachment       |
| `update` | id, body, PutParams | Update an attachment by id |

#### carriers

| Name     | Parameters          | Description            |
| :------- | :------------------ | :--------------------- |
| `getAll` | GetAllParams        | List all carriers      |
| `get`    | id, GetParams       | Get a carrier by id    |
| `create` | body, PostParams    | Create a carrier       |
| `update` | id, body, PutParams | Update a carrier by id |

#### cartRules

| Name     | Parameters          | Description              |
| :------- | :------------------ | :----------------------- |
| `getAll` | GetAllParams        | List all cart rules      |
| `get`    | id, GetParams       | Get a cart rule by id    |
| `create` | body, PostParams    | Create a cart rule       |
| `update` | id, body, PutParams | Update a cart rule by id |

#### carts

| Name     | Parameters          | Description         |
| :------- | :------------------ | :------------------ |
| `getAll` | GetAllParams        | List all carts      |
| `get`    | id, GetParams       | Get a cart by id    |
| `create` | body, PostParams    | Create a cart       |
| `update` | id, body, PutParams | Update a cart by id |

#### categories

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `getAll` | GetAllParams        | List all categories     |
| `get`    | id, GetParams       | Get a category by id    |
| `create` | body, PostParams    | Create a category       |
| `update` | id, body, PutParams | Update a category by id |

#### combinations

| Name     | Parameters          | Description                |
| :------- | :------------------ | :------------------------- |
| `getAll` | GetAllParams        | List all combinations      |
| `get`    | id, GetParams       | Get a combination by id    |
| `create` | body, PostParams    | Create a combination       |
| `update` | id, body, PutParams | Update a combination by id |

#### configurations

| Name     | Parameters          | Description                  |
| :------- | :------------------ | :--------------------------- |
| `getAll` | GetAllParams        | List all configurations      |
| `get`    | id, GetParams       | Get a configuration by id    |
| `create` | body, PostParams    | Create a configuration       |
| `update` | id, body, PutParams | Update a configuration by id |

#### contacts

| Name     | Parameters          | Description            |
| :------- | :------------------ | :--------------------- |
| `getAll` | GetAllParams        | List all contacts      |
| `get`    | id, GetParams       | Get a contact by id    |
| `create` | body, PostParams    | Create a contact       |
| `update` | id, body, PutParams | Update a contact by id |

#### contentManagementSystem

| Name     | Parameters          | Description                           |
| :------- | :------------------ | :------------------------------------ |
| `getAll` | GetAllParams        | List all content management systems   |
| `get`    | id, GetParams       | Get a content management system by id |
| `create` | body, PostParams    | Create a content                      |
| `update` | id, body, PutParams | Update a content by id                |

#### countries

| Name     | Parameters          | Description            |
| :------- | :------------------ | :--------------------- |
| `getAll` | GetAllParams        | List all countries     |
| `get`    | id, GetParams       | Get a country by id    |
| `create` | body, PostParams    | Create a country       |
| `update` | id, body, PutParams | Update a country by id |

#### currencies

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `getAll` | GetAllParams        | List all currencies     |
| `get`    | id, GetParams       | Get a currency by id    |
| `create` | body, PostParams    | Create a currency       |
| `update` | id, body, PutParams | Update a currency by id |

#### customerMessages

| Name     | Parameters          | Description                     |
| :------- | :------------------ | :------------------------------ |
| `getAll` | GetAllParams        | List all customerMessages       |
| `get`    | id, GetParams       | Get a customer message by id    |
| `create` | body, PostParams    | Create a customer message       |
| `update` | id, body, PutParams | Update a customer message by id |

#### customerThreads

| Name     | Parameters          | Description                    |
| :------- | :------------------ | :----------------------------- |
| `getAll` | GetAllParams        | List all customer threads      |
| `get`    | id, GetParams       | Get a customer thread by id    |
| `create` | body, PostParams    | Create a customer thread       |
| `update` | id, body, PutParams | Update a customer thread by id |

#### customers

| Name     | Parameters          | Description                                     |
| :------- | :------------------ | :---------------------------------------------- |
| `getAll` | GetAllParams        | List all customers                              |
| `get`    | id                  | Get a customer by id                            |
| `create` | body, PostParams    | Create a customer                               |
| `update` | id, body, PutParams | Update a customer by id                         |
| `login`  | email, password     | Check a customer email and password combination |

#### customizations

| Name     | Parameters          | Description                  |
| :------- | :------------------ | :--------------------------- |
| `getAll` | GetAllParams        | List all customizations      |
| `get`    | id, GetParams       | Get a customization by id    |
| `create` | body, PostParams    | Create a customization       |
| `update` | id, body, PutParams | Update a customization by id |

#### deliveries

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `getAll` | GetAllParams        | List all deliveries     |
| `get`    | id, GetParams       | Get a delivery by id    |
| `create` | body, PostParams    | Create a delivery       |
| `update` | id, body, PutParams | Update a delivery by id |

#### employees

| Name     | Parameters          | Description              |
| :------- | :------------------ | :----------------------- |
| `getAll` | GetAllParams        | List all employees       |
| `get`    | id, GetParams       | Get an employee by id    |
| `create` | body, PostParams    | Create an employee       |
| `update` | id, body, PutParams | Update an employee by id |

#### groups

| Name     | Parameters          | Description          |
| :------- | :------------------ | :------------------- |
| `getAll` | GetAllParams        | List all groups      |
| `get`    | id, GetParams       | Get a group by id    |
| `create` | body, PostParams    | Create a group       |
| `update` | id, body, PutParams | Update a group by id |

#### guests

| Name     | Parameters          | Description          |
| :------- | :------------------ | :------------------- |
| `getAll` | GetAllParams        | List all guests      |
| `get`    | id, GetParams       | Get a guest by id    |
| `create` | body, PostParams    | Create a guest       |
| `update` | id, body, PutParams | Update a guest by id |

#### imageTypes

| Name     | Parameters          | Description                |
| :------- | :------------------ | :------------------------- |
| `getAll` | GetAllParams        | List all image types       |
| `get`    | id, GetParams       | Get an image type by id    |
| `create` | body, PostParams    | Create an image type       |
| `update` | id, body, PutParams | Update an image type by id |

#### images

| Name     | Parameters      | Description                   |
| :------- | :-------------- | :---------------------------- |
| `create` | productId, path | Create an image for a product |

#### languages

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `getAll` | GetAllParams        | List all languages      |
| `get`    | id, GetParams       | Get a language by id    |
| `create` | body, PostParams    | Create a language       |
| `update` | id, body, PutParams | Update a language by id |

#### manufacturers

| Name     | Parameters          | Description                 |
| :------- | :------------------ | :-------------------------- |
| `getAll` | GetAllParams        | List all manufacturers      |
| `get`    | id, GetParams       | Get a manufacturer by id    |
| `create` | body, PostParams    | Create a manufacturer       |
| `update` | id, body, PutParams | Update a manufacturer by id |

#### messages

| Name     | Parameters          | Description            |
| :------- | :------------------ | :--------------------- |
| `getAll` | GetAllParams        | List all messages      |
| `get`    | id, GetParams       | Get a message by id    |
| `create` | body, PostParams    | Create a message       |
| `update` | id, body, PutParams | Update a message by id |

#### orderCarriers

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `getAll` | GetAllParams        | List all orderCarriers        |
| `get`    | id, GetParams       | Get an order carrier by id    |
| `create` | body, PostParams    | Create an order carrier       |
| `update` | id, body, PutParams | Update an order carrier by id |

#### orderCartRules

| Name     | Parameters          | Description                     |
| :------- | :------------------ | :------------------------------ |
| `getAll` | GetAllParams        | List all orderCartRules         |
| `get`    | id, GetParams       | Get an order cart rule by id    |
| `create` | body, PostParams    | Create an order cart rule       |
| `update` | id, body, PutParams | Update an order cart rule by id |

#### orderDetails

| Name     | Parameters          | Description                  |
| :------- | :------------------ | :--------------------------- |
| `getAll` | GetAllParams        | List all order details       |
| `get`    | id, GetParams       | Get an order detail by id    |
| `create` | body, PostParams    | Create an order detail       |
| `update` | id, body, PutParams | Update an order detail by id |

#### orderHistories

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `getAll` | GetAllParams        | List all order histories      |
| `get`    | id, GetParams       | Get an order history by id    |
| `create` | body, PostParams    | Create an order history       |
| `update` | id, body, PutParams | Update an order history by id |

#### orderInvoices

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `getAll` | GetAllParams        | List all order invoices       |
| `get`    | id, GetParams       | Get an order invoice by id    |
| `create` | body, PostParams    | Create an order invoice       |
| `update` | id, body, PutParams | Update an order invoice by id |

#### orderPayments

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `getAll` | GetAllParams        | List all order payments       |
| `get`    | id, GetParams       | Get an order payment by id    |
| `create` | body, PostParams    | Create an order payment       |
| `update` | id, body, PutParams | Update an order payment by id |

#### orderSlip

| Name     | Parameters          | Description                |
| :------- | :------------------ | :------------------------- |
| `getAll` | GetAllParams        | List all order slips       |
| `get`    | id, GetParams       | Get an order slip by id    |
| `create` | body, PostParams    | Create an order slip       |
| `update` | id, body, PutParams | Update an order slip by id |

#### orderStates

| Name     | Parameters          | Description                 |
| :------- | :------------------ | :-------------------------- |
| `getAll` | GetAllParams        | List all order states       |
| `get`    | id, GetParams       | Get an order state by id    |
| `create` | body, PostParams    | Create an order state       |
| `update` | id, body, PutParams | Update an order state by id |

#### orders

| Name     | Parameters          | Description           |
| :------- | :------------------ | :-------------------- |
| `getAll` | GetAllParams        | List all orders       |
| `get`    | id, GetParams       | Get an order by id    |
| `create` | body, PostParams    | Create an order       |
| `update` | id, body, PutParams | Update an order by id |

#### priceRanges

| Name     | Parameters          | Description                |
| :------- | :------------------ | :------------------------- |
| `getAll` | GetAllParams        | List all price ranges      |
| `get`    | id, GetParams       | Get a price range by id    |
| `create` | body, PostParams    | Create a price range       |
| `update` | id, body, PutParams | Update a price range by id |

#### productCustomizationFields

| Name     | Parameters          | Description                                |
| :------- | :------------------ | :----------------------------------------- |
| `getAll` | GetAllParams        | List all product customization fields      |
| `get`    | id, GetParams       | Get a product customization field by id    |
| `create` | body, PostParams    | Create a product customization field       |
| `update` | id, body, PutParams | Update a product customization field by id |

#### productFeatureValues

| Name     | Parameters          | Description                          |
| :------- | :------------------ | :----------------------------------- |
| `getAll` | GetAllParams        | List all product feature values      |
| `get`    | id, GetParams       | Get a product feature value by id    |
| `create` | body, PostParams    | Create a product feature value       |
| `update` | id, body, PutParams | Update a product feature value by id |

#### productFeatures

| Name     | Parameters          | Description                      |
| :------- | :------------------ | :------------------------------- |
| `getAll` | GetAllParams        | List all product features fields |
| `get`    | id, GetParams       | Get a product feature by id      |
| `create` | body, PostParams    | Create a product feature         |
| `update` | id, body, PutParams | Update a product feature by id   |

#### productOptionValues

| Name     | Parameters          | Description                         |
| :------- | :------------------ | :---------------------------------- |
| `getAll` | GetAllParams        | List all product option values      |
| `get`    | id, GetParams       | Get a product option value by id    |
| `create` | body, PostParams    | Create a product option value       |
| `update` | id, body, PutParams | Update a product option value by id |

#### productOptions

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `getAll` | GetAllParams        | List all product options      |
| `get`    | id, GetParams       | Get a product option by id    |
| `create` | body, PostParams    | Create a product option       |
| `update` | id, body, PutParams | Update a product option by id |

#### productSuppliers

| Name     | Parameters          | Description                     |
| :------- | :------------------ | :------------------------------ |
| `getAll` | GetAllParams        | List all product suppliers      |
| `get`    | id, GetParams       | Get a product supplier by id    |
| `create` | body, PostParams    | Create a product supplier       |
| `update` | id, body, PutParams | Update a product supplier by id |

#### products

| Name     | Parameters          | Description            |
| :------- | :------------------ | :--------------------- |
| `getAll` | GetAllParams        | List all products      |
| `get`    | id, GetParams       | Get a product by id    |
| `create` | body, PostParams    | Create a product       |
| `update` | id, body, PutParams | Update a product by id |

#### shopGroups

| Name     | Parameters          | Description               |
| :------- | :------------------ | :------------------------ |
| `getAll` | GetAllParams        | List all shop groups      |
| `get`    | id, GetParams       | Get a shop group by id    |
| `create` | body, PostParams    | Create a shop group       |
| `update` | id, body, PutParams | Update a shop group by id |

#### shopUrls

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `getAll` | GetAllParams        | List all shop urls      |
| `get`    | id, GetParams       | Get a shop url by id    |
| `create` | body, PostParams    | Create a shop url       |
| `update` | id, body, PutParams | Update a shop url by id |

#### shops

| Name     | Parameters          | Description         |
| :------- | :------------------ | :------------------ |
| `getAll` | GetAllParams        | List all shops      |
| `get`    | id, GetParams       | Get a shop by id    |
| `create` | body, PostParams    | Create a shop       |
| `update` | id, body, PutParams | Update a shop by id |

#### specificPriceRules

| Name     | Parameters          | Description                        |
| :------- | :------------------ | :--------------------------------- |
| `getAll` | GetAllParams        | List all specific price rules      |
| `get`    | id, GetParams       | Get a specific price rule by id    |
| `create` | body, PostParams    | Create a specific price rule       |
| `update` | id, body, PutParams | Update a specific price rule by id |

#### specificPrices

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `getAll` | GetAllParams        | List all specific prices      |
| `get`    | id, GetParams       | Get a specific price by id    |
| `create` | body, PostParams    | Create a specific price       |
| `update` | id, body, PutParams | Update a specific price by id |

#### states

| Name     | Parameters          | Description          |
| :------- | :------------------ | :------------------- |
| `getAll` | GetAllParams        | List all states      |
| `get`    | id, GetParams       | Get a state by id    |
| `create` | body, PostParams    | Create a state       |
| `update` | id, body, PutParams | Update a state by id |

#### stockAvailables

| Name     | Parameters          | Description                    |
| :------- | :------------------ | :----------------------------- |
| `getAll` | GetAllParams        | List all stock availables      |
| `get`    | id, GetParams       | Get a stock available by id    |
| `create` | body, PostParams    | Create a stock available       |
| `update` | id, body, PutParams | Update a stock available by id |

#### stockMovementReasons

| Name     | Parameters          | Description                          |
| :------- | :------------------ | :----------------------------------- |
| `getAll` | GetAllParams        | List all stock movement reasons      |
| `get`    | id, GetParams       | Get a stock movement reason by id    |
| `create` | body, PostParams    | Create a stock movement reason       |
| `update` | id, body, PutParams | Update a stock movement reason by id |

#### stockMovements

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `getAll` | GetAllParams        | List all stock movements      |
| `get`    | id, GetParams       | Get a stock movement by id    |
| `create` | body, PostParams    | Create a stock movement       |
| `update` | id, body, PutParams | Update a stock movement by id |

#### stocks

| Name     | Parameters          | Description          |
| :------- | :------------------ | :------------------- |
| `getAll` | GetAllParams        | List all stocks      |
| `get`    | id, GetParams       | Get a stock by id    |
| `create` | body, PostParams    | Create a stock       |
| `update` | id, body, PutParams | Update a stock by id |

#### stores

| Name     | Parameters          | Description          |
| :------- | :------------------ | :------------------- |
| `getAll` | GetAllParams        | List all stores      |
| `get`    | id, GetParams       | Get a store by id    |
| `create` | body, PostParams    | Create a store       |
| `update` | id, body, PutParams | Update a store by id |

#### suppliers

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `getAll` | GetAllParams        | List all suppliers      |
| `get`    | id, GetParams       | Get a supplier by id    |
| `create` | body, PostParams    | Create a supplier       |
| `update` | id, body, PutParams | Update a supplier by id |

#### supplyOrderDetails

| Name     | Parameters          | Description                        |
| :------- | :------------------ | :--------------------------------- |
| `getAll` | GetAllParams        | List all supply order details      |
| `get`    | id, GetParams       | Get a supply order detail by id    |
| `create` | body, PostParams    | Create a supply order detail       |
| `update` | id, body, PutParams | Update a supply order detail by id |

#### supplyOrderHistories

| Name     | Parameters          | Description                         |
| :------- | :------------------ | :---------------------------------- |
| `getAll` | GetAllParams        | List all supply order histories     |
| `get`    | id, GetParams       | Get a supply order history by id    |
| `create` | body, PostParams    | Create a supply order history       |
| `update` | id, body, PutParams | Update a supply order history by id |

#### supplyOrderReceiptHistories

| Name     | Parameters          | Description                              |
| :------- | :------------------ | :--------------------------------------- |
| `getAll` | GetAllParams        | List all supply order receipt histories  |
| `get`    | id, GetParams       | Get a supply order receipt history by id |
| `create` | body, PostParams    | Create a supply order receipt            |
| `update` | id, body, PutParams | Update a supply order receipt by id      |

#### supplyOrderStates

| Name     | Parameters          | Description                       |
| :------- | :------------------ | :-------------------------------- |
| `getAll` | GetAllParams        | List all supply order states      |
| `get`    | id, GetParams       | Get a supply order state by id    |
| `create` | body, PostParams    | Create a supply order state       |
| `update` | id, body, PutParams | Update a supply order state by id |

#### supplyOrders

| Name     | Parameters          | Description                 |
| :------- | :------------------ | :-------------------------- |
| `getAll` | GetAllParams        | List all supply orders      |
| `get`    | id, GetParams       | Get a supply order by id    |
| `create` | body, PostParams    | Create a supply order       |
| `update` | id, body, PutParams | Update a supply order by id |

#### tags

| Name     | Parameters          | Description        |
| :------- | :------------------ | :----------------- |
| `getAll` | GetAllParams        | List all tags      |
| `get`    | id, GetParams       | Get a tag by id    |
| `create` | body, PostParams    | Create a tag       |
| `update` | id, body, PutParams | Update a tag by id |

#### taxRuleGroups

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `getAll` | GetAllParams        | List all tax rule groups      |
| `get`    | id, GetParams       | Get a tax rule group by id    |
| `create` | body, PostParams    | Create a tax rule group       |
| `update` | id, body, PutParams | Update a tax rule group by id |

#### taxRules

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `getAll` | GetAllParams        | List all tax rules      |
| `get`    | id, GetParams       | Get a tax rule by id    |
| `create` | body, PostParams    | Create a tax rule       |
| `update` | id, body, PutParams | Update a tax rule by id |

#### taxes

| Name     | Parameters          | Description        |
| :------- | :------------------ | :----------------- |
| `getAll` | GetAllParams        | List all taxes     |
| `get`    | id, GetParams       | Get a tax by id    |
| `create` | body, PostParams    | Create a tax       |
| `update` | id, body, PutParams | Update a tax by id |

#### translatedConfigurations

| Name     | Parameters          | Description                             |
| :------- | :------------------ | :-------------------------------------- |
| `getAll` | GetAllParams        | List all translated configurations      |
| `get`    | id, GetParams       | Get a translated configuration by id    |
| `create` | body, PostParams    | Create a translated configuration       |
| `update` | id, body, PutParams | Update a translated configuration by id |

#### warehouseProductLocations

| Name     | Parameters          | Description                               |
| :------- | :------------------ | :---------------------------------------- |
| `getAll` | GetAllParams        | List all warehouse product locations      |
| `get`    | id, GetParams       | Get a warehouse product location by id    |
| `create` | body, PostParams    | Create a warehouse product location       |
| `update` | id, body, PutParams | Update a warehouse product location by id |

#### warehouses

| Name     | Parameters          | Description              |
| :------- | :------------------ | :----------------------- |
| `getAll` | GetAllParams        | List all warehouses      |
| `get`    | id, GetParams       | Get a warehouse by id    |
| `create` | body, PostParams    | Create a warehouse       |
| `update` | id, body, PutParams | Update a warehouse by id |

#### weightRanges

| Name     | Parameters          | Description                 |
| :------- | :------------------ | :-------------------------- |
| `getAll` | GetAllParams        | List all weight ranges      |
| `get`    | id, GetParams       | Get a weight range by id    |
| `create` | body, PostParams    | Create a weight range       |
| `update` | id, body, PutParams | Update a weight range by id |

#### zones

| Name     | Parameters          | Description         |
| :------- | :------------------ | :------------------ |
| `getAll` | GetAllParams        | List all zones      |
| `get`    | id, GetParams       | Get a zone by id    |
| `create` | body, PostParams    | Create a zone       |
| `update` | id, body, PutParams | Update a zone by id |

### GetAllParams

| Name      | Value                                                         | Description                              |
| :-------- | :------------------------------------------------------------ | :--------------------------------------- |
| `display` | 'full' or string[]                                            | Display specific keys                    |
| `filters` | {key: string; value: string OR number, operator?: Operator}[] | Filter on one or many params             |
| `limit`   | number                                                        | Limit the number of items                |
| `skip`    | number                                                        | Skip to the index (should specify limit) |
| `sort`    | (`${string}_ASC` OR `${string}_DESC`)[]                       | Sort ASC or DESC on one several keys     |

Note: In order to do an OR operator while filtering on a key, just append the same key multiple times.

```javascript
import { products } from "@kasual-business/prestashop-api";

const listProducts = async () => {
  const response = await products.getAll({
    filters: [
      { key: "id", value: 1 },
      { key: "id", value: 2 },
    ],
  });
};
```

### GetParams

| Name      | Value              | Description           |
| :-------- | :----------------- | :-------------------- |
| `display` | 'full' or string[] | Display specific keys |

### PostParams

| Name      | Value              | Description           |
| :-------- | :----------------- | :-------------------- |
| `display` | 'full' or string[] | Display specific keys |

### PutParams

| Name      | Value              | Description           |
| :-------- | :----------------- | :-------------------- |
| `display` | 'full' or string[] | Display specific keys |

### Operator

Operator can be `'start'`, `'end'`, `'contains'` and `'strict'`.

## Tests

```bash
npm run test
```
