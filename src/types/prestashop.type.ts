export type LanguageValuesCreate = {
  language: {
    '@id': number;
    '#text': string;
  }[];
};

export type PrestashopBasicValueObject = {
  id: string;
  value: string;
};

export type PrestashopMultiLanguageString =
  | PrestashopBasicValueObject[]
  | string;

export type Address = {
  id: number;
  id_customer: string;
  id_manufacturer: string;
  id_supplier: string;
  id_warehouse: string;
  id_country: string;
  id_state: string;
  alias: string;
  company: string;
  lastname: string;
  firstname: string;
  vat_number: string;
  address1: string;
  address2: string;
  postcode: string;
  city: string;
  other: string;
  phone: string;
  phone_mobile: string;
  dni: string;
  deleted: string;
  date_add: string;
  date_upd: string;
};

export type Attachment = {
  id: number;
  file: string;
  file_name: string;
  file_size: string;
  mime: string;
  name: PrestashopMultiLanguageString;
  description: PrestashopMultiLanguageString;
  associations: {
    products: {
      id: string;
    }[];
  };
};

export type Carrier = {
  id: number;
  deleted: string;
  is_module: string;
  id_tax_rules_group: string;
  id_reference: string;
  name: string;
  active: string;
  is_free: string;
  url: string;
  shipping_handling: string;
  shipping_external: string;
  range_behavior: string;
  shipping_method: string;
  max_width: string;
  max_height: string;
  max_depth: string;
  max_weight: string;
  grade: string;
  external_module_name: string;
  need_range: string;
  position: string;
  delay: PrestashopMultiLanguageString;
};

export type CartRule = {
  id: number;
  id_customer: string;
  date_from: string;
  date_to: string;
  description: string;
  quantity: string;
  quantity_per_user: string;
  priority: string;
  partial_use: string;
  code: string;
  minimum_amount: string;
  minimum_amount_tax: string;
  minimum_amount_currency: string;
  minimum_amount_shipping: string;
  country_restriction: string;
  carrier_restriction: string;
  group_restriction: string;
  cart_rule_restriction: string;
  product_restriction: string;
  shop_restriction: string;
  free_shipping: string;
  reduction_percent: string;
  reduction_amount: string;
  reduction_tax: string;
  reduction_currency: string;
  reduction_product: string;
  reduction_exclude_special: string;
  gift_product: string;
  gift_product_attribute: string;
  highlight: string;
  active: string;
  date_add: string;
  date_upd: string;
  name: PrestashopMultiLanguageString;
};

export type Cart = {
  id: number;
  id_address_delivery: string;
  id_address_invoice: string;
  id_currency: string;
  id_customer: string;
  id_guest: string;
  id_lang: string;
  id_shop_group: string;
  id_shop: string;
  id_carrier: string;
  recyclable: string;
  gift: string;
  gift_message: string;
  mobile_theme: string;
  delivery_option: string;
  secure_key: string;
  allow_seperated_package: string;
  date_add: string;
  date_upd: string;
  associations: {
    cart_rows: {
      id_product: string;
      id_product_attribute: string;
      id_address_delivery: string;
      id_customization: string;
      quantity: string;
    }[];
  };
};

export type Category = {
  id: number;
  id_parent: string;
  active: string;
  id_shop_default: string;
  is_root_category: string;
  position: string;
  date_add: string;
  date_upd: string;
  name: PrestashopMultiLanguageString;
  link_rewrite: PrestashopMultiLanguageString;
  description: PrestashopMultiLanguageString;
  meta_title: PrestashopMultiLanguageString;
  meta_description:
    | PrestashopBasicValueObject[]
    | LanguageValuesCreate
    | string;
  meta_keywords: PrestashopMultiLanguageString;
  associations: {
    categories: {
      id: string;
    }[];
    products: {
      id: string;
    }[];
  };
};

