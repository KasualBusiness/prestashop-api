# prestashop-api

Simplified and typed calls to Prestashop webservices.

Access all endpoints offered by Prestashop webservices as well as custom routes added by addons.

## Installation

```bash
npm install @kasual-business/prestashop-api
```

## Usage/Examples

#### Initialize the connection

```javascript
import { init } from "@kasual-business/prestashop-api";

// Init the api url and api key
init("https://my-prestashop.com", "my-api-key");
```

#### Use

```javascript
import prestashopAPI, { products } from "@kasual-business/prestashop-api";

await prestashopAPI.products.list();
// or
await products.list();
```

#### List

```javascript
// List all products
await products.list();

// Precise custom type
interface CustomProduct extends Product {
  custom_key_from_addon: string;
}

await products.list<CustomProduct>();
```

#### Filter on name with exact match

```javascript
// List all products having 1 as id_supplier
await products.list({
  filters: [{ key: "id_supplier", value: 1 }],
});
```

#### Filter on name with containing operator

```javascript
// List all products containing "orange" in name
await products.list({
  filters: [{ key: "name", value: "orange", operator: "contains" }],
});
```

#### Sort

```javascript
// List all products and sort on id DESC
await products.list({
  sort: ["id_DESC"],
});
```

#### Display

```javascript
// List all products and display only id and name
await products.list({
  display: ["id", "name"],
});
```

#### Pagination

```javascript
// List all products and use skip and limit to paginate
await products.list({
  skip: 0,
  limit: 10,
});
```

#### Create

```javascript
// Create a product
await products.create({
  name: "name",
  // ...rest of the mandatory values
});
```

#### Update

```javascript
// Update product with id 1
await products.update(1, {
  id: "1", // You need to add the id here too
  name: "new name",
  // ...rest of the mandatory values
});
```

#### Delete

```javascript
// Delete product with id 1
await products.delete(1);
```

#### Custom calls

If you have an addon that add additional routes to prestashop's webservices, you can call them like this:

```javascript
// list
await custom<{ items: Item[] }>("my-custom-route").list();

// get
await custom<{ item: Item }>("my-custom-route").get(1);

// create
await custom<{ item: Item }>("my-custom-route").create<{ name: string }>({ name: "My name" });

// update
await custom<{ item: Item }>("my-custom-route").update<{ name: string }>(1, { name: "My new name" });

// delete
await custom<{ item: Item }>("my-custom-route").delete(1);

// list with custom query params
const searchParams = new URLSearchParams();

searchParams.append('myCustomId', '1');

await custom<{ items: Item[] }>('my-custom-route').list({
  customSearchParams: searchParams,
});
```

## API Reference

#### addresses

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `list`   | ListParams          | List all addresses      |
| `get`    | id, GetParams       | Get an address by id    |
| `create` | body, PostParams    | Create an address       |
| `update` | id, body, PutParams | Update an address by id |
| `delete` | id, DeleteParams    | Delete an address by id |

#### attachments

| Name     | Parameters          | Description                |
| :------- | :------------------ | :------------------------- |
| `list`   | ListParams          | List all attachments       |
| `get`    | id, GetParams       | Get an attachment by id    |
| `create` | body, PostParams    | Create an attachment       |
| `update` | id, body, PutParams | Update an attachment by id |
| `delete` | id, DeleteParams    | Delete an attachment by id |

#### carriers

| Name     | Parameters          | Description            |
| :------- | :------------------ | :--------------------- |
| `list`   | ListParams          | List all carriers      |
| `get`    | id, GetParams       | Get a carrier by id    |
| `create` | body, PostParams    | Create a carrier       |
| `update` | id, body, PutParams | Update a carrier by id |
| `delete` | id, DeleteParams    | Delete a carrier by id |

#### cartRules

| Name     | Parameters          | Description              |
| :------- | :------------------ | :----------------------- |
| `list`   | ListParams          | List all cart rules      |
| `get`    | id, GetParams       | Get a cart rule by id    |
| `create` | body, PostParams    | Create a cart rule       |
| `update` | id, body, PutParams | Update a cart rule by id |
| `delete` | id, DeleteParams    | Delete a cart rule by id |

#### carts

