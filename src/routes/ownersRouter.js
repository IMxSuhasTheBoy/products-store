import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("owner route");
});

export default router;
