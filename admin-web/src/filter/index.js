import Vue from 'vue'
import { currency } from './currency'
import { dateTime } from './datetime'
import { cron } from './cron'
Vue.filter('cron', cron)
Vue.filter('currency', currency)
Vue.filter('dateTime', dateTime)
