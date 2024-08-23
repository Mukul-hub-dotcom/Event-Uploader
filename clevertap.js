require("dotenv").config();
const CleverTap = require("clevertap");
const accId = process.env.CLEVERTAP_ACC_ID;
const passcode = process.env.CLEVERTAP_PASSCODE;
const region = process.env.CLEVERTAP_REGION;

const clevertap = CleverTap.init(accId, passcode, region);

module.exports = clevertap;
