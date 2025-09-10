export interface AuthorDto {
  username: string;
  displayName: string;
  profileImagePath: string;
}

export class PostDto {
  id: string;
  message: string;
  createdDateTime: Date;
  visibility: string;
  author: AuthorDto;

  constructor(data: any) {
    this.id = data.id;
    this.message = data.message;
    this.visibility = data.visibility;
    this.createdDateTime = new Date(data.createdDateTime);
    this.author = {
      username: data.author.username,
      displayName: data.author.displayName,
      profileImagePath: data.author.profileImagePath
    };
  }

  static fromArray(dataArray: any[]): PostDto[] {
    return dataArray.map(d => new PostDto(d));
  }
}
