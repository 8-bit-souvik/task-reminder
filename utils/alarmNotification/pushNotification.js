import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});


export const addAlertPush = async ({ id, info }) => {
    const { title, date } = info;
    // console.log("adding push notification...");
    await Notifications.scheduleNotificationAsync({
        content: {
            title: title,
            body: `reminder you have a task at ${date}`,
            data: { id: id },
        },
        trigger: {
            date: new Date(date),
            //   date: new Date(Date.now() + 1 * 1000),
        },
        identifier: id
    });
}


export const cancelAlertPush = async ({ id }) => {
    // console.log("deleting push notification...");
    await Notifications.cancelScheduledNotificationAsync(id);
}