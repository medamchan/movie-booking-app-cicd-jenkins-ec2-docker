import { Controller, Post, Get, Body } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import type { Booking } from './booking.model';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  bookMovie(@Body() booking: Booking): Booking {
    return this.bookingsService.createBooking(booking);
  }

  @Get()
  getBookings(): Booking[] {
    return this.bookingsService.findAll();
  }
}
