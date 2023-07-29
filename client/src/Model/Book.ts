export interface VolumeInfo {
    title: string;
    imageLinks: {
        thumbnail: string;
    };
    authors: string[];
    previewLink: string;
    publishedDate?: string
}

export interface Books {
    items?: Array<{
        volumeInfo: VolumeInfo;
        id: string;
    }>;
    totalItems: number
}

export interface RightSidebarProps {
    searchResult: Books;
    search: string;
    searchError: boolean;
}


export interface HeadingProps {
    title: string;
}
