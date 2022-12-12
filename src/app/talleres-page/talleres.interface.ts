export interface GetATalleresAPI {
    events:      Taller[];
    totalEvents: number;
}

export interface Taller {
    _id:         string;
    title:       string;
    description: string;
    body:        string;
    image:       string;
    info:        Info;
    __v:         number;
}

export interface Info {
    category:     string;
    instructor:   string;
    initial_date: string;
    final_date:   string;
    location:     string;
    modality:     string;
    link:         string;
    _id:          string;
}