export type Combination = {
  id: number;
  id_product: string;
  location: string;
  ean13: string;
  isbn: string;
  upc: string;
  mpn: string;
  quantity: string;
  reference: string;
  supplier_reference: string;
  wholesale_price: string;
  price: string;
  ecotax: string;
  weight: string;
  unit_price_impact: string;
  minimal_quantity: string;
  low_stock_threshold: string | null;
  low_stock_alert: string;
  default_on: string;
  available_date: string;
  associations: {
    product_option_values: {
      id: string;
    }[];
    images: {
      id: string;
    }[];
  };
};

export type Configuration = {
  id: number;
  value: string;
  name: string;
  id_shop_group: string;
  id_shop: string;
  date_add: string;
  date_upd: string;
};

export type Contact = {
  id: number;
  email: string;
  customer_service: string;
  name: PrestashopMultiLanguageString;
  description: PrestashopMultiLanguageString;
};

export type Content = {
  id: number;
  id_cms_category: string;
  position: string;
  indexation: string;
  active: string;
  meta_description:
    | PrestashopBasicValueObject[]
    | LanguageValuesCreate
    | string;
  meta_keywords: PrestashopMultiLanguageString;
  meta_title: PrestashopMultiLanguageString;
  head_seo_title: PrestashopMultiLanguageString;
  link_rewrite: PrestashopMultiLanguageString;
  content: PrestashopMultiLanguageString;
};

export type ContentManagementSystem = {
  id: number;
  id_cms_category: string;
  position: string;
  indexation: string;
  active: string;
  meta_description:
    | PrestashopBasicValueObject[]
    | LanguageValuesCreate
    | string;
  meta_keywords: PrestashopMultiLanguageString;
  meta_title: PrestashopMultiLanguageString;
  head_seo_title: PrestashopMultiLanguageString;
  link_rewrite: PrestashopMultiLanguageString;
  content: PrestashopMultiLanguageString;
};

export type Country = {
  id: number;
  id_zone: string;
  id_currency: string;
  call_prefix: string;
  iso_code: string;
  active: string;
  contains_states: string;
  need_identification_number: string;
  need_zip_code: string;
  zip_code_format: string;
  display_tax_label: string;
  name: PrestashopMultiLanguageString;
};

export type Currency = {
  id: number;
  names: PrestashopMultiLanguageString;
  name: string;
  symbol: PrestashopMultiLanguageString;
  iso_code: string;
  numeric_iso_code: string;
  precision: string;
  conversion_rate: string;
  deleted: string;
  active: string;
  unofficial: string;
  modified: string;
  pattern: PrestashopMultiLanguageString;
};

export type CustomerMessage = {
  id: number;
  id_employee: string;
  id_customer_thread: string;
  ip_address: string;
  message: string;
  file_name: string;
  user_agent: string;
  private: string;
  date_add: string;
  date_upd: string;
  read: string;
};

export type CustomerThread = {
  id: number;
  id_lang: string;
  id_shop: string;
  id_customer: string;
  id_order: string;
  id_product: string;
  id_contact: string;
  email: string;
  token: string;
  status: string;
  date_add: string;
  date_upd: string;
  associations: {
    customer_messages: {
      id: string;
    }[];
  };
};

export type Customer = {
  id: number;
  id_default_group: string;
  id_lang: string;
  newsletter_date_add: string;
  ip_registration_newsletter: string;
  last_passwd_gen: string;
  secure_key: string;
  deleted: string;
  passwd: string;
  lastname: string;
  firstname: string;
  email: string;
  id_gender: string;
  birthday: string;
  newsletter: string;
  optin: string;
  website: string;
  company: string;
  siret: string;
  ape: string;
  outstanding_allow_amount: string;
  show_public_prices: string;
  id_risk: string;
  max_payment_days: string;
  active: string;
  note: string;
  is_guest: string;
  id_shop: string;
  id_shop_group: string;
  date_add: string;
  date_upd: string;
  reset_password_token: string;
  reset_password_validity: string;
  associations: {
    groups: {
      id: string;
    }[];
  };
};

