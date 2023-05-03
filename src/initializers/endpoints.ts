import { Endpoint } from '../enums/endpoint.enum';
import {
  Address,
  Attachment,
  Carrier,
  Cart,
  CartRule,
  Category,
  Combination,
  Configuration,
  Contact,
  ContentManagementSystem,
  Country,
  Currency,
  CustomerMessage,
  CustomerThread,
  Customization,
  Delivery,
  Employee,
  Group,
  Guest,
  ImageType,
  Language,
  Manufacturer,
  Message,
  Order,
  OrderCarrier,
  OrderCartRule,
  OrderDetail,
  OrderHistory,
  OrderInvoice,
  OrderPayment,
  OrderSlip,
  OrderState,
  PriceRange,
  Product,
  ProductCustomizationField,
  ProductFeature,
  ProductFeatureValue,
  ProductOptionValue,
  ProductSupplier,
  Shop,
  ShopGroup,
  ShopUrl,
  SpecificPrice,
  SpecificPriceRule,
  State,
  Stock,
  StockAvailable,
  StockMovement,
  StockMovementReason,
  Store,
  Supplier,
  SupplyOrder,
  SupplyOrderDetail,
  SupplyOrderHistory,
  SupplyOrderReceiptHistory,
  SupplyOrderState,
  Tag,
  Tax,
  TaxRule,
  TaxRuleGroup,
  TranslatedConfiguration,
  Warehouse,
  WarehouseProductLocation,
  WeightRange,
  Zone,
} from '../types/prestashop.type';
import { Base, Customers, Images } from '../classes';
import { Custom } from '../classes/custom.class';

/**
 * Initiliaze and export all endpoints.
 * If an endpoint need additional properties in addition to list, get,
 * create and update, a new class extending Base is created.
 */
export const addresses = new Base<Address>(Endpoint.addresses);
export const attachments = new Base<Attachment>(Endpoint.attachments);
export const carriers = new Base<Carrier>(Endpoint.carriers);
export const cartRules = new Base<CartRule>(Endpoint.cartRules);
export const carts = new Base<Cart>(Endpoint.carts);
export const categories = new Base<Category>(Endpoint.categories);
export const combinations = new Base<Combination>(Endpoint.combinations);
export const configurations = new Base<Configuration>(Endpoint.configurations);
export const contacts = new Base<Contact>(Endpoint.contacts);
export const contentManagementSystem = new Base<ContentManagementSystem>(
  Endpoint.contentManagementSystem
);
export const countries = new Base<Country>(Endpoint.countries);
export const currencies = new Base<Currency>(Endpoint.currencies);
export const customerMessages = new Base<CustomerMessage>(
  Endpoint.customerMessages
);
export const customerThreads = new Base<CustomerThread>(
  Endpoint.customerThreads
);
export const customers = new Customers();
export const customizations = new Base<Customization>(Endpoint.customizations);
export const deliveries = new Base<Delivery>(Endpoint.deliveries);
export const employees = new Base<Employee>(Endpoint.employees);
export const groups = new Base<Group>(Endpoint.groups);
export const guests = new Base<Guest>(Endpoint.guests);
export const imageTypes = new Base<ImageType>(Endpoint.imageTypes);
export const images = new Images();
export const languages = new Base<Language>(Endpoint.languages);
export const manufacturers = new Base<Manufacturer>(Endpoint.manufacturers);
export const messages = new Base<Message>(Endpoint.messages);
export const orderCarriers = new Base<OrderCarrier>(Endpoint.orderCarriers);
export const orderCartRules = new Base<OrderCartRule>(Endpoint.orderCartRules);
export const orderDetails = new Base<OrderDetail>(Endpoint.orderDetails);
export const orderHistories = new Base<OrderHistory>(Endpoint.orderHistories);
export const orderInvoices = new Base<OrderInvoice>(Endpoint.orderInvoices);
export const orderPayments = new Base<OrderPayment>(Endpoint.orderPayments);
export const orderSlip = new Base<OrderSlip>(Endpoint.orderSlip);
export const orderStates = new Base<OrderState>(Endpoint.orderStates);
export const orders = new Base<Order>(Endpoint.orders);
export const priceRanges = new Base<PriceRange>(Endpoint.priceRanges);
export const productCustomizationFields = new Base<ProductCustomizationField>(
  Endpoint.productCustomizationFields
);
export const productFeatureValues = new Base<ProductFeatureValue>(
  Endpoint.productFeatureValues
);
export const productFeatures = new Base<ProductFeature>(
  Endpoint.productFeatures
);
export const productOptionValues = new Base<ProductOptionValue>(
  Endpoint.productOptionValues
);
export const productOptions = new Base<ProductOptionValue>(
  Endpoint.productOptions
);
export const productSuppliers = new Base<ProductSupplier>(
  Endpoint.productSuppliers
);
export const products = new Base<Product>(Endpoint.products);
export const shopGroups = new Base<ShopGroup>(Endpoint.shopGroups);
export const shopUrls = new Base<ShopUrl>(Endpoint.shopUrls);
export const shops = new Base<Shop>(Endpoint.shops);
export const specificPriceRules = new Base<SpecificPriceRule>(
  Endpoint.specificPriceRules
);
export const specificPrices = new Base<SpecificPrice>(Endpoint.specificPrices);
export const states = new Base<State>(Endpoint.states);
export const stockAvailables = new Base<StockAvailable>(
  Endpoint.stockAvailables
);
export const stockMovementReasons = new Base<StockMovementReason>(
  Endpoint.stockMovementReasons
);
export const stockMovements = new Base<StockMovement>(Endpoint.stockMovements);
export const stocks = new Base<Stock>(Endpoint.stocks);
export const stores = new Base<Store>(Endpoint.stores);
export const suppliers = new Base<Supplier>(Endpoint.suppliers);
export const supplyOrderDetails = new Base<SupplyOrderDetail>(
  Endpoint.supplyOrderDetails
);
export const supplyOrderHistories = new Base<SupplyOrderHistory>(
  Endpoint.supplyOrderHistories
);
export const supplyOrderReceiptHistories = new Base<SupplyOrderReceiptHistory>(
  Endpoint.supplyOrderReceiptHistories
);
export const supplyOrderStates = new Base<SupplyOrderState>(
  Endpoint.supplyOrderStates
);
export const supplyOrders = new Base<SupplyOrder>(Endpoint.supplyOrders);
export const tags = new Base<Tag>(Endpoint.tags);
export const taxRuleGroups = new Base<TaxRuleGroup>(Endpoint.taxRuleGroups);
export const taxRules = new Base<TaxRule>(Endpoint.taxRules);
export const taxes = new Base<Tax>(Endpoint.taxes);
export const translatedConfigurations = new Base<TranslatedConfiguration>(
  Endpoint.translatedConfigurations
);
export const warehouseProductLocations = new Base<WarehouseProductLocation>(
  Endpoint.warehouseProductLocations
);
export const warehouses = new Base<Warehouse>(Endpoint.warehouses);
export const weightRanges = new Base<WeightRange>(Endpoint.weightRanges);
export const zones = new Base<Zone>(Endpoint.zones);

/** Export Custom class for non-native prestashop api's calls */
export const custom = <Response>(endpoint: string) =>
  new Custom<Response>(endpoint);
