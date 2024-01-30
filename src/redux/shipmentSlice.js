import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { SHIPMENTYPE } from "../constants";

export const INITIAL_ADDRESS = {
    contact: '',
    phone_number: '',
    contry: '',
    city: '',
    district: '',
    street: '',
    home_number: '',
    short_name: '',
    long_name: '',
    latitude: '',
    longitude: '',
}

const shipmentSlice = createSlice({
    name: 'shipment',
    initialState: {
        pick_up: INITIAL_ADDRESS,
        delivery_address: INITIAL_ADDRESS,
        type: SHIPMENTYPE.NOW,
        shipment_date: {
            date: null,
            time: null
        },
        cost: null,
        status: 'idle',
    },
    reducers: {
        addPickUp: (state, action) => {
            for (var key in action.payload) {
                if (state.pick_up.hasOwnProperty(key)) {
                    state.pick_up[key] = action.payload[key]
                }
            }
        },
        addDeliveryAddress: (state, action) => {
            for (var key in action.payload) {
                if (state.delivery_address.hasOwnProperty(key)) {
                    state.delivery_address[key] = action.payload[key]
                }
            }
        },
        addAdditionalPickUpInfo: (state, action) => {
            state.pick_up.contact = action.payload.contact
            state.pick_up.phone_number = action.payload.phone_number
        },
        addAdditionalDeliveryAddressInfo: (state, action) => {
            state.delivery_address.contact = action.payload.contact
            state.delivery_address.phone_number = action.payload.phone_number
        },

        addDate: (state, action) => {
            state.shipment_date.date = action.payload
            if (action.payload !== null && state.shipment_date.time !== null)
                state.type = SHIPMENTYPE.LATTER
        },
        addTime: (state, action) => {
            state.shipment_date.time = action.payload
            if (action.payload !== null && state.shipment_date.date !== null)
                state.type = SHIPMENTYPE.LATTER
        },
        setShipmentTypeToNow: (state, action) => {
            state.shipment_date.type = SHIPMENTYPE.NOW
            state.shipment_date.date = null
            state.shipment_date.time = null
        },
        addCost: (state, action) => {
            state.cost = action.payload
        }
    }
})

export const getDate = state => state.shipment.shipment_date.date
export const getTime = state => state.shipment.shipment_date.time
export const isDateTimeFulFill = createSelector(
    getDate, getTime,
    (date, time) => {
        return date !== null && time !== null
    }
)

export const { addPickUp, addDeliveryAddress, addAdditionalPickUpInfo,
    addAdditionalDeliveryAddressInfo, addDate, addTime, setShipmentTypeToNow, addCost } = shipmentSlice.actions
export const getShipmentType = state => state.shipment.type
export const getPickUP = state => state.shipment.pick_up
export const getDeliveryAddress = state => state.shipment.delivery_address
export const getCost = state => state.shipment.cost
export const getShipment = state => state.shipment
export default shipmentSlice.reducer