| Name     | Parameters          | Description         |
| :------- | :------------------ | :------------------ |
| `list`   | ListParams          | List all carts      |
| `get`    | id, GetParams       | Get a cart by id    |
| `create` | body, PostParams    | Create a cart       |
| `update` | id, body, PutParams | Update a cart by id |
| `delete` | id, DeleteParams    | Delete a cart by id |

#### categories

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `list`   | ListParams          | List all categories     |
| `get`    | id, GetParams       | Get a category by id    |
| `create` | body, PostParams    | Create a category       |
| `update` | id, body, PutParams | Update a category by id |
| `delete` | id, DeleteParams    | Delete a category by id |

#### combinations

| Name     | Parameters          | Description                |
| :------- | :------------------ | :------------------------- |
| `list`   | ListParams          | List all combinations      |
| `get`    | id, GetParams       | Get a combination by id    |
| `create` | body, PostParams    | Create a combination       |
| `update` | id, body, PutParams | Update a combination by id |
| `delete` | id, DeleteParams    | Delete a combination by id |

#### configurations

| Name     | Parameters          | Description                  |
| :------- | :------------------ | :--------------------------- |
| `list`   | ListParams          | List all configurations      |
| `get`    | id, GetParams       | Get a configuration by id    |
| `create` | body, PostParams    | Create a configuration       |
| `update` | id, body, PutParams | Update a configuration by id |
| `delete` | id, DeleteParams    | Delete a configuration by id |

#### contacts

| Name     | Parameters          | Description            |
| :------- | :------------------ | :--------------------- |
| `list`   | ListParams          | List all contacts      |
| `get`    | id, GetParams       | Get a contact by id    |
| `create` | body, PostParams    | Create a contact       |
| `update` | id, body, PutParams | Update a contact by id |
| `delete` | id, DeleteParams    | Delete a contact by id |

#### contentManagementSystem

| Name     | Parameters          | Description                           |
| :------- | :------------------ | :------------------------------------ |
| `list`   | ListParams          | List all content management systems   |
| `get`    | id, GetParams       | Get a content management system by id |
| `create` | body, PostParams    | Create a content                      |
| `update` | id, body, PutParams | Update a content by id                |
| `delete` | id, DeleteParams    | Delete a content by id                |

#### countries

| Name     | Parameters          | Description            |
| :------- | :------------------ | :--------------------- |
| `list`   | ListParams          | List all countries     |
| `get`    | id, GetParams       | Get a country by id    |
| `create` | body, PostParams    | Create a country       |
| `update` | id, body, PutParams | Update a country by id |
| `delete` | id, DeleteParams    | Delete a country by id |

#### currencies

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `list`   | ListParams          | List all currencies     |
| `get`    | id, GetParams       | Get a currency by id    |
| `create` | body, PostParams    | Create a currency       |
| `update` | id, body, PutParams | Update a currency by id |
| `delete` | id, DeleteParams    | Delete a currency by id |

#### customerMessages

| Name     | Parameters          | Description                     |
| :------- | :------------------ | :------------------------------ |
| `list`   | ListParams          | List all customerMessages       |
| `get`    | id, GetParams       | Get a customer message by id    |
| `create` | body, PostParams    | Create a customer message       |
| `update` | id, body, PutParams | Update a customer message by id |
| `delete` | id, DeleteParams    | Delete a customer message by id |

#### customerThreads

| Name     | Parameters          | Description                    |
| :------- | :------------------ | :----------------------------- |
| `list`   | ListParams          | List all customer threads      |
| `get`    | id, GetParams       | Get a customer thread by id    |
| `create` | body, PostParams    | Create a customer thread       |
| `update` | id, body, PutParams | Update a customer thread by id |
| `delete` | id, DeleteParams    | Delete a customer thread by id |

#### customers

| Name     | Parameters          | Description                                     |
| :------- | :------------------ | :---------------------------------------------- |
| `list`   | ListParams          | List all customers                              |
| `get`    | id                  | Get a customer by id                            |
| `create` | body, PostParams    | Create a customer                               |
| `update` | id, body, PutParams | Update a customer by id                         |
| `delete` | id, DeleteParams    | Delete a customer by id                         |
| `login`  | email, password     | Check a customer email and password combination |

#### customizations

