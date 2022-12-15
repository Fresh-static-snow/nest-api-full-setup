import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductModel, ProductSchema } from './product.model';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  imports: [
    MongooseModule.forFeature([
      { name: ProductModel.name, schema: ProductSchema, collection: 'Product' },
    ]),
  ],
  providers: [ProductService],
})
export class ProductModule {}