export type Customization = {
  id: number;
  id_address_delivery: string;
  id_cart: string;
  id_product: string;
  id_product_attribute: string;
  quantity: string;
  quantity_refunded: string;
  quantity_returned: string;
  in_cart: string;
  associations: {
    customized_data_text_fields: {
      id_customization_field: string;
      value: string;
    }[];
    customized_data_images: {
      id_customization_field: string;
      value: string;
    }[];
  };
};

export type Delivery = {
  id: number;
  id_carrier: string;
  id_range_price: string;
  id_range_weight: string;
  id_zone: string;
  id_shop: string;
  id_shop_group: string;
  price: string;
};

export type Employee = {
  id: number;
  id_lang: string;
  last_passwd_gen: string;
  stats_date_from: string;
  stats_date_to: string;
  stats_compare_from: string;
  stats_compare_to: string;
  passwd: string;
  lastname: string;
  firstname: string;
  email: string;
  active: string;
  id_profile: string;
  bo_color: string;
  default_tab: string;
  bo_theme: string;
  bo_css: string;
  bo_width: string;
  bo_menu: string;
  stats_compare_option: string;
  preselect_date_range: string;
  id_last_order: string;
  id_last_customer_message: string;
  id_last_customer: string;
  reset_password_token: string;
  reset_password_validity: string;
  has_enabled_gravatar: string;
};

export type Group = {
  id: number;
  reduction: string;
  price_display_method: string;
  show_prices: string;
  date_add: string;
  date_upd: string;
  name: PrestashopMultiLanguageString;
};

export type Guest = {
  id: number;
  id_customer: string;
  id_operating_system: string;
  id_web_browser: string;
  javascript: string;
  screen_resolution_x: string;
  screen_resolution_y: string;
  screen_color: string;
  sun_java: string;
  adobe_flash: string;
  adobe_director: string;
  apple_quicktime: string;
  real_player: string;
  windows_media: string;
  accept_LanguageValue: string;
  mobile_theme: string;
};

export type ImageType = {
  id: number;
  name: string;
  width: string;
  height: string;
  categories: string;
  products: string;
  manufacturers: string;
  suppliers: string;
  stores: string;
};

export type Language = {
  id: number;
  name: string;
  iso_code: string;
  locale: string;
  language_code: string;
  active: string;
  is_rtl: string;
  date_format_lite: string;
  date_format_full: string;
};

export type Manufacturer = {
  id: number;
  active: string;
  name: string;
  date_add: string;
  date_upd: string;
  description: PrestashopMultiLanguageString;
  short_description:
    | PrestashopBasicValueObject[]
    | LanguageValuesCreate
    | string;
  meta_title: PrestashopMultiLanguageString;
  meta_description:
    | PrestashopBasicValueObject[]
    | LanguageValuesCreate
    | string;
  meta_keywords: PrestashopMultiLanguageString;
  associations: {
    addresses: {
      id: string;
    }[];
  };
};

export type Message = {
  id: number;
  id_cart: string;
  id_order: string;
  id_customer: string;
  id_employee: string;
  message: string;
  private: string;
  date_add: string;
};

export type OrderCarrier = {
  id: number;
  id_order: string;
  id_carrier: string;
  id_order_invoice: string;
  weight: string;
  shipping_cost_tax_excl: string;
  shipping_cost_tax_incl: string;
  tracking_number: string;
  date_add: string;
};

export type OrderCartRule = {
  id: number;
  id_order: string;
  id_cart_rule: string;
  id_order_invoice: string;
  name: string;
  value: string;
  value_tax_excl: string;
  free_shipping: string;
  deleted: string;
};

