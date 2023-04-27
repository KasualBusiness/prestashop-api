import { AxiosResponse } from 'axios';
import qs from 'qs';
import bcrypt from 'bcrypt';
import { call } from '../';
import { Customer } from '../types/prestashop.type';
import { LoginResponse } from '../types/calls.type';
import Base from './base';
import { Endpoint } from '../enums/endpoint.enum';

class Customers extends Base<Customer> {
  constructor() {
    super(Endpoint.customers);
  }

  /**
   * Login user.
   *
   * @param email
   * @param password
   * @returns
   */
  login = async (email: string, password: string): Promise<LoginResponse> => {
    const response: AxiosResponse = await call({
      method: 'GET',
      path: '/customers',
      paramsSerializer: {
        serialize: (params) =>
          `${qs.stringify(params)}&filter[email]=${email}&display=full`,
      },
    }).catch((error) => {
      return error.response;
    });

    const [customer] = response.data.customers as Customer[];

    const success = await bcrypt.compare(
      password,
      customer.passwd.replace(/\$2y\$/g, '$2a$')
    );

    if (success) {
      const customerWithoutSensitiveData: Partial<Customer> = customer;
      delete customerWithoutSensitiveData.passwd;
      delete customerWithoutSensitiveData.secure_key;
      delete customerWithoutSensitiveData.reset_password_token;
      delete customerWithoutSensitiveData.last_passwd_gen;
      delete customerWithoutSensitiveData.reset_password_validity;
      return { success: true, customer: customerWithoutSensitiveData };
    }

    return { success: false, customer: undefined };
  };
}

export default Customers;
