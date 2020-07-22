"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
const SERVER_PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyparser.json());
app.get("/", () => console.log(`Welcome to reviewReviewer!
    Try navigating to /getRandomOriginalReview to view a review and leave a metaReview`));
app.get("/getRandomOriginalReview", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Random review being retrieved");
    let randoRev = yield retrieveReview(req);
    if (randoRev) {
        res.send(randoRev);
    }
    else {
        next("Random review cannot be generated...  Please refresh the page.");
    }
}));
// below is preserved to demonstrate practice with 'fs' and 'yaml'
// this step was needed to verify routes and React component appearance
const yaml = require("js-yaml");
const fs = require("fs");
let dummyDataDoc;
// Get document, or throw exception on error
try {
    dummyDataDoc = yaml.safeLoad(fs.readFileSync("/Users/jeffreyjhaywood/Programming Environment/Web/ReviewReviewer/server/dummyData/dummyData.yml", "utf8"));
    console.log("dummyDataDoc access success");
}
catch (e) {
    console.log(e);
}
// console.log(
//   "some dummyData from the doc: ",
//   dummyDataDoc?.Reviews?.Category?.soda[1] // should yeild 'Coke' object
// );
// ---below is the general shape of data expected by the front end---
// GET '/getRandomOriginalReview'
// expect to get back an object with the following shape:
// productName:
// productImage:
// productManufacturer:
// productReview:
// productRating:
// productID:
// POST '/saveMetaReview'
// database will expect the user to have provided a review of the shape:
// originalReviewProductID:
// metaReviewAuthor:
// metaReviewText:
// metaReviewRating:
const coinflip = () => (Math.random() < 0.5 ? true : false);
const retrieveReview = (req) => {
    var _a, _b, _c, _d;
    let categoryChoice = coinflip();
    let arrayIndex = coinflip() ? 0 : 1;
    let retrievedRando;
    if (categoryChoice) {
        retrievedRando = (_b = (_a = dummyDataDoc === null || dummyDataDoc === void 0 ? void 0 : dummyDataDoc.Reviews) === null || _a === void 0 ? void 0 : _a.Category) === null || _b === void 0 ? void 0 : _b.soda[arrayIndex];
    }
    else {
        retrievedRando = (_d = (_c = dummyDataDoc === null || dummyDataDoc === void 0 ? void 0 : dummyDataDoc.Reviews) === null || _c === void 0 ? void 0 : _c.Category) === null || _d === void 0 ? void 0 : _d.nuts[arrayIndex];
    }
    console.log("retrievedRando from retrieveReview(): ", retrievedRando);
    return retrievedRando;
};
// here to test output of retrieveReview() - TODO: remove line 82/83
// retrieveReview();
app.listen(SERVER_PORT, () => console.log("Look out! The server be runnin"));
