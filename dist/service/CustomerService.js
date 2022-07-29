"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("../models/Customer");
class CustomerService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Customer_1.Customer.findAll();
        });
    }
    create(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Customer_1.Customer.create(customer);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Customer_1.Customer.destroy({ where: { id } });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Customer_1.Customer.findOne({ where: { id } });
        });
    }
    update(id, customer) {
        return Customer_1.Customer.update(customer, { where: { id } });
    }
}
exports.default = CustomerService;
