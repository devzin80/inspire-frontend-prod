import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './services/authSlice'
import userReducer from './services/userSlice'
import profileReducer from './services/profileSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from './services/userApiSlice'
import { classApi } from './services/classApiSlice'
import { notificationsApi } from './services/notificationsApiSlice'
import { notificationsSlice } from './services/notificationSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    profile: profileReducer,
    notifications: notificationsSlice.reducer,

    [userApi.reducerPath]: userApi.reducer,
    [classApi.reducerPath]: classApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(
            userApi.middleware,
            classApi.middleware,
            notificationsApi.middleware,
        ),
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)