| Name     | Parameters          | Description                  |
| :------- | :------------------ | :--------------------------- |
| `list`   | ListParams          | List all customizations      |
| `get`    | id, GetParams       | Get a customization by id    |
| `create` | body, PostParams    | Create a customization       |
| `update` | id, body, PutParams | Update a customization by id |
| `delete` | id, DeleteParams    | Delete a customization by id |

#### deliveries

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `list`   | ListParams          | List all deliveries     |
| `get`    | id, GetParams       | Get a delivery by id    |
| `create` | body, PostParams    | Create a delivery       |
| `update` | id, body, PutParams | Update a delivery by id |
| `delete` | id, DeleteParams    | Delete a delivery by id |

#### employees

| Name     | Parameters          | Description              |
| :------- | :------------------ | :----------------------- |
| `list`   | ListParams          | List all employees       |
| `get`    | id, GetParams       | Get an employee by id    |
| `create` | body, PostParams    | Create an employee       |
| `update` | id, body, PutParams | Update an employee by id |
| `delete` | id, DeleteParams    | Delete an employee by id |

#### groups

| Name     | Parameters          | Description          |
| :------- | :------------------ | :------------------- |
| `list`   | ListParams          | List all groups      |
| `get`    | id, GetParams       | Get a group by id    |
| `create` | body, PostParams    | Create a group       |
| `update` | id, body, PutParams | Update a group by id |
| `delete` | id, DeleteParams    | Delete a group by id |

#### guests

| Name     | Parameters          | Description          |
| :------- | :------------------ | :------------------- |
| `list`   | ListParams          | List all guests      |
| `get`    | id, GetParams       | Get a guest by id    |
| `create` | body, PostParams    | Create a guest       |
| `update` | id, body, PutParams | Update a guest by id |
| `delete` | id, DeleteParams    | Delete a guest by id |

#### imageTypes

| Name     | Parameters          | Description                |
| :------- | :------------------ | :------------------------- |
| `list`   | ListParams          | List all image types       |
| `get`    | id, GetParams       | Get an image type by id    |
| `create` | body, PostParams    | Create an image type       |
| `update` | id, body, PutParams | Update an image type by id |
| `delete` | id, DeleteParams    | Delete an image type by id |

#### images

| Name     | Parameters                      | Description     |
| :------- | :------------------------------ | :-------------- |
| `create` | ImageTypeRoute, productId, path | Create an image |
| `get`    | ImageTypeRoute, productId, path | Get an image    |

#### languages

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `list`   | ListParams          | List all languages      |
| `get`    | id, GetParams       | Get a language by id    |
| `create` | body, PostParams    | Create a language       |
| `update` | id, body, PutParams | Update a language by id |
| `delete` | id, DeleteParams    | Delete a language by id |

#### manufacturers

| Name     | Parameters          | Description                 |
| :------- | :------------------ | :-------------------------- |
| `list`   | ListParams          | List all manufacturers      |
| `get`    | id, GetParams       | Get a manufacturer by id    |
| `create` | body, PostParams    | Create a manufacturer       |
| `update` | id, body, PutParams | Update a manufacturer by id |
| `delete` | id, DeleteParams    | Delete a manufacturer by id |

#### messages

| Name     | Parameters          | Description            |
| :------- | :------------------ | :--------------------- |
| `list`   | ListParams          | List all messages      |
| `get`    | id, GetParams       | Get a message by id    |
| `create` | body, PostParams    | Create a message       |
| `update` | id, body, PutParams | Update a message by id |
| `delete` | id, DeleteParams    | Delete a message by id |

#### orderCarriers

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `list`   | ListParams          | List all orderCarriers        |
| `get`    | id, GetParams       | Get an order carrier by id    |
| `create` | body, PostParams    | Create an order carrier       |
| `update` | id, body, PutParams | Update an order carrier by id |
| `delete` | id, DeleteParams    | Delete an order carrier by id |

#### orderCartRules

| Name     | Parameters          | Description                     |
| :------- | :------------------ | :------------------------------ |
| `list`   | ListParams          | List all orderCartRules         |
| `get`    | id, GetParams       | Get an order cart rule by id    |
| `create` | body, PostParams    | Create an order cart rule       |
| `update` | id, body, PutParams | Update an order cart rule by id |
| `delete` | id, DeleteParams    | Delete an order cart rule by id |

#### orderDetails

