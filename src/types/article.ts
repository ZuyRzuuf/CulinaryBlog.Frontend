interface Author {
    id: string;
    username: string;
}

interface Tag {
    id: string;
    name: string;
}

interface Comment {
    id: string;
    content: string;
    author: Author;
    createdAt: string;
}

export interface Article {
    id: string;
    title: string;
    imageUrl: string;
    content: string;
    author: Author;
    publishedDate: string;
    tags: Tag[];
    comments: Comment[];
}
