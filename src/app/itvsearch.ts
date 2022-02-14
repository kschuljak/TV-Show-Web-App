export interface Itvsearch {
    showSearch: array
      show: object
        showName: string
        showStatus: string
        showGenres: array
        showSummary: string
        showSchedule: object
          scheduleTime: string
          scheduleDays: array
    cast: array
      castPerson: object
        personName: string
    seasons: array
        seasonsId: number
        seasonsEpisodeOrder: number
}

