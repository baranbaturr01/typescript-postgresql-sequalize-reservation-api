// import {NextFunction, Request, Response} from "express";
// import isEmpty from "is-empty";
// import WorkService from "../../service/WorkService";
// import StoreService from "../../service/StoreService";
// import Store from "../../models/Store";
//
// const workService = new WorkService();
// const storeService = new StoreService()
//
//
// // const calculateWorkSpace: string[] | any = (startDate: string, endDate: string, workSpace: string) => {
// //
// //     let startTime = parseInt(startDate.split(":")[0])
// //     const endTime = parseInt(endDate.split(":")[0])
// //     const space = parseInt(workSpace.split(":")[1]);
// //
// //     let times = [];
// //     let start = 60 * startTime;
// //     for (let i = 0; start <= endTime * 60; i++) {
// //         let hour = Math.floor(start / 60);
// //         let minute = (start % 60);
// //         //times look like this:{hour: "09:00", is_reservarted: false}
// //         times.push({
// //             hour: `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`,
// //             is_reserved: false
// //         })
// //         start = start + space;
// //     }
// //
// //     return times
// // }
// //
// // const getDate = () => {
// //     let date: string[] = [];
// //     for (let i = 0; i < 7; i++) {
// //         const tomorrowDate: Date = new Date(Date.now());
// //         tomorrowDate.setDate(tomorrowDate.getDate() + i);
// //         const tomorrow = tomorrowDate.getFullYear() + "-" + (tomorrowDate.getMonth() + 1) + "-" + tomorrowDate.getDate();
// //         date.push(tomorrow);
// //     }
// //     return date;
// // }
//
//
// module.exports = (req: Request, res: Response, next: NextFunction) => {
//
//     const customerId = req.id
//     const storeId = req.body.store_id
//
//     return workService.getWorkObjectByCustomerAndStoreId(customerId, storeId).then(work => {
//         const startDate = work.start_date
//         const endDate = work.end_date
//         const workSpace = work.work_space
//
//
//         const data = getDate().map(day => {
//             return {
//                 date: day,
//                 reservation: calculateWorkSpace(startDate, endDate, workSpace)
//             }
//         })
//
//
//
//         const times = calculateWorkSpace(startDate, endDate, workSpace)
//         // if (!isEmpty(work.Store.work_time)) {
//         //     return res.json({
//         //         code: 404,
//         //         message: "work time not found",
//         //     })
//         // }
//
//         const store = new Store()
//         store.id = work.Store.id
//         store.name = work.Store.name
//         store.lng = work.Store.lng
//         store.lat = work.Store.lat
//         store.customer_id = work.Store.customer_id
//         store.work_time = data
//
//         return storeService.updateWorkTimeColumn(store.id, data).then(() => {
//             return res.json({
//                 success: true,
//                 reservationList: data
//             })
//         })
//     }).catch(err => {
//         return res.status(500).json({
//             code: 500,
//             message: err.message
//         });
//     })
// }
