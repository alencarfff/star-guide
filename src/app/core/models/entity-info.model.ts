import MovieModel from './movie.model';

export default interface EntityInfo {
    id: number,
    entity: any,
    relatedMovies: MovieModel[]
}