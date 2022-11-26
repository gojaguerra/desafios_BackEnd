import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();
const productos = [];

// Renderizo EJS
router.get("/", (req, res) => {
  res.render("formProducts.ejs");
});

router.post('/product', (req, res) => {
  const { title, price, thumbnail } = req.body;

  productos.push({ title, price, thumbnail });

  res.redirect("/");
});

router.get('/product', (req, res) => {
  res.render("viewProducts.ejs", { productos });
});


// RENDERIZO HBS
/* router.get("/", (req, res) => {
  res.render("formProducts.hbs");
});

router.post('/product', (req, res) => {
  const { title, price, thumbnail } = req.body;

  productos.push({ title, price, thumbnail });

  res.redirect("/");
});

router.get('/product', (req, res) => {
  res.render("viewProducts.hbs", { productos });
}); */

// RENDERIZO PUG
/* router.get("/", (req, res) => {
  res.render("formProducts.pug");
});

router.post('/product', (req, res) => {
  const { title, price, thumbnail } = req.body;

  productos.push({ title, price, thumbnail });

  res.redirect("/");
});

router.get('/product', (req, res) => {
  res.render("viewProducts.pug", { productos });
}); */

export default router;