import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HhModule } from '../hh/hh.module';
import { TopPageController } from './top-page.controller';
import { TopPageModel, TopPageSchema } from './top-page.model';
import { TopPageService } from './top-page.service';

@Module({
  controllers: [TopPageController],
  imports: [
    MongooseModule.forFeature([
      { name: TopPageModel.name, schema: TopPageSchema, collection: 'TopPage' },
    ]),
    HhModule,
  ],
  providers: [TopPageService],
  exports: [TopPageService],
})
export class TopPageModule {}
