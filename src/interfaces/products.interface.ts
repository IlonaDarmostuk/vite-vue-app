export interface IProduct {
    is_favorite: boolean,
    slug: string,
    name_slug: string,
    description: IProductDescription,
    preview_image: string,
    category: string,
    name: string,
    search_location: string,
    price_from: string,
    group_type: string,
    business: IProductBusiness,
    address: IProductAddress,
    distance: null,
    review_json: Object,
    review_average_score: number,
    image_library: null,
    period: null,
    period_text: null,
    timeslots: IProductTimeSlot[],
    ticket_types: Array<any>,
}

interface IProductDescription {
    Waiver: string,
    "Dress Code": string,
    "COVID Policy": string,
    "Reservation Type": string,
    "Experience Address": IProductExperienceAddress,
    "Experience Details":  string,
    "Cancellation Policy": string,
    "Duration Description": string,
}

interface IProductExperienceAddress {
    lat: number,
    lng: number,
    address: string,
}

interface IProductTimeSlot {
    slug: string,
    start_time: string,
    end_time: string,
    seats_remaining: number,
    total_seats: number,
    data: Object,
    experience: string
}

 interface IProductBusiness {
    slug: string,
    name: string,
    description: string,
    email: string,
    review_average_score: number
}

interface IProductAddress {
    address: string,
}