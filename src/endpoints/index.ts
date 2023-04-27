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
import Common from './common';
import Customers from './customers';

export const addresses = new Common<Address>(Endpoint.addresses);
export const attachments = new Common<Attachment>(Endpoint.attachments);
export const carriers = new Common<Carrier>(Endpoint.carriers);
export const cartRules = new Common<CartRule>(Endpoint.cartRules);
export const carts = new Common<Cart>(Endpoint.carts);
export const categories = new Common<Category>(Endpoint.categories);
export const combinations = new Common<Combination>(Endpoint.combinations);
export const configurations = new Common<Configuration>(
  Endpoint.configurations
);
export const contacts = new Common<Contact>(Endpoint.contacts);
export const contentManagementSystem = new Common<ContentManagementSystem>(
  Endpoint.contentManagementSystem
);
export const countries = new Common<Country>(Endpoint.countries);
export const currencies = new Common<Currency>(Endpoint.currencies);
export const customerMessages = new Common<CustomerMessage>(
  Endpoint.customerMessages
);
export const customerThreads = new Common<CustomerThread>(
  Endpoint.customerThreads
);
export const customers = new Customers();
export const customizations = new Common<Customization>(
  Endpoint.customizations
);
export const deliveries = new Common<Delivery>(Endpoint.deliveries);
export const employees = new Common<Employee>(Endpoint.employees);
export const groups = new Common<Group>(Endpoint.groups);
export const guests = new Common<Guest>(Endpoint.guests);
export const imageTypes = new Common<ImageType>(Endpoint.imageTypes);
export const languages = new Common<Language>(Endpoint.languages);
export const manufacturers = new Common<Manufacturer>(Endpoint.manufacturers);
export const messages = new Common<Message>(Endpoint.messages);
export const orderCarriers = new Common<OrderCarrier>(Endpoint.orderCarriers);
export const orderCartRules = new Common<OrderCartRule>(
  Endpoint.orderCartRules
);
export const orderDetails = new Common<OrderDetail>(Endpoint.orderDetails);
export const orderHistories = new Common<OrderHistory>(Endpoint.orderHistories);
export const orderInvoices = new Common<OrderInvoice>(Endpoint.orderInvoices);
export const orderPayments = new Common<OrderPayment>(Endpoint.orderPayments);
export const orderSlip = new Common<OrderSlip>(Endpoint.orderSlip);
export const orderStates = new Common<OrderState>(Endpoint.orderStates);
export const orders = new Common<Order>(Endpoint.orders);
export const priceRanges = new Common<PriceRange>(Endpoint.priceRanges);
export const productCustomizationFields = new Common<ProductCustomizationField>(
  Endpoint.productCustomizationFields
);
export const productFeatureValues = new Common<ProductFeatureValue>(
  Endpoint.productFeatureValues
);
export const productFeatures = new Common<ProductFeature>(
  Endpoint.productFeatures
);
export const productOptionValues = new Common<ProductOptionValue>(
  Endpoint.productOptionValues
);
export const productOptions = new Common<ProductOptionValue>(
  Endpoint.productOptions
);
export const productSuppliers = new Common<ProductSupplier>(
  Endpoint.productSuppliers
);
export const products = new Common<Product>(Endpoint.products);
export const shopGroups = new Common<ShopGroup>(Endpoint.shopGroups);
export const shopUrls = new Common<ShopUrl>(Endpoint.shopUrls);
export const shops = new Common<Shop>(Endpoint.shops);
export const specificPriceRules = new Common<SpecificPriceRule>(
  Endpoint.specificPriceRules
);
export const specificPrices = new Common<SpecificPrice>(
  Endpoint.specificPrices
);
export const states = new Common<State>(Endpoint.states);
export const stockAvailables = new Common<StockAvailable>(
  Endpoint.stockAvailables
);
export const stockMovementReasons = new Common<StockMovementReason>(
  Endpoint.stockMovementReasons
);
export const stockMovements = new Common<StockMovement>(
  Endpoint.stockMovements
);
export const stocks = new Common<Stock>(Endpoint.stocks);
export const stores = new Common<Store>(Endpoint.stores);
export const suppliers = new Common<Supplier>(Endpoint.suppliers);
export const supplyOrderDetails = new Common<SupplyOrderDetail>(
  Endpoint.supplyOrderDetails
);
export const supplyOrderHistories = new Common<SupplyOrderHistory>(
  Endpoint.supplyOrderHistories
);
export const supplyOrderReceiptHistories =
  new Common<SupplyOrderReceiptHistory>(Endpoint.supplyOrderReceiptHistories);
export const supplyOrderStates = new Common<SupplyOrderState>(
  Endpoint.supplyOrderStates
);
export const supplyOrders = new Common<SupplyOrder>(Endpoint.supplyOrders);
export const tags = new Common<Tag>(Endpoint.tags);
export const taxRuleGroups = new Common<TaxRuleGroup>(Endpoint.taxRuleGroups);
export const taxRules = new Common<TaxRule>(Endpoint.taxRules);
export const taxes = new Common<Tax>(Endpoint.taxes);
export const translatedConfigurations = new Common<TranslatedConfiguration>(
  Endpoint.translatedConfigurations
);
export const warehouseProductLocations = new Common<WarehouseProductLocation>(
  Endpoint.warehouseProductLocations
);
export const warehouses = new Common<Warehouse>(Endpoint.warehouses);
export const weightRanges = new Common<WeightRange>(Endpoint.weightRanges);
export const zones = new Common<Zone>(Endpoint.zones);