| Name     | Parameters          | Description                  |
| :------- | :------------------ | :--------------------------- |
| `list`   | ListParams          | List all order details       |
| `get`    | id, GetParams       | Get an order detail by id    |
| `create` | body, PostParams    | Create an order detail       |
| `update` | id, body, PutParams | Update an order detail by id |
| `delete` | id, DeleteParams    | Delete an order detail by id |

#### orderHistories

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `list`   | ListParams          | List all order histories      |
| `get`    | id, GetParams       | Get an order history by id    |
| `create` | body, PostParams    | Create an order history       |
| `update` | id, body, PutParams | Update an order history by id |
| `delete` | id, DeleteParams    | Delete an order history by id |

#### orderInvoices

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `list`   | ListParams          | List all order invoices       |
| `get`    | id, GetParams       | Get an order invoice by id    |
| `create` | body, PostParams    | Create an order invoice       |
| `update` | id, body, PutParams | Update an order invoice by id |
| `delete` | id, DeleteParams    | Delete an order invoice by id |

#### orderPayments

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `list`   | ListParams          | List all order payments       |
| `get`    | id, GetParams       | Get an order payment by id    |
| `create` | body, PostParams    | Create an order payment       |
| `update` | id, body, PutParams | Update an order payment by id |
| `delete` | id, DeleteParams    | Delete an order payment by id |

#### orderSlip

| Name     | Parameters          | Description                |
| :------- | :------------------ | :------------------------- |
| `list`   | ListParams          | List all order slips       |
| `get`    | id, GetParams       | Get an order slip by id    |
| `create` | body, PostParams    | Create an order slip       |
| `update` | id, body, PutParams | Update an order slip by id |
| `delete` | id, DeleteParams    | Delete an order slip by id |

#### orderStates

| Name     | Parameters          | Description                 |
| :------- | :------------------ | :-------------------------- |
| `list`   | ListParams          | List all order states       |
| `get`    | id, GetParams       | Get an order state by id    |
| `create` | body, PostParams    | Create an order state       |
| `update` | id, body, PutParams | Update an order state by id |
| `delete` | id, DeleteParams    | Delete an order state by id |

#### orders

| Name     | Parameters          | Description           |
| :------- | :------------------ | :-------------------- |
| `list`   | ListParams          | List all orders       |
| `get`    | id, GetParams       | Get an order by id    |
| `create` | body, PostParams    | Create an order       |
| `update` | id, body, PutParams | Update an order by id |
| `delete` | id, DeleteParams    | Delete an order by id |

#### priceRanges

| Name     | Parameters          | Description                |
| :------- | :------------------ | :------------------------- |
| `list`   | ListParams          | List all price ranges      |
| `get`    | id, GetParams       | Get a price range by id    |
| `create` | body, PostParams    | Create a price range       |
| `update` | id, body, PutParams | Update a price range by id |
| `delete` | id, DeleteParams    | Delete a price range by id |

#### productCustomizationFields

| Name     | Parameters          | Description                                |
| :------- | :------------------ | :----------------------------------------- |
| `list`   | ListParams          | List all product customization fields      |
| `get`    | id, GetParams       | Get a product customization field by id    |
| `create` | body, PostParams    | Create a product customization field       |
| `update` | id, body, PutParams | Update a product customization field by id |
| `delete` | id, DeleteParams    | Delete a product customization field by id |

#### productFeatureValues

| Name     | Parameters          | Description                          |
| :------- | :------------------ | :----------------------------------- |
| `list`   | ListParams          | List all product feature values      |
| `get`    | id, GetParams       | Get a product feature value by id    |
| `create` | body, PostParams    | Create a product feature value       |
| `update` | id, body, PutParams | Update a product feature value by id |
| `delete` | id, DeleteParams    | Delete a product feature value by id |

#### productFeatures

| Name     | Parameters          | Description                      |
| :------- | :------------------ | :------------------------------- |
| `list`   | ListParams          | List all product features fields |
| `get`    | id, GetParams       | Get a product feature by id      |
| `create` | body, PostParams    | Create a product feature         |
| `update` | id, body, PutParams | Update a product feature by id   |
| `delete` | id, DeleteParams    | Delete a product feature by id   |

#### productOptionValues

