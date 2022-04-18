const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const Admin = require("../models/admin");
const Subscription = require("../models/subscription");

// adds a new subscription
router.post("/add-subscription", verifyToken, async (req, res) => {
  const subscription = await new Subscription({
    operator_name: req.body.operator_name,
    operator_logo: req.body.operator_logo,
    affiliate_link: req.body.affiliate_link,
    surf_amount: req.body.surf_amount,
    binding_time: req.body.binding_time,
    free_sms: req.body.free_sms,
    free_calls: req.body.free_calls,
    price: req.body.price,
    initial_price: req.body.initial_price,
    reduced_price_months: req.body.reduced_price_months,
    admin: req.body.adminId,
  });

  await Admin.findOneAndUpdate(
    { _id: subscription.admin },
    { $push: { subscriptions: subscription._id } }
  );

  await subscription.save();
  res.send("Subscription was added successfully!");
});

// fetches all subscriptions from the database
router.get("/all", async (req, res) => {
  const subscriptions = await Subscription.find();
  res.send(subscriptions);
});

// fetches a subscripton with specific id
router.get("/:id", async (req, res) => {
  const subscription = await Subscription.findById(req.params.id);
  res.json(subscription);
});

// deletes a subscription with a specific id
router.delete("/delete/:id", async (req, res) => {
  const subscription = await Subscription.findById(req.params.id);
  try {
    await Admin.updateOne(
      { _id: subscription.admin },
      { $pull: { subscriptions: subscription.id } }
    );

    await Subscription.deleteOne({ _id: req.params.id });
    res.send("Post was deleted successfully!");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

/*

{
    "operator_name": "Telia",
    "operator_logo": "logo goes here",
    "affiliate_link": "link goes here",
    "surf_amount": 4,
    "binding_time": 24,
    "free_sms": true,
    "free_calls": true,
    "price": 50,
    "initial_price": 99,
    "reduced_price_months": 3,
    "adminId": "6256de6b65c3a3f171a392fb" 
}



*/
