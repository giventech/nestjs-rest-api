import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SearchService } from './service/search.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [SearchService],
})
export class SearchModule {}