| Name     | Parameters          | Description                         |
| :------- | :------------------ | :---------------------------------- |
| `list`   | ListParams          | List all product option values      |
| `get`    | id, GetParams       | Get a product option value by id    |
| `create` | body, PostParams    | Create a product option value       |
| `update` | id, body, PutParams | Update a product option value by id |
| `delete` | id, DeleteParams    | Delete a product option value by id |

#### productOptions

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `list`   | ListParams          | List all product options      |
| `get`    | id, GetParams       | Get a product option by id    |
| `create` | body, PostParams    | Create a product option       |
| `update` | id, body, PutParams | Update a product option by id |
| `delete` | id, DeleteParams    | Delete a product option by id |

#### productSuppliers

| Name     | Parameters          | Description                     |
| :------- | :------------------ | :------------------------------ |
| `list`   | ListParams          | List all product suppliers      |
| `get`    | id, GetParams       | Get a product supplier by id    |
| `create` | body, PostParams    | Create a product supplier       |
| `update` | id, body, PutParams | Update a product supplier by id |
| `delete` | id, DeleteParams    | Delete a product supplier by id |

#### products

| Name     | Parameters          | Description            |
| :------- | :------------------ | :--------------------- |
| `list`   | ListParams          | List all products      |
| `get`    | id, GetParams       | Get a product by id    |
| `create` | body, PostParams    | Create a product       |
| `update` | id, body, PutParams | Update a product by id |
| `delete` | id, DeleteParams    | Delete a product by id |

#### shopGroups

| Name     | Parameters          | Description               |
| :------- | :------------------ | :------------------------ |
| `list`   | ListParams          | List all shop groups      |
| `get`    | id, GetParams       | Get a shop group by id    |
| `create` | body, PostParams    | Create a shop group       |
| `update` | id, body, PutParams | Update a shop group by id |
| `delete` | id, DeleteParams    | Delete a shop group by id |

#### shopUrls

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `list`   | ListParams          | List all shop urls      |
| `get`    | id, GetParams       | Get a shop url by id    |
| `create` | body, PostParams    | Create a shop url       |
| `update` | id, body, PutParams | Update a shop url by id |
| `delete` | id, DeleteParams    | Delete a shop url by id |

#### shops

| Name     | Parameters          | Description         |
| :------- | :------------------ | :------------------ |
| `list`   | ListParams          | List all shops      |
| `get`    | id, GetParams       | Get a shop by id    |
| `create` | body, PostParams    | Create a shop       |
| `update` | id, body, PutParams | Update a shop by id |
| `delete` | id, DeleteParams    | Delete a shop by id |

#### specificPriceRules

| Name     | Parameters          | Description                        |
| :------- | :------------------ | :--------------------------------- |
| `list`   | ListParams          | List all specific price rules      |
| `get`    | id, GetParams       | Get a specific price rule by id    |
| `create` | body, PostParams    | Create a specific price rule       |
| `update` | id, body, PutParams | Update a specific price rule by id |
| `delete` | id, DeleteParams    | Delete a specific price rule by id |

#### specificPrices

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `list`   | ListParams          | List all specific prices      |
| `get`    | id, GetParams       | Get a specific price by id    |
| `create` | body, PostParams    | Create a specific price       |
| `update` | id, body, PutParams | Update a specific price by id |
| `delete` | id, DeleteParams    | Delete a specific price by id |

#### states

| Name     | Parameters          | Description          |
| :------- | :------------------ | :------------------- |
| `list`   | ListParams          | List all states      |
| `get`    | id, GetParams       | Get a state by id    |
| `create` | body, PostParams    | Create a state       |
| `update` | id, body, PutParams | Update a state by id |
| `delete` | id, DeleteParams    | Delete a state by id |

#### stockAvailables

| Name     | Parameters          | Description                    |
| :------- | :------------------ | :----------------------------- |
| `list`   | ListParams          | List all stock availables      |
| `get`    | id, GetParams       | Get a stock available by id    |
| `create` | body, PostParams    | Create a stock available       |
| `update` | id, body, PutParams | Update a stock available by id |
| `delete` | id, DeleteParams    | Delete a stock available by id |

#### stockMovementReasons

| Name     | Parameters          | Description                          |
| :------- | :------------------ | :----------------------------------- |
| `list`   | ListParams          | List all stock movement reasons      |
| `get`    | id, GetParams       | Get a stock movement reason by id    |
| `create` | body, PostParams    | Create a stock movement reason       |
| `update` | id, body, PutParams | Update a stock movement reason by id |
| `delete` | id, DeleteParams    | Delete a stock movement reason by id |

