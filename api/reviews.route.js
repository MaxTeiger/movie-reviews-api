// routes : /api/v1/reviews

import express from "express"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPostReview)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)
router.route("/").get(ReviewsCtrl.healthCheck)

export default router