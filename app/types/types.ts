interface EventImageAtt{
    name: string;
    url: string;
}

interface EventImageDetail{
    id: string;
    attributes: EventImageAtt;
}

interface EventImage{
    data: EventImageDetail;
}

export interface EventDetail{
    name: string;
    slug: string;
    venue: string;
    address: string;
    date: Date;
    time: string;
    performers: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: EventImage;
}

export interface Event {
    id: number;
    attributes: EventDetail;
}

export interface PaginationDetail{
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface Pagination{ 
    pagination: PaginationDetail;
}