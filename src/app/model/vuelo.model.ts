import { Timestamp } from "rxjs";
import { Time } from "@angular/common";

export class Vuelo {
    constructor(
        public id?: number,
        public type?: string,
        public status?: string,
        public departure?: {
            iataCode?: string,
            icaoCode?: string,
            terminal?: string,
            gate?: string,
            delay?: number,
            scheduledTime?: string,
            estimatedTime?: string,
            actualTime?: string,
            estimatedRunway?: string,
            actualRunway?: string
        },
        public arrival?: {
            iataCode?: string,
            icaoCode?: string,
            terminal?: string,
            gate?: string,
            baggage?: string,
            delay?: number,
            scheduledTime?: string,
            estimatedTime?: string,
            actualTime?: string,
            estimatedRunway?: string,
            actualRunway?: string
        },
        public airline?: {
            name?: string,
            iataCode?: string,
            icaoCode?: string
        },
        public flight?: {
            "number"?: string,
            iataNumber?: string,
            icaoNumber?: string
        },
        public codeshared?: {
            airline?: {
                name?: string,
                iataCode?: string,
                icaoCode?: string
            },
            flight?: {
                "number"?: string,
                iataNumber?: string,
                icaoNumber?: string
            }
        }
    ){}
}
