import { Injectable, BadRequestException } from '@nestjs/common';
import { Booking } from './booking.model';
import { MoviesService } from '../movies/movies.service';

@Injectable()
export class BookingsService {
  private bookings: Booking[] = [];

  constructor(private moviesService: MoviesService) {}

  createBooking(booking: Booking): Booking {
    const movie = this.moviesService.findById(booking.movieId);

    if (!movie) {
      throw new BadRequestException('Movie not found');
    }

    if (movie.availableSeats < booking.seats) {
      throw new BadRequestException('Not enough seats available');
    }

    this.moviesService.reduceSeats(booking.movieId, booking.seats);
    this.bookings.push(booking);

    return booking;
  }

  findAll(): Booking[] {
    return this.bookings;
  }
}
