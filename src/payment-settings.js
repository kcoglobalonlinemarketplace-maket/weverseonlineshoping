import { supabase } from './supabase-client.js';
import { detectCurrency, getCountryByCode, SUPPORTED_CURRENCIES } from './country-data.js';

export const PAYMENT_SETTINGS_CACHE_KEY = 'kco_payment_settings_v1';

export const DEFAULT_MANUAL_PAYMENT_ACCOUNTS = [
  { currency: 'USD', currencyName: 'United States Dollar', flag: 'US', country: 'United States', bankName: 'Citibank', transferType: 'Local & International', beneficiary: 'KENNETH CHIDERA ODENYI', accountNumber: '70589490002447647', accountType: 'Checking', iban: '', swift: 'CITIUS33', routing: '031100209', sortCode: '', bankCode: '', branchCode: '', institutionNumber: '', transitNumber: '', bsbCode: '', address: '111 Wall Street, New York, NY 10043, USA' },
  { currency: 'GBP', currencyName: 'British Pound', flag: 'GB', country: 'United Kingdom', bankName: 'Citibank', transferType: 'Local & International', beneficiary: 'KENNETH CHIDERA ODENYI', accountNumber: '56468624', accountType: '', iban: 'GB94CITI18500856468624', swift: 'CITIGB2L', routing: '', sortCode: '185008', bankCode: '', branchCode: '', institutionNumber: '', transitNumber: '', bsbCode: '', address: 'Canada Square, Canary Wharf, London E14 5LB, United Kingdom' },
  { currency: 'EUR', currencyName: 'Euro', flag: 'EU', country: 'Eurozone', bankName: 'Citibank', transferType: 'Local & International', beneficiary: 'KENNETH CHIDERA ODENYI', accountNumber: '', accountType: '', iban: 'IE70CITI99005171297018', swift: 'CITIIE2X', routing: '', sortCode: '', bankCode: '', branchCode: '', institutionNumber: '', transitNumber: '', bsbCode: '', address: '1 North Wall Quay, IFSC, Dublin 1, Ireland' },
  { currency: 'CAD', currencyName: 'Canadian Dollar', flag: 'CA', country: 'Canada', bankName: 'Citibank NA Canadian Branch', transferType: 'Local Transfer', beneficiary: 'KENNETH CHIDERA ODENYI', accountNumber: '3001440544', accountType: 'Checking', iban: '', swift: '', routing: '', sortCode: '', bankCode: '', branchCode: '', institutionNumber: '0328', transitNumber: '20012', bsbCode: '', address: '123 Front St. West, Toronto, ON M5J 2M3, Canada' },
  { currency: 'AUD', currencyName: 'Australian Dollar', flag: 'AU', country: 'Australia', bankName: 'Citibank', transferType: 'Local & International', beneficiary: 'KENNETH CHIDERA ODENYI', accountNumber: '10674571', accountType: '', iban: '', swift: '', routing: '', sortCode: '', bankCode: '', branchCode: '', institutionNumber: '', transitNumber: '', bsbCode: '248024', address: '2 Park Street, Sydney NSW 2000, Australia' },
  { currency: 'SGD', currencyName: 'Singapore Dollar', flag: 'SG', country: 'Singapore', bankName: 'Citibank N.A. Singapore Branch', transferType: 'Local & International', beneficiary: 'KENNETH CHIDERA ODENYI', accountNumber: '44990709533', accountType: '', iban: '', swift: 'CITISGSG', routing: '', sortCode: '', bankCode: '7214', branchCode: '001', institutionNumber: '', transitNumber: '', bsbCode: '', address: '8 Marina View, #17-01 Asia Square Tower 1, Singapore 018960' },
  { currency: 'JPY', currencyName: 'Japanese Yen', flag: 'JP', country: 'Japan', bankName: 'MUFG Bank Ltd.', transferType: 'Local Transfer', beneficiary: 'KENNETH CHIDERA ODENYI', accountNumber: '4682719', accountType: 'Savings / Futsu', iban: '', swift: '', routing: '', sortCode: '', bankCode: '0005', branchCode: '869', institutionNumber: '', transitNumber: '', bsbCode: '', address: '7-1 Marunouchi 2-Chome, Chiyoda-ku, Tokyo, Japan' },
  { currency: 'MXN', currencyName: 'Mexican Peso', flag: 'MX', country: 'Mexico', bankName: 'Sistema de Transferencias y Pagos', transferType: 'Local Transfer', beneficiary: 'KENNETH CHIDERA ODENYI', accountNumber: '646010504200345127', accountType: '', iban: '', swift: '', routing: '', sortCode: '', bankCode: '646', branchCode: '010', institutionNumber: '', transitNumber: '', bsbCode: '', address: 'Av. Insurgentes Sur 1425, Ciudad de México, México' },
  { currency: 'IDR', currencyName: 'Indonesian Rupiah', flag: 'ID', country: 'Indonesia', bankName: 'Deutsche Bank AG Jakarta Branch', transferType: 'Local Transfer', beneficiary: 'KENNETH CHIDERA ODENYI', accountNumber: '974400000904', accountType: '', iban: '', swift: '', routing: '', sortCode: '', bankCode: '', branchCode: '0670304', institutionNumber: '', transitNumber: '', bsbCode: '', address: 'Jl. Imam Bonjol 80, Jakarta 10310, Indonesia' },
];

