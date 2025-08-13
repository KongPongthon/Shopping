// admin.routes.ts
import { Router } from 'express';
// import { createProduct } from '../../controllers/product.controller';
// หรือ import Product from '../../controllers/product.controller';
const productController = require('../../controllers/product.controller');
const routerAdmin = Router();

routerAdmin.post('/createtest', productController.createProduct);
// หรือ Admin.post('/createtest', Product.createProduct);

export default routerAdmin;
