export interface Article {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    creator: {
        username: string
    };
    tag: string[];
}