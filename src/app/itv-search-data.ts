export interface ITvSearchData {    
    name: string,
    genres: [],
    status: string,
    schedule: {
        time: string,
        days: []
    },
    network: {
        name: string
    },
    summary: string
    image: {
        medium: string
    },
    language: string,
    runtime: number,
    rating:{
        average: number
    }
}
