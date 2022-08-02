import express from "express";

const router = express.Router();


// Customer router
router.post('/customer/register', require("../controller/customer/register"));
router.post('/customer/login', require("../controller/customer/login"));


// User router
router.post('/user/register', require("../controller/user/register"));
router.post('/user/login', require("../controller/user/login"));
//@todo:add forgot/password


// Store router
router.post('/store/add', require('../middleware/CustomerMiddleware'), require("../controller/store/add"));
router.post('/store/list-by-customer-id', require('../middleware/CustomerMiddleware'), require("../controller/store/list-by-customer-id"));

//User Store List
router.post('/user/store/list', require('../middleware/UserMiddleware'), require("../controller/store/list-all"));

//Work router

router.post('/work/add', require('../middleware/CustomerMiddleware'), require("../controller/work/add"));

//Reservation router
// router.post('/reservation/add', require('../middleware/UserMiddleware'), require("../controller/reservation/add"));



module.exports = router;