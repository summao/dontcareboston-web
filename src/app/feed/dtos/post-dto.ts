export type PostDto = {
    id: string;
    message: string;
    auther: Auther;
    createdDateTime: Date;
    visibility: string;
}

export type Auther = {
    username: string;
    displayName: string;
    profileImagePath: string;
}