export type OrderDetail = {
  id: number;
  id_order: string;
  product_id: string;
  product_attribute_id: string;
  product_quantity_reinjected: string;
  group_reduction: string;
  discount_quantity_applied: string;
  download_hash: string;
  download_deadline: string;
  id_order_invoice: string;
  id_warehouse: string;
  id_shop: string;
  id_customization: string;
  product_name: string;
  product_quantity: string;
  product_quantity_in_stock: string;
  product_quantity_return: string;
  product_quantity_refunded: string;
  product_price: string;
  reduction_percent: string;
  reduction_amount: string;
  reduction_amount_tax_incl: string;
  reduction_amount_tax_excl: string;
  product_quantity_discount: string;
  product_ean13: string;
  product_isbn: string;
  product_upc: string;
  product_mpn: string;
  product_reference: string;
  product_supplier_reference: string;
  product_weight: string;
  tax_computation_method: string;
  id_tax_rules_group: string;
  ecotax: string;
  ecotax_tax_rate: string;
  download_nb: string;
  unit_price_tax_incl: string;
  unit_price_tax_excl: string;
  total_price_tax_incl: string;
  total_price_tax_excl: string;
  total_shipping_price_tax_excl: string;
  total_shipping_price_tax_incl: string;
  purchase_supplier_price: string;
  original_product_price: string;
  original_wholesale_price: string;
  total_refunded_tax_excl: string;
  total_refunded_tax_incl: string;
  associations: {
    taxes: {
      id: string;
    }[];
  };
};

export type OrderHistory = {
  id: number;
  id_employee: string;
  id_order_state: string;
  id_order: string;
  date_add: string;
};

export type OrderInvoice = {
  id: number;
  id_order: string;
  number: string;
  delivery_number: string;
  delivery_date: string;
  total_discount_tax_excl: string;
  total_discount_tax_incl: string;
  total_paid_tax_excl: string;
  total_paid_tax_incl: string;
  total_products: string;
  total_products_wt: string;
  total_shipping_tax_excl: string;
  total_shipping_tax_incl: string;
  shipping_tax_computation_method: string;
  total_wrapping_tax_excl: string;
  total_wrapping_tax_incl: string;
  shop_address: string;
  note: string;
  date_add: string;
};

export type OrderPayment = {
  id: number;
  order_reference: string;
  id_currency: string;
  amount: string;
  payment_method: string;
  conversion_rate: string;
  transaction_id: string;
  card_number: string;
  card_brand: string;
  card_expiration: string;
  card_holder: string;
  date_add: string;
};

export type OrderSlip = {
  id: number;
  id_customer: string;
  id_order: string;
  conversion_rate: string;
  total_products_tax_excl: string;
  total_products_tax_incl: string;
  total_shipping_tax_excl: string;
  total_shipping_tax_incl: string;
  amount: string;
  shipping_cost: string;
  shipping_cost_amount: string;
  partial: string;
  date_add: string;
  date_upd: string;
  order_slip_type: string;
  associations: {
    order_slip_details: {
      id: string;
      id_order_detail: string;
      product_quantity: string;
      amount_tax_excl: string;
      amount_tax_incl: string;
    }[];
  };
};

export type OrderState = {
  id: number;
  unremovable: string;
  delivery: string;
  hidden: string;
  send_email: string;
  module_name: string;
  invoice: string;
  color: string;
  logable: string;
  shipped: string;
  paid: string;
  pdf_delivery: string;
  pdf_invoice: string;
  deleted: string;
  name: PrestashopMultiLanguageString;
  template: PrestashopMultiLanguageString;
};

export type OrderRow = {
  id: string;
  product_id: string;
  product_attribute_id: string;
  product_quantity: string;
  product_name: string;
  product_reference: string;
  product_ean13: string;
  product_isbn: string;
  product_upc: string;
  product_price: string;
  id_customization: string;
  unit_price_tax_incl: string;
  unit_price_tax_excl: string;
};

export type Order = {
  id: number;
  id_address_delivery: string;
  id_address_invoice: string;
  id_cart: string;
  id_currency: string;
  id_lang: string;
  id_customer: string;
  id_carrier: string;
  current_state: string;
  module: string;
  invoice_number: string;
  invoice_date: string;
  delivery_number: string;
  delivery_date: string;
  valid: string;
  date_add: string;
  date_upd: string;
  shipping_number: string;
  note: string;
  id_shop_group: string;
  id_shop: string;
  secure_key: string;
  payment: string;
  recyclable: string;
  gift: string;
  gift_message: string;
  mobile_theme: string;
  total_discounts: string;
  total_discounts_tax_incl: string;
  total_discounts_tax_excl: string;
  total_paid: string;
  total_paid_tax_incl: string;
  total_paid_tax_excl: string;
  total_paid_real: string;
  total_products: string;
  total_products_wt: string;
  total_shipping: string;
  total_shipping_tax_incl: string;
  total_shipping_tax_excl: string;
  carrier_tax_rate: string;
  total_wrapping: string;
  total_wrapping_tax_incl: string;
  total_wrapping_tax_excl: string;
  round_mode: string;
  round_type: string;
  conversion_rate: string;
  reference: string;
  associations?: {
    order_rows: OrderRow[];
  };
};

