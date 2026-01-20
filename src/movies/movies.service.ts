import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './movie.model';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      genre: 'Sci-Fi',
      duration: 148,
      availableSeats: 50,
    },
  ];

  findAll(): Movie[] {
    return this.movies;
  }

  findById(id: number): Movie {
    const movie = this.movies.find(movie => movie.id === id);

    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }

    return movie;
  }

  create(movie: Movie): Movie {
    this.movies.push(movie);
    return movie;
  }

  reduceSeats(movieId: number, seats: number) {
    const movie = this.findById(movieId);
    movie.availableSeats -= seats;
  }
}
