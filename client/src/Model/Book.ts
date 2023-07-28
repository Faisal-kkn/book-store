export interface Book {
    volumeInfo: {
        title: string;
        imageLinks: {
            thumbnail: string;
        }
        authors: Array<string>;
        previewLink: string;
    };
    id: string
}

export interface HeadingProps {
    title: string;
}
