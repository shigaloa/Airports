export class Aeropuerto {
    constructor(
        public airportId?: string,
        public nameAirport?: string,
        public codeIataAirport?: string,
        public codeIcaoAirport?: string,
        public nameTranslations?: string,
        public latitudeAirport?: string,
        public longitudeAirport?: string,
        public geonameId?: string,
        public timezone?: string,
        public GMT?: string,
        public phone?: string,
        public nameCountry?: string,
        public codeIso2Country?: string,
        public codeIataCity?: string
    ){}
}
