export const BASEURL = 'http://localhost:3000' //process.env.APP_ENV  == 'local' ? 'http://localhost:3000' : 'http://bintradeapp.herokuapp.com'
export const AUTH = {
    LOGIN: '/api/login',
    LOGIN_VIEW: '/app/register', 
    REGISTER: '/api/register',
    PASSWORD_EMAIL: '/api/password_email',
    PIN_EMAIL: '/api/pin_email',
    LOGOUT: '/api/logout',
    FETCH_USER_PROFILE: '/api/profile/fetch-user',
    UPDATE_BIODATA: '/api/profile/update-biodata',
    UPLOAD_AVATAR: '/api/profile/update-avatar',
    UPDATE_PASSWORD: '/api/profile/update-password',
    VALIDATE_BIODATA: '/api/validate/biodata',
    VALIDATE_CONTACT: 'api/validate/contact',
    RESEND_EMAIL_VERIFICATION: 'api/email_verify/resend',
    VERIFY_ACCOUNT_NUM: '/api/clients/account_num'
}

export const FILES ={
    AVATAR: '/cloud/avatar/',
    TRANSFER_CERT: '/cloud/transfer-cert/',
    TAX_PAY_RECEIPT: '/cloud/tax-pay-receipt/'
}

export const CLIENT = {
    DEPOSIT:{
        CARD: '/api/client/deposit/card',
        COIN: '/api/client/deposit/coin',
        MONEY_TRANSFER: '/api/client/deposit/money-transfer',
        SEARCH: '/api/client/deposit/search'
    },
    TRANSFER:{
        CREATE: '/api/client/transfer/new',
        COMPLETE: '/api/client/transfer/complete'
    },
    INTER_BANK_TRANSFER:{
        CREATE: '/api/client/inter-bank/new',
        TRANSFER_CERT: '/api/client/inter-bank/submit_transfer_cert',
        TAX_PAYMENT_RECEIPT: '/api/client/inter-bank/submit_tax_pay_receipt',
        COMPLETE: '/api/client/inter-bank/complete_transfer'
    },
    TRANSACTION:{
        SEARCH:'/api/client/transaction/search'
    },
    STATISTICS:{
        FETCH:'/api/client/statistics'
    }
}

export const ADMIN = {
    DEPOSIT:{
        APPROVE: '/api/admin/deposit/approve',
        CANCEL: '/api/admin/deposit/cancel',
        SEARCH: '/api/admin/deposit/search',
        CREATE: '/api/admin/deposit/new'
    },
    SETTINGS:{
        UPDATE: '/api/admin/setting/all'
    },
    OTP:{
        CREATE: '/api/admin/otp/new'
    },
    WITHDRAW:{
        APPROVE: '/api/admin/withdrawal/approve',
        CANCEL: '/api/admin/withdrawal/cancel',
        SEARCH: '/api/admin/withdrawal/search',
        CREATE: '/api/admin/withdrawal/new'
    },
    TRANSFER:{
        CREATE: '/api/admin/transfer/new',
        COMPLETE: '/api/admin/transfer/complete'
    },
    CLIENT:{
        FETCH_SINGLE:'/api/admin/client/fetch',
        FETCH_ALL: '/api/admin/client/search',
        ACTIVATE: '/api/admin/client/activate',
        DEACTIVATE: '/api/admin/client/deactivate',
        CREATE: '/api/admin/client/create'
    },
    ADMINS:{
        FETCH_SINGLE:'/api/admin/admins/fetch',
        FETCH_ALL:'/api/admin/admins/search',
        CREATE:'/api/admin/admins/create',
    },
    TRANSACTION:{
        SEARCH:'/api/admin/transaction/search',
        CANCEL: '/api/admin/transaction/cancel'
    },
    STATISTICS:{
        FETCH:'/api/admin/statistics',
    }
}