#### stockMovements

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `list`   | ListParams          | List all stock movements      |
| `get`    | id, GetParams       | Get a stock movement by id    |
| `create` | body, PostParams    | Create a stock movement       |
| `update` | id, body, PutParams | Update a stock movement by id |
| `delete` | id, DeleteParams    | Delete a stock movement by id |

#### stocks

| Name     | Parameters          | Description          |
| :------- | :------------------ | :------------------- |
| `list`   | ListParams          | List all stocks      |
| `get`    | id, GetParams       | Get a stock by id    |
| `create` | body, PostParams    | Create a stock       |
| `update` | id, body, PutParams | Update a stock by id |
| `delete` | id, DeleteParams    | Delete a stock by id |

#### stores

| Name     | Parameters          | Description          |
| :------- | :------------------ | :------------------- |
| `list`   | ListParams          | List all stores      |
| `get`    | id, GetParams       | Get a store by id    |
| `create` | body, PostParams    | Create a store       |
| `update` | id, body, PutParams | Update a store by id |
| `delete` | id, DeleteParams    | Delete a store by id |

#### suppliers

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `list`   | ListParams          | List all suppliers      |
| `get`    | id, GetParams       | Get a supplier by id    |
| `create` | body, PostParams    | Create a supplier       |
| `update` | id, body, PutParams | Update a supplier by id |
| `delete` | id, DeleteParams    | Delete a supplier by id |

#### supplyOrderDetails

| Name     | Parameters          | Description                        |
| :------- | :------------------ | :--------------------------------- |
| `list`   | ListParams          | List all supply order details      |
| `get`    | id, GetParams       | Get a supply order detail by id    |
| `create` | body, PostParams    | Create a supply order detail       |
| `update` | id, body, PutParams | Update a supply order detail by id |
| `delete` | id, DeleteParams    | Delete a supply order detail by id |

#### supplyOrderHistories

| Name     | Parameters          | Description                         |
| :------- | :------------------ | :---------------------------------- |
| `list`   | ListParams          | List all supply order histories     |
| `get`    | id, GetParams       | Get a supply order history by id    |
| `create` | body, PostParams    | Create a supply order history       |
| `update` | id, body, PutParams | Update a supply order history by id |
| `delete` | id, DeleteParams    | Delete a supply order history by id |

#### supplyOrderReceiptHistories

| Name     | Parameters          | Description                              |
| :------- | :------------------ | :--------------------------------------- |
| `list`   | ListParams          | List all supply order receipt histories  |
| `get`    | id, GetParams       | Get a supply order receipt history by id |
| `create` | body, PostParams    | Create a supply order receipt            |
| `update` | id, body, PutParams | Update a supply order receipt by id      |
| `delete` | id, DeleteParams    | Delete a supply order receipt by id      |

#### supplyOrderStates

| Name     | Parameters          | Description                       |
| :------- | :------------------ | :-------------------------------- |
| `list`   | ListParams          | List all supply order states      |
| `get`    | id, GetParams       | Get a supply order state by id    |
| `create` | body, PostParams    | Create a supply order state       |
| `update` | id, body, PutParams | Update a supply order state by id |
| `delete` | id, DeleteParams    | Delete a supply order state by id |

#### supplyOrders

| Name     | Parameters          | Description                 |
| :------- | :------------------ | :-------------------------- |
| `list`   | ListParams          | List all supply orders      |
| `get`    | id, GetParams       | Get a supply order by id    |
| `create` | body, PostParams    | Create a supply order       |
| `update` | id, body, PutParams | Update a supply order by id |
| `delete` | id, DeleteParams    | Delete a supply order by id |

#### tags

| Name     | Parameters          | Description        |
| :------- | :------------------ | :----------------- |
| `list`   | ListParams          | List all tags      |
| `get`    | id, GetParams       | Get a tag by id    |
| `create` | body, PostParams    | Create a tag       |
| `update` | id, body, PutParams | Update a tag by id |
| `delete` | id, DeleteParams    | Delete a tag by id |

#### taxRuleGroups

| Name     | Parameters          | Description                   |
| :------- | :------------------ | :---------------------------- |
| `list`   | ListParams          | List all tax rule groups      |
| `get`    | id, GetParams       | Get a tax rule group by id    |
| `create` | body, PostParams    | Create a tax rule group       |
| `update` | id, body, PutParams | Update a tax rule group by id |
| `delete` | id, DeleteParams    | Delete a tax rule group by id |

#### taxRules

| Name     | Parameters          | Description             |
| :------- | :------------------ | :---------------------- |
| `list`   | ListParams          | List all tax rules      |
| `get`    | id, GetParams       | Get a tax rule by id    |
| `create` | body, PostParams    | Create a tax rule       |
| `update` | id, body, PutParams | Update a tax rule by id |
| `delete` | id, DeleteParams    | Delete a tax rule by id |

#### taxes

| Name     | Parameters          | Description        |
| :------- | :------------------ | :----------------- |
| `list`   | ListParams          | List all taxes     |
| `get`    | id, GetParams       | Get a tax by id    |
| `create` | body, PostParams    | Create a tax       |
| `update` | id, body, PutParams | Update a tax by id |
| `delete` | id, DeleteParams    | Delete a tax by id |

#### translatedConfigurations

| Name     | Parameters          | Description                             |
| :------- | :------------------ | :-------------------------------------- |
| `list`   | ListParams          | List all translated configurations      |
| `get`    | id, GetParams       | Get a translated configuration by id    |
| `create` | body, PostParams    | Create a translated configuration       |
| `update` | id, body, PutParams | Update a translated configuration by id |
| `delete` | id, DeleteParams    | Delete a translated configuration by id |

#### warehouseProductLocations

| Name     | Parameters          | Description                               |
| :------- | :------------------ | :---------------------------------------- |
| `list`   | ListParams          | List all warehouse product locations      |
| `get`    | id, GetParams       | Get a warehouse product location by id    |
| `create` | body, PostParams    | Create a warehouse product location       |
| `update` | id, body, PutParams | Update a warehouse product location by id |
| `delete` | id, DeleteParams    | Delete a warehouse product location by id |

#### warehouses

| Name     | Parameters          | Description              |
| :------- | :------------------ | :----------------------- |
| `list`   | ListParams          | List all warehouses      |
| `get`    | id, GetParams       | Get a warehouse by id    |
| `create` | body, PostParams    | Create a warehouse       |
| `update` | id, body, PutParams | Update a warehouse by id |
| `delete` | id, DeleteParams    | Delete a warehouse by id |

#### weightRanges

| Name     | Parameters          | Description                 |
| :------- | :------------------ | :-------------------------- |
| `list`   | ListParams          | List all weight ranges      |
| `get`    | id, GetParams       | Get a weight range by id    |
| `create` | body, PostParams    | Create a weight range       |
| `update` | id, body, PutParams | Update a weight range by id |
| `delete` | id, DeleteParams    | Delete a weight range by id |

#### zones

| Name     | Parameters          | Description         |
| :------- | :------------------ | :------------------ |
| `list`   | ListParams          | List all zones      |
| `get`    | id, GetParams       | Get a zone by id    |
| `create` | body, PostParams    | Create a zone       |
| `update` | id, body, PutParams | Update a zone by id |
| `delete` | id, DeleteParams    | Delete a zone by id |

#### custom

| Name     | Parameters             | Description                     |
| :------- | :--------------------- | :------------------------------ |
| `list`   | CustomGetParams        | List all on custom endpoint     |
| `get`    | id, CustomGetParams    | Get on custom endpoint by id    |
| `create` | body, CustomParams     | Create on custom endpoint       |
| `update` | id, body, CustomParams | Update on custom endpoint by id |
| `delete` | id, body, CustomParams | Delete on custom endpoint by id |

### ListParams

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
  const response = await products.list({
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

### CustomParams

| Name      | Value              | Description           |
| :-------- | :----------------- | :-------------------- |
| `display` | 'full' or string[] | Display specific keys |

### CustomGetParams

| Name                 | Value              | Description              |
| :------------------- | :----------------- | :----------------------- |
| `display`            | 'full' or string[] | Display specific keys    |
| `customSearchParams` | URLSearchParams    | Add custom search params |

### Operator

Operator can be `'start'`, `'end'`, `'contains'` and `'strict'`.

## Tests

```bash
npm run test
```
