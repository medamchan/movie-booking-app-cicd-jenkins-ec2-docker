import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import type { Movie } from './movie.model';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMovies(): Movie[] {
    return this.moviesService.findAll();
  }

  @Get(':id')
  getMovie(@Param('id') id: string): Movie {
    return this.moviesService.findById(Number(id));
  }

  @Post()
  addMovie(@Body() movie: Movie): Movie {
    return this.moviesService.create(movie);
  }
}
