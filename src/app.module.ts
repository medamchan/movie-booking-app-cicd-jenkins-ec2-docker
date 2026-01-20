import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [MoviesModule, BookingsModule],
})
export class AppModule {}
