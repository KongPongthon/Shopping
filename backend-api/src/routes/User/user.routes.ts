// user.routes.ts
import { Router } from 'express';
// import { createProduct } from '../../controllers/product.controller';
// หรือ import Product from '../../controllers/product.controller';
const productController = require('../../controllers/product.controller');
const routerUser = Router();

routerUser.post('/createtest', productController.createProduct);

routerUser.get('/gettest', productController.getProducts);

export default routerUser;
