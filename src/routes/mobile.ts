import express from "express";

const router = express.Router();


// Customer router
router.post('/customer/register', require("../controller/customer/register"));
router.post('/customer/login', require("../controller/customer/login"));
router.post("/customer/forgot-password", require("../controller/customer/forgot-password"));
router.post("/customer/set-new-password", require("../controller/customer/set-new-password"));


// User router
router.post('/user/register', require("../controller/user/register"));
router.post('/user/login', require("../controller/user/login"));
router.post('/user/forgot-password', require("../controller/user/forgot-password"));
router.post('/user/set-new-password', require("../controller/user/set-password"));

// Store router
router.post('/store/add', require('../middleware/CustomerMiddleware'), require("../controller/store/add"));
router.post('/store/list-by-customer-id', require('../middleware/CustomerMiddleware'), require("../controller/store/list-by-customer-id"));
router.post("/store/change-is-reserved", require("../controller/store/change_is_reserved"))


//User Store List
router.post('/user/store/list', require("../controller/store/list-all"));

//Work router
router.post('/work/add', require('../middleware/CustomerMiddleware'), require("../controller/work/add"))
// router.post('/work/get-work-list', require('../middleware/UserMiddleware'), require("../controller/work/get-work-list"));


//Reservation router
router.post('/reservation/add', require('../middleware/UserMiddleware'), require("../controller/reservation/add"));
router.post("/reservation/get-reservation-list-by-user-id", require('../middleware/UserMiddleware'), require("../controller/reservation/get-by-user-id"));
router.post("/reservation/get-reservation-list-by-store-id", require('../middleware/UserMiddleware'), require("../controller/reservation/get-by-store-id"));


//Customer Reservation List
router.post("/customer-reservation-list/add", require("../middleware/CustomerMiddleware"), require("../controller/customer_reservation_list/add"))
router.post("/customer-reservation-list/list-by-store-id", require("../controller/customer_reservation_list/list-by-store-id"))
module.exports = router;