export type PriceRange = {
  id: number;
  id_carrier: string;
  delimiter1: string;
  delimiter2: string;
};

export type ProductCustomizationField = {
  id: number;
  id_product: string;
  type: string;
  required: string;
  is_module: string;
  is_deleted: string;
  name: PrestashopMultiLanguageString;
};

export type ProductFeatureValue = {
  id: number;
  id_feature: string;
  custom: string;
  value: PrestashopMultiLanguageString;
};

export type ProductFeature = {
  id: number;
  position: string;
  name: PrestashopMultiLanguageString;
};

export type ProductOptionValue = {
  id: number;
  id_attribute_group: string;
  color: string;
  position: string;
  name: PrestashopMultiLanguageString;
};

export type ProductOption = {
  id: number;
  is_color_group: string;
  group_type: string;
  position: string;
  name: PrestashopMultiLanguageString;
  public_name: PrestashopMultiLanguageString;
  associations: {
    product_option_value: {
      id: string;
    }[];
  };
};

export type ProductSupplier = {
  id: number;
  id_product: string;
  id_product_attribute: string;
  id_supplier: string;
  id_currency: string;
  product_supplier_reference: string;
  product_supplier_price_te: string;
};

export type Product = {
  id: number;
  reference: string;
  price: string;
  state: string;
  name: PrestashopMultiLanguageString;
  description: PrestashopMultiLanguageString;
  description_short:
    | PrestashopBasicValueObject[]
    | LanguageValuesCreate
    | string;
  minimal_quantity: string;
  id_manufacturer: string;
  id_supplier: string;
  id_category_default: string;
  new: string | null;
  cache_default_attribute: string;
  id_default_image: string;
  id_default_combination: string | number;
  id_tax_rules_group: string;
  position_in_category: string | null;
  type: string;
  id_shop_default: string;
  supplier_reference: string;
  location: string;
  width: string;
  height: string;
  depth: string;
  weight: number | string;
  quantity_discount: string;
  ean13: string;
  isbn: string;
  upc: string;
  mpn: string;
  cache_is_pack: string;
  cache_has_attachments: string;
  is_virtual: string;
  additional_delivery_times: string;
  delivery_in_stock:
    | PrestashopBasicValueObject[]
    | LanguageValuesCreate
    | string;
  delivery_out_stock:
    | PrestashopBasicValueObject[]
    | LanguageValuesCreate
    | string;
  product_type: string;
  on_sale: string;
  online_only: string;
  ecotax: string;
  low_stock_threshold: string | null;
  low_stock_alert: string;
  wholesale_price: string;
  unity: string;
  unit_price_ratio: string;
  additional_shipping_cost: string;
  customizable: string;
  text_fields: string;
  uploadable_files: string;
  active: string | number;
  redirect_type: string;
  id_type_redirected: string;
  available_for_order: string;
  available_date: string;
  show_condition: string;
  condition: string;
  show_price: string;
  indexed: string;
  visibility: string;
  advanced_stock_management: string;
  date_add: string;
  date_upd: string;
  pack_stock_type: string;
  meta_description:
    | string
    | PrestashopBasicValueObject[]
    | LanguageValuesCreate;
  meta_keywords: PrestashopMultiLanguageString;
  meta_title: PrestashopMultiLanguageString;
  link_rewrite: PrestashopMultiLanguageString;
  available_now: PrestashopMultiLanguageString;
  available_later: PrestashopMultiLanguageString;
  associations?: {
    categories?: {
      id: string;
    }[];
    images?: {
      id: string;
    }[];
    combinations?: {
      id: string;
    }[];
    product_option_values?: {
      id: string;
    }[];
    product_features?: {
      id: string;
      id_feature_value: string;
    }[];
    tags?: {
      id: string;
    }[];
    stock_availables?: {
      id: string;
      id_product_attribute: string;
    }[];
    attachments?: {
      id: string;
    }[];
    accessories?: {
      id: string;
    }[];
    product_bundle?: {
      id: string;
      id_product_attribute: string;
      quantity: string;
    }[];
  };
};

