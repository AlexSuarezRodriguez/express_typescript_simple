import { Router } from "express";
import { ping } from "./ping.controller";

// Create the router
const router = Router();

router.get("/ping", ping);

export default router;
