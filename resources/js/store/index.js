
import Vue from "vue";
import Vuex from "vuex";

import * as auth from "./modules/auth"
import * as client from "./modules/client"
import * as alert from "./modules/alert"
import * as withdraw from "./modules/withdraw"
import * as deposit from "./modules/deposit"
import * as admin from "./modules/admin"
import * as statistics from "./modules/statistics"
import * as registration from "./modules/registration"
import * as interBankTransfer from "./modules/interBankTransfer"
import * as transaction from "./modules/transaction"
import * as settings from "./modules/settings"



Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,

  modules: {
    auth,
    alert,
    withdraw,
    deposit,
    client,
    admin,
    statistics,
    registration,
    interBankTransfer,
    transaction,
    settings
   }
});