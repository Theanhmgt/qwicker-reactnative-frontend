import axios from "axios";
// const BASE_URL = "http://10.0.2.2:8000/"
// const BASE_URL = "http://10.17.50.43:8000/"
const BASE_URL = "http://192.168.1.207:8000/"
// const BASE_URL = "http://192.168.100.14:8000/"

export const baseEndpoints = {
    'product-categories': '/product-categories/',
    'vehicles': '/vehicles/',
    'product-categories': '/product-categories/',
    'payment-method': '/payment-method/',
    'my-coupon': '/coupon/my-coupon/'
}
export const accountEndpoints = {
    'change-password': '/account/change-password/',
    'login': '/auth/token/',
    'convert-token': '/auth/convert-token/',
    'sent-otp': '/account/sent-otp/',
    'sent-otp-to-valid-email': '/account/register/sent-otp/',
    'verify-email': '/account/verify-email/',
    'reset-password': '/account/reset-password/',
    'check-account': '/account/check-account/',
    'register-user': '/account/user/register/',
    'register-shipper': '/account/shipper/register/',
}
export const basicUserEndpoints = {
    'basic-user-register': '/users/',
    'current-user': 'users/current-user/',
    'my-jobs': (pagrams) => `/jobs/?${pagrams}`,
    'job-retrieve': (jobId) => `/jobs/${jobId}/`,
    'assign-job': (jobId) => `/jobs/${jobId}/assign/`,
    'send_feedback': (jobId) => `/jobs/${jobId}/feedback/`,
    'view_feedbacks': (shipperId) => `/feedbacks/?shipper=${shipperId}`,
    'my_feedback': (jobId) => `/feedbacks/my-feedback/?orderId=${jobId}`
}
export const shipperEndpoints = {
    'shipper-register': '/shippers/',
    'current-user': 'shippers/current-user/'
}
export const jobEndpoints = {
    'jobs': '/jobs/',
    'listShipper': (jobId) => `/jobs/${jobId}/list-shipper/`

}

export const ShipperJobEndpoints = {
    'find-job': `/shipper-jobs/find/?page=1`,
    'job-retrieve': (jobId) => `/shipper-jobs/${jobId}/`,
    'join-job': (jobId) => `/shipper-jobs/${jobId}/join/`,
    'my-jobs': (pagrams) => `/shipper-jobs/my-jobs/?${pagrams}`,
    'complete': (jobId) => `/shipper-jobs/${jobId}/complete/`,
}

export const paymentEndpoints = {
    'vnpay-payment-url': '/vnpay/payment_url/',
    'vnpay-payment-ipn': '/vnpay/payment_ipn/',
    'checkout-success': (paymentId) => `payments/${paymentId}/checkout/`
}

export const authAPI = (access_token) => axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `Bearer ${access_token}`
    },
})
export const urlAuthAPI = (access_token, url) => axios.create({
    baseURL: url,
    headers: {
        "Authorization": `Bearer ${access_token}`
    }
})
export default axios.create({
    baseURL: BASE_URL,
})