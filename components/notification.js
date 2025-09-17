'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import io from 'socket.io-client'

import {
    useGetNotificationsQuery,
    useMarkAllAsReadMutation,
    useMarkAsReadMutation,
} from '@/redux/services/notificationsApiSlice'
import {
    addNotification,
    setNotifications,
    updateNotification,
} from '@/redux/services/notificationSlice'

let socket

export default function Notifications() {
    const dispatch = useDispatch()
    const notifications = useSelector((state) => state.notifications?.items)
    const user = useSelector((state) => state.user.user.user)

    const { refetch } = useGetNotificationsQuery(user?.class?._id)

    const [markAsRead] = useMarkAsReadMutation()
    const [markAllAsRead] = useMarkAllAsReadMutation()
    console.log(notifications);
    

    // Init socket
    useEffect(() => {
        socket = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
            reconnection: true,
        })

        const handleConnect = () => {
            console.log('✅ Socket connected:', socket.id)
            socket.emit('joinClass', user?.class)
           if (data?.notifications) {
               dispatch(setNotifications(data.notifications))
           }

        }

        socket.on('connect', handleConnect)
        socket.on('reconnect', handleConnect)

        socket.on('notification:new', (notification) => {
            dispatch(addNotification(notification))
        })

        return () => {
            socket.disconnect()
        }
    }, [user?.class, dispatch, refetch])

    const handleMarkAsRead = async (n) => {
        if (!n.readBy.includes(user._id)) {
            const updated = await markAsRead(n._id).unwrap()
            dispatch(updateNotification(updated))
        }
    }

    const handleMarkAllAsRead = async () => {
        await markAllAsRead().unwrap()
        const data = await refetch().then((res) => res.data)
        if (data) dispatch(setNotifications(data))
    }

    // Unread counter
    const unreadCount = notifications?.filter(
        (n) => !n.readBy.includes(user?._id),
    ).length

    return (
        <div className='p-4 pt-1 '>
            <div className='flex justify-end items-center'>
                <button
                    onClick={handleMarkAllAsRead}
                    disabled={!unreadCount}
                    className={`${
                        !unreadCount ? 'text-gray-400' : 'text-blue-500 '
                    } font-semibold px-3 py-1 rounded text-sm`}
                >
                    Mark All as Read
                </button>
            </div>

            {notifications?.map((n) => {
                const isRead = n.readBy?.includes(user._id)

                return (
                    <div
                        key={n._id}
                        className={`border p-2 rounded ${
                            isRead ? 'bg-gray-100' : 'bg-yellow-100'
                        }`}
                    >
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='font-semibold'>{n.title}</h3>
                                <p>{n.message}</p>
                                <small>
                                    {new Date(n.createdAt).toLocaleString()}
                                </small>
                            </div>
                            {!isRead && (
                                <button
                                    onClick={() => handleMarkAsRead(n)}
                                    className='ml-4 text-sm bg-green-500 text-white px-2 py-1 rounded'
                                >
                                    Mark Read
                                </button>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