export type ShopGroup = {
  id: number;
  name: string;
  color: string;
  share_customer: string;
  share_order: string;
  share_stock: string;
  active: string;
  deleted: string;
};

export type ShopUrl = {
  id: number;
  id_shop: string;
  active: string;
  main: string;
  domain: string;
  domain_ssl: string;
  physical_uri: string;
  virtual_uri: string;
};

export type Shop = {
  id: number;
  id_shop_group: string;
  id_category: string;
  active: string;
  deleted: string;
  name: string;
  color: string;
  theme_name: string;
};

export type SpecificPriceRule = {
  id: number;
  id_shop: string;
  id_country: string;
  id_currency: string;
  id_group: string;
  name: string;
  from_quantity: string;
  price: string;
  reduction: string;
  reduction_tax: string;
  reduction_type: string;
  from: string;
  to: string;
};

export type SpecificPrice = {
  id: number;
  id_shop_group: string;
  id_shop: string;
  id_cart: string;
  id_product: string;
  id_product_attribute: string;
  id_currency: string;
  id_country: string;
  id_group: string;
  id_customer: string;
  id_specific_price_rule: string;
  price: string;
  from_quantity: string;
  reduction: string;
  reduction_tax: string;
  reduction_type: string;
  from: string;
  to: string;
};

export type State = {
  id: number;
  id_zone: string;
  id_country: string;
  iso_code: string;
  name: string;
  active: string;
};

export type StockAvailable = {
  id: number;
  id_product: string;
  id_product_attribute: string;
  id_shop: string;
  id_shop_group: string;
  quantity: string;
  depends_on_stock: string;
  out_of_stock: string;
  location: string;
};

export type StockMovementReason = {
  id: number;
  sign: string;
  deleted: string;
  date_add: string;
  date_upd: string;
  name: PrestashopMultiLanguageString;
};

export type StockMovement = {
  id: number;
  id_product: string;
  id_product_attribute: string;
  id_warehouse: string;
  id_currency: string;
  management_type: string;
  id_employee: string;
  id_stock: string;
  id_stock_mvt_reason: string;
  id_order: string;
  id_supply_order: string;
  product_name: PrestashopMultiLanguageString;
  ean13: string;
  upc: string;
  reference: string;
  mpn: string;
  physical_quantity: string;
  sign: string;
  last_wa: string;
  current_wa: string;
  price_te: string;
  date_add: string;
};

export type Stock = {
  id: number;
  id_warehouse: string;
  id_product: string;
  id_product_attribute: string;
  real_quantity: number;
  reference: string;
  ean13: string;
  isbn: string;
  upc: string;
  physical_quantity: string;
  usable_quantity: string;
  location: string;
  price_te: string;
  minimal_quantity: string;
  low_stock_threshold: string;
  low_stock_alert: string;
  available_date: string;
  date_add: string;
  date_upd: string;
};

export type Store = {
  id: number;
  id_country: string;
  id_state: string;
  hours: PrestashopMultiLanguageString;
  postcode: string;
  city: string;
  latitude: string;
  longitude: string;
  phone: string;
  fax: string;
  email: string;
  active: string;
  date_add: string;
  date_upd: string;
  name: PrestashopMultiLanguageString;
  address1: PrestashopMultiLanguageString;
  address2: PrestashopMultiLanguageString;
  note: PrestashopMultiLanguageString;
};

