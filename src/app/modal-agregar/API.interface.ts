export interface CreateAnnouncementAPI {
    status:   boolean;
    newEvent: NewEvent;
}

export interface NewEvent {
    type:        string;
    title:       string;
    description: string;
    body:        string;
    image:       string;
    isActive:    boolean;
    info:        Info;
    _id:         string;
    __v:         number;
}

export interface Info {
    category:     string;
    instructor:   string;
    initial_date: Date;
    final_date:   Date;
    location:     string;
    modality:     string;
    link:         string;
    _id:          string;
}