export function getFlagEmojiFromCountryCode(code) {
  if (!code || code.length !== 2) return '🏦';
  const points = code.toUpperCase().split('').map(char => 0x1F1E6 + char.charCodeAt(0) - 65);
  try { return String.fromCodePoint(...points); } catch { return '🏦'; }
}

export function loadPaymentSettingsCache() {
  try {
    const raw = localStorage.getItem(PAYMENT_SETTINGS_CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function savePaymentSettingsCache(settings) {
  try {
    localStorage.setItem(PAYMENT_SETTINGS_CACHE_KEY, JSON.stringify(settings));
  } catch {}
}

function normalizeAccount(account, index = 0) {
  const countryCode = account.country_code || account.flag || (account.currency === 'EUR' ? 'EU' : 'US');
  const country = account.country || getCountryByCode(countryCode)?.name || '';
  const currency = (account.currency || 'USD').toUpperCase();
  return {
    id: account.id || `bank-${index + 1}`,
    currency,
    currencyName: account.currencyName || account.currency_name || currency,
    flag: account.flag && account.flag.length > 2 ? account.flag : getFlagEmojiFromCountryCode(countryCode),
    country,
    country_code: countryCode,
    bankName: account.bankName || account.bank_name || '',
    transferType: account.transferType || account.transfer_type || 'Bank Transfer',
    beneficiary: account.beneficiary || account.accountName || account.account_name || '',
    accountNumber: account.accountNumber || account.account_number || '',
    accountType: account.accountType || account.account_type || '',
    iban: account.iban || '',
    swift: account.swift || '',
    routing: account.routing || '',
    sortCode: account.sortCode || account.sort_code || '',
    bankCode: account.bankCode || account.bank_code || '',
    branchCode: account.branchCode || account.branch_code || '',
    institutionNumber: account.institutionNumber || account.institution_number || '',
    transitNumber: account.transitNumber || account.transit_number || '',
    bsbCode: account.bsbCode || account.bsb_code || '',
    address: account.address || '',
  };
}

export function normalizeManualPaymentAccounts(accounts = []) {
  return accounts
    .map((account, index) => normalizeAccount(account, index))
    .filter(account => account.currency && (account.accountNumber || account.iban || account.swift || account.routing || account.sortCode || account.bankCode || account.branchCode || account.institutionNumber || account.transitNumber || account.bsbCode));
}

export function getLegacyManualPaymentAccounts(settings = {}) {
  const accounts = [];
  if (settings.bank1_account_name || settings.bank1_account_number || settings.bank1_bank_name) {
    accounts.push(normalizeAccount({
      id: 'bank-1',
      currency: settings.bank1_currency || 'USD',
      country: settings.bank1_country || getCountryByCode('US')?.name || 'United States',
      country_code: settings.bank1_country_code || 'US',
      bank_name: settings.bank1_bank_name,
      transfer_type: settings.bank1_transfer_type,
      account_name: settings.bank1_account_name,
      account_number: settings.bank1_account_number,
      sort_code: settings.bank1_sort_code,
    }, 0));
  }
  if (settings.bank2_account_name || settings.bank2_account_number || settings.bank2_bank_name) {
    accounts.push(normalizeAccount({
      id: 'bank-2',
      currency: settings.bank2_currency || 'USD',
      country: settings.bank2_country || getCountryByCode('US')?.name || 'United States',
      country_code: settings.bank2_country_code || 'US',
      bank_name: settings.bank2_bank_name,
      transfer_type: settings.bank2_transfer_type,
      account_name: settings.bank2_account_name,
      account_number: settings.bank2_account_number,
      sort_code: settings.bank2_sort_code,
    }, 1));
  }
  return accounts;
}

export function getManualPaymentAccounts(settings = {}) {
  const current = normalizeManualPaymentAccounts(settings.manual_payment_accounts || []);
  if (current.length > 0) return current;
  const legacy = getLegacyManualPaymentAccounts(settings);
  if (legacy.length > 0) return legacy;
  return DEFAULT_MANUAL_PAYMENT_ACCOUNTS.map((account, index) => normalizeAccount(account, index));
}

export function getPaymentInstructions(settings = {}) {
  return settings.manual_payment_instructions || 'Transfer the exact order amount to the bank account shown below. After payment, upload your receipt for verification. Once your receipt is verified, your goods will be shipped immediately.';
}

export function getUsdFallbackAccount(accounts) {
  return accounts.find(account => account.currency === 'USD') || accounts[0] || normalizeAccount(DEFAULT_MANUAL_PAYMENT_ACCOUNTS[0], 0);
}

export function resolveAccountForCountry(accounts, countryCode, selectedCurrency) {
  const detectedCurrency = detectCurrency(countryCode);
  const currency = (selectedCurrency || detectedCurrency || 'USD').toUpperCase();
  if (!selectedCurrency && !detectedCurrency && countryCode && countryCode !== 'US') {
    const fallback = getUsdFallbackAccount(accounts);
    return { currency: fallback.currency || 'USD', account: fallback, isFallback: true };
  }
  const exact = accounts.find(account => account.currency === currency);
  if (exact) return { currency, account: exact, isFallback: false };
  const fallback = getUsdFallbackAccount(accounts);
  return { currency: fallback.currency || 'USD', account: fallback, isFallback: true };
}

export async function loadPaymentSettings() {
  const cached = loadPaymentSettingsCache() || {};
  try {
    const { data, error } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
    if (error) return { ...cached, _source: 'cache' };
    const merged = { ...cached, ...(data || {}) };
    savePaymentSettingsCache(merged);
    return { ...merged, _source: 'db' };
  } catch {
    return { ...cached, _source: 'cache' };
  }
}

export function buildFallbackNotice(account, countryCode, requestedCurrency, instructions) {
  const country = getCountryByCode(countryCode);
  const requested = requestedCurrency || detectCurrency(countryCode) || 'USD';
  return {
    title: 'Use Our USD Receiving Account',
    message: `${country?.name || 'Your country'} is currently not mapped to a dedicated receiving account in ${requested}. Please use our United States Dollar (USD) receiving account. Your bank will convert your local currency automatically. After payment, upload your receipt for verification so your goods can be shipped immediately.`,
    account,
    instructions: instructions || getPaymentInstructions({}),
  };
}

export function getSupportedCurrenciesFromAccounts(accounts) {
  const currencies = [...new Set(accounts.map(account => account.currency).filter(Boolean))];
  return currencies.length > 0 ? currencies : SUPPORTED_CURRENCIES;
}