export type Supplier = {
  id: number;
  link_rewrite: string;
  name: string;
  active: string;
  date_add: string;
  date_upd: string;
  description: PrestashopMultiLanguageString;
  meta_title: PrestashopMultiLanguageString;
  meta_description:
    | PrestashopBasicValueObject[]
    | LanguageValuesCreate
    | string;
  meta_keywords: PrestashopMultiLanguageString;
};

export type SupplyOrderDetail = {
  id: number;
  id_supply_order: string;
  id_product: string;
  id_product_attribute: string;
  reference: string;
  supplier_reference: string;
  name: string;
  ean13: string;
  isbn: string;
  upc: string;
  mpn: string;
  exchange_rate: string;
  unit_price_te: string;
  quantity_expected: string;
  quantity_received: string;
  price_te: string;
  discount_rate: string;
  discount_value_te: string;
  price_with_discount_te: string;
  tax_rate: string;
  tax_value: string;
  price_ti: string;
  tax_value_with_order_discount: string;
  price_with_order_discount_te: string;
};

export type SupplyOrderHistory = {
  id: number;
  id_supply_order: string;
  id_employee: string;
  id_state: string;
  employee_firstname: string;
  employee_lastname: string;
  date_add: string;
};

export type SupplyOrderReceiptHistory = {
  id: number;
  id_supply_order_detail: string;
  id_employee: string;
  id_supply_order_state: string;
  employee_firstname: string;
  employee_lastname: string;
  quantity: string;
  date_add: string;
};

export type SupplyOrderState = {
  id: number;
  delivery_note: string;
  editable: string;
  receipt_state: string;
  pending_receipt: string;
  enclosed: string;
  color: string;
  name: PrestashopMultiLanguageString;
};

export type SupplyOrder = {
  id: number;
  id_supplier: string;
  id_lang: string;
  id_warehouse: string;
  id_supply_order_state: string;
  id_currency: string;
  supplier_name: string;
  reference: string;
  date_delivery_expected: string;
  total_te: string;
  total_with_discount_te: string;
  total_ti: string;
  total_tax: string;
  discount_rate: string;
  discount_value_te: string;
  is_template: string;
  date_add: string;
  date_upd: string;
  associations: {
    supply_order_details: {
      id: string;
      id_product: string;
      id_product_attribute: string;
      supplier_reference: string;
      product_name: string;
    }[];
  };
};

export type Tag = {
  id: number;
  id_lang: string;
  name: string;
};

export type TaxRuleGroup = {
  id: number;
  name: string;
  active: string;
  deleted: string;
  date_add: string;
  date_upd: string;
};

export type TaxRule = {
  id: number;
  id_tax_rules_group: string;
  id_state: string;
  id_country: string;
  zipcode_from: string;
  zipcode_to: string;
  id_tax: string;
  behavior: string;
  description: string;
};

export type Tax = {
  id: number;
  rate: string;
  active: string;
  deleted: string;
  name: PrestashopMultiLanguageString;
};

export type TranslatedConfiguration = {
  id: number;
  value: PrestashopMultiLanguageString;
  date_add: string;
  date_upd: string;
  name: string;
  id_shop_group: string;
  id_shop: string;
};

export type WarehouseProductLocation = {
  id: number;
  id_product: string;
  id_product_attribute: string;
  id_warehouse: string;
  location: string;
};

export type Warehouse = {
  id: number;
  id_address: string;
  id_employee: string;
  id_currency: string;
  deleted: string;
  reference: string;
  name: string;
  management_type: string;
  associations: {
    stocks: {
      id: string;
    }[];
    carriers: {
      id: string;
    }[];
    shops: {
      id: string;
      name: string;
    }[];
  };
};

export type WeightRange = {
  id: number;
  id_carrier: string;
  delimiter1: string;
  delimiter2: string;
};

export type Zone = {
  id: number;
  name: string;
  active: string;
};

export type ImageTypeRoute =
  | 'general'
  | 'products'
  | 'categories'
  | 'manufacturers'
  | 'suppliers'
  | 'stores'
  | 'customizations';
