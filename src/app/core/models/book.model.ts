export class Book {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public thumbnailUrl: string
  ) {}

  static parse(obj) {
    return new Book(
      obj.id,
      obj.volumeInfo.title,
      obj.volumeInfo.description,
      obj.volumeInfo.imageLinks?.thumbnail
    );
  }
}
