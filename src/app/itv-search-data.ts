export interface ITvSearchData {
    show: {
        name: string,
       // genres: Array<string>,
        status: string,
        schedule: {
            time: string,
        //    days: Array<string>
        },
        network: {
            name: string
        },
        summary: string
    }
}
