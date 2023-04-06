interface Ingredient {
    id: string;
    name: string;
}

interface Author {
    id: string;
    username: string;
}

interface Category {
    id: string;
    name: string;
}

interface Cuisine {
    id: string;
    name: string;
}

interface Diet {
    id: string;
    name: string;
}

interface Method {
    id: string;
    name: string;
}

interface Season {
    id: string;
    name: string;
}

interface Comment {
    id: string;
    content: string;
    author: Author;
    createdAt: string;
}

interface Tag {
    id: string;
    name: string;
}

export interface Recipe {
    id: string;
    title: string;
    ingredients: Ingredient[];
    instructions: string[];
    author: Author;
    publishedDate: string;
    category: Category;
    cuisine: Cuisine;
    diet: Diet;
    method: Method;
    season: Season;
    comments: Comment[];
    imageUrl: string;
    tags: Tag[];
}
