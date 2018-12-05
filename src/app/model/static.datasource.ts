import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";

import { Vuelo } from "./vuelo.model";
import { Pedido } from "./pedido.model";

@Injectable()
export class StaticDataSource {

    private vuelos: Vuelo[]= [
        {
            id: 1,
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "5",
                "scheduledTime": "2018-11-08T12:20:00.000",
                "estimatedTime": "2018-11-08T12:20:00.000",
                "actualTime": "2018-11-08T12:20:00.000",
                "estimatedRunway": "2018-11-08T12:30:00.000",
                "actualRunway": "2018-11-08T12:30:00.000"
            },
            "arrival": {
                "iataCode": "TFN",
                "icaoCode": "GCXO",
                "terminal": "1",
                "baggage": "1",
                "scheduledTime": "2018-11-08T13:35:00.000",
                "estimatedTime": "2018-11-08T13:33:00.000",
                "actualTime": "2018-11-08T13:33:00.000",
                "estimatedRunway": "2018-11-08T13:30:00.000",
                "actualRunway": "2018-11-08T13:30:00.000"
            },
            "airline": {
                "name": "Iberia",
                "iataCode": "IB",
                "icaoCode": "IBE"
            },
            "flight": {
                "number": "5118",
                "iataNumber": "IB5118",
                "icaoNumber": "IBE5118"
            },
            "codeshared": {
                "airline": {
                    "name": "Vueling",
                    "iataCode": "VY",
                    "icaoCode": "VLG"
                },
                "flight": {
                    "number": "3254",
                    "iataNumber": "VY3254",
                    "icaoNumber": "VLG3254"
                }
            }
        },
        {
            id: 2,
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "5",
                "scheduledTime": "2018-11-08T12:20:00.000",
                "estimatedTime": "2018-11-08T12:20:00.000",
                "actualTime": "2018-11-08T12:20:00.000",
                "estimatedRunway": "2018-11-08T12:30:00.000",
                "actualRunway": "2018-11-08T12:30:00.000"
            },
            "arrival": {
                "iataCode": "TFN",
                "icaoCode": "GCXO",
                "terminal": "1",
                "baggage": "1",
                "scheduledTime": "2018-11-08T13:35:00.000",
                "estimatedTime": "2018-11-08T13:33:00.000",
                "actualTime": "2018-11-08T13:33:00.000",
                "estimatedRunway": "2018-11-08T13:30:00.000",
                "actualRunway": "2018-11-08T13:30:00.000"
            },
            "airline": {
                "name": "Vueling",
                "iataCode": "VY",
                "icaoCode": "VLG"
            },
            "flight": {
                "number": "3254",
                "iataNumber": "VY3254",
                "icaoNumber": "VLG3254"
            }
        },
        {
            id: 3,
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "3",
                "scheduledTime": "2018-11-08T12:45:00.000",
                "estimatedTime": "2018-11-08T12:41:00.000",
                "actualTime": "2018-11-08T12:41:00.000",
                "estimatedRunway": "2018-11-08T12:49:00.000",
                "actualRunway": "2018-11-08T12:49:00.000"
            },
            "arrival": {
                "iataCode": "PMI",
                "icaoCode": "LEPA",
                "scheduledTime": "2018-11-08T14:15:00.000",
                "estimatedTime": "2018-11-08T14:00:00.000",
                "actualTime": "2018-11-08T14:00:00.000",
                "estimatedRunway": "2018-11-08T13:56:00.000",
                "actualRunway": "2018-11-08T13:56:00.000"
            },
            "airline": {
                "name": "Iberia",
                "iataCode": "IB",
                "icaoCode": "IBE"
            },
            "flight": {
                "number": "5545",
                "iataNumber": "IB5545",
                "icaoNumber": "IBE5545"
            },
            "codeshared": {
                "airline": {
                    "name": "Vueling",
                    "iataCode": "VY",
                    "icaoCode": "VLG"
                },
                "flight": {
                    "number": "3941",
                    "iataNumber": "VY3941",
                    "icaoNumber": "VLG3941"
                }
            }
        },
        {
            id: 4,
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "3",
                "scheduledTime": "2018-11-08T12:45:00.000",
                "estimatedTime": "2018-11-08T12:41:00.000",
                "actualTime": "2018-11-08T12:41:00.000",
                "estimatedRunway": "2018-11-08T12:49:00.000",
                "actualRunway": "2018-11-08T12:49:00.000"
            },
            "arrival": {
                "iataCode": "PMI",
                "icaoCode": "LEPA",
                "scheduledTime": "2018-11-08T14:15:00.000",
                "estimatedTime": "2018-11-08T14:00:00.000",
                "actualTime": "2018-11-08T14:00:00.000",
                "estimatedRunway": "2018-11-08T13:56:00.000",
                "actualRunway": "2018-11-08T13:56:00.000"
            },
            "airline": {
                "name": "Vueling",
                "iataCode": "VY",
                "icaoCode": "VLG"
            },
            "flight": {
                "number": "3941",
                "iataNumber": "VY3941",
                "icaoNumber": "VLG3941"
            }
        },
        {
            id: 5,
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "4",
                "delay": 7,
                "scheduledTime": "2018-11-08T12:40:00.000",
                "estimatedTime": "2018-11-08T12:47:00.000",
                "actualTime": "2018-11-08T12:47:00.000",
                "estimatedRunway": "2018-11-08T12:54:00.000",
                "actualRunway": "2018-11-08T12:54:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "baggage": "1",
                "scheduledTime": "2018-11-08T15:20:00.000",
                "estimatedTime": "2018-11-08T15:04:00.000",
                "actualTime": "2018-11-08T15:04:00.000",
                "estimatedRunway": "2018-11-08T14:59:00.000",
                "actualRunway": "2018-11-08T14:59:00.000"
            },
            "airline": {
                "name": "Brussels Airlines",
                "iataCode": "SN",
                "icaoCode": "BEL"
            },
            "flight": {
                "number": "3748",
                "iataNumber": "SN3748",
                "icaoNumber": "BEL3748"
            }
        },
        {
            id: 6,
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "6",
                "delay": 25,
                "scheduledTime": "2018-11-08T12:25:00.000",
                "estimatedTime": "2018-11-08T12:50:00.000",
                "actualTime": "2018-11-08T12:50:00.000"
            },
            "arrival": {
                "iataCode": "TLS",
                "icaoCode": "LFBO",
                "gate": "04",
                "baggage": "5",
                "delay": 12,
                "scheduledTime": "2018-11-08T14:05:00.000",
                "estimatedTime": "2018-11-08T14:17:00.000",
                "actualTime": "2018-11-08T14:17:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "1726",
                "iataNumber": "U21726",
                "icaoNumber": "EZY1726"
            }
        },
        {
            id: 7,
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "8",
                "delay": 20,
                "scheduledTime": "2018-11-08T12:35:00.000",
                "estimatedTime": "2018-11-08T12:55:00.000",
                "actualTime": "2018-11-08T12:55:00.000",
                "estimatedRunway": "2018-11-08T13:03:00.000",
                "actualRunway": "2018-11-08T13:03:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "terminal": "1",
                "gate": "D86",
                "baggage": "2",
                "scheduledTime": "2018-11-08T15:35:00.000",
                "estimatedTime": "2018-11-08T15:22:00.000",
                "actualTime": "2018-11-08T15:22:00.000",
                "estimatedRunway": "2018-11-08T15:15:00.000",
                "actualRunway": "2018-11-08T15:15:00.000"
            },
            "airline": {
                "name": "KLM",
                "iataCode": "KL",
                "icaoCode": "KLM"
            },
            "flight": {
                "number": "2688",
                "iataNumber": "KL2688",
                "icaoNumber": "KLM2688"
            },
            "codeshared": {
                "airline": {
                    "name": "Transavia",
                    "iataCode": "HV",
                    "icaoCode": "TRA"
                },
                "flight": {
                    "number": "6730",
                    "iataNumber": "HV6730",
                    "icaoNumber": "TRA6730"
                }
            }
        },
        {
            id: 8,
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "8",
                "delay": 20,
                "scheduledTime": "2018-11-08T12:35:00.000",
                "estimatedTime": "2018-11-08T12:55:00.000",
                "actualTime": "2018-11-08T12:55:00.000",
                "estimatedRunway": "2018-11-08T13:03:00.000",
                "actualRunway": "2018-11-08T13:03:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "terminal": "1",
                "gate": "D86",
                "baggage": "2",
                "scheduledTime": "2018-11-08T15:35:00.000",
                "estimatedTime": "2018-11-08T15:22:00.000",
                "actualTime": "2018-11-08T15:22:00.000",
                "estimatedRunway": "2018-11-08T15:15:00.000",
                "actualRunway": "2018-11-08T15:15:00.000"
            },
            "airline": {
                "name": "Transavia",
                "iataCode": "HV",
                "icaoCode": "TRA"
            },
            "flight": {
                "number": "6730",
                "iataNumber": "HV6730",
                "icaoNumber": "TRA6730"
            }
        },
        {
            id: 9,
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "1",
                "delay": 6,
                "scheduledTime": "2018-11-08T13:00:00.000",
                "estimatedTime": "2018-11-08T13:06:00.000",
                "actualTime": "2018-11-08T13:06:00.000"
            },
            "arrival": {
                "iataCode": "BRS",
                "icaoCode": "EGGD",
                "scheduledTime": "2018-11-08T14:40:00.000",
                "estimatedTime": "2018-11-08T14:19:00.000",
                "actualTime": "2018-11-08T14:19:00.000",
                "estimatedRunway": "2018-11-08T14:13:00.000",
                "actualRunway": "2018-11-08T14:13:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "6348",
                "iataNumber": "U26348",
                "icaoNumber": "EZY6348"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "6",
                "scheduledTime": "2018-11-08T13:30:00.000",
                "estimatedTime": "2018-11-08T13:30:00.000",
                "actualTime": "2018-11-08T13:30:00.000",
                "estimatedRunway": "2018-11-08T13:42:00.000",
                "actualRunway": "2018-11-08T13:42:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "10",
                "delay": 1,
                "scheduledTime": "2018-11-08T14:35:00.000",
                "estimatedTime": "2018-11-08T14:36:00.000",
                "actualTime": "2018-11-08T14:36:00.000",
                "estimatedRunway": "2018-11-08T14:29:00.000",
                "actualRunway": "2018-11-08T14:29:00.000"
            },
            "airline": {
                "name": "American Airlines",
                "iataCode": "AA",
                "icaoCode": "AAL"
            },
            "flight": {
                "number": "8793",
                "iataNumber": "AA8793",
                "icaoNumber": "AAL8793"
            },
            "codeshared": {
                "airline": {
                    "name": "Iberia Express",
                    "iataCode": "I2",
                    "icaoCode": "IBS"
                },
                "flight": {
                    "number": "3949",
                    "iataNumber": "I23949",
                    "icaoNumber": "IBS3949"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "6",
                "scheduledTime": "2018-11-08T13:30:00.000",
                "estimatedTime": "2018-11-08T13:30:00.000",
                "actualTime": "2018-11-08T13:30:00.000",
                "estimatedRunway": "2018-11-08T13:42:00.000",
                "actualRunway": "2018-11-08T13:42:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "10",
                "delay": 1,
                "scheduledTime": "2018-11-08T14:35:00.000",
                "estimatedTime": "2018-11-08T14:36:00.000",
                "actualTime": "2018-11-08T14:36:00.000",
                "estimatedRunway": "2018-11-08T14:29:00.000",
                "actualRunway": "2018-11-08T14:29:00.000"
            },
            "airline": {
                "name": "AVIANCA",
                "iataCode": "AV",
                "icaoCode": "AVA"
            },
            "flight": {
                "number": "6113",
                "iataNumber": "AV6113",
                "icaoNumber": "AVA6113"
            },
            "codeshared": {
                "airline": {
                    "name": "Iberia Express",
                    "iataCode": "I2",
                    "icaoCode": "IBS"
                },
                "flight": {
                    "number": "3949",
                    "iataNumber": "I23949",
                    "icaoNumber": "IBS3949"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "6",
                "scheduledTime": "2018-11-08T13:30:00.000",
                "estimatedTime": "2018-11-08T13:30:00.000",
                "actualTime": "2018-11-08T13:30:00.000",
                "estimatedRunway": "2018-11-08T13:42:00.000",
                "actualRunway": "2018-11-08T13:42:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "10",
                "delay": 1,
                "scheduledTime": "2018-11-08T14:35:00.000",
                "estimatedTime": "2018-11-08T14:36:00.000",
                "actualTime": "2018-11-08T14:36:00.000",
                "estimatedRunway": "2018-11-08T14:29:00.000",
                "actualRunway": "2018-11-08T14:29:00.000"
            },
            "airline": {
                "name": "British Airways",
                "iataCode": "BA",
                "icaoCode": "BAW"
            },
            "flight": {
                "number": "7261",
                "iataNumber": "BA7261",
                "icaoNumber": "BAW7261"
            },
            "codeshared": {
                "airline": {
                    "name": "Iberia Express",
                    "iataCode": "I2",
                    "icaoCode": "IBS"
                },
                "flight": {
                    "number": "3949",
                    "iataNumber": "I23949",
                    "icaoNumber": "IBS3949"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "6",
                "scheduledTime": "2018-11-08T13:30:00.000",
                "estimatedTime": "2018-11-08T13:30:00.000",
                "actualTime": "2018-11-08T13:30:00.000",
                "estimatedRunway": "2018-11-08T13:42:00.000",
                "actualRunway": "2018-11-08T13:42:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "10",
                "delay": 1,
                "scheduledTime": "2018-11-08T14:35:00.000",
                "estimatedTime": "2018-11-08T14:36:00.000",
                "actualTime": "2018-11-08T14:36:00.000",
                "estimatedRunway": "2018-11-08T14:29:00.000",
                "actualRunway": "2018-11-08T14:29:00.000"
            },
            "airline": {
                "name": "Iberia",
                "iataCode": "IB",
                "icaoCode": "IBE"
            },
            "flight": {
                "number": "3949",
                "iataNumber": "IB3949",
                "icaoNumber": "IBE3949"
            },
            "codeshared": {
                "airline": {
                    "name": "Iberia Express",
                    "iataCode": "I2",
                    "icaoCode": "IBS"
                },
                "flight": {
                    "number": "3949",
                    "iataNumber": "I23949",
                    "icaoNumber": "IBS3949"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "6",
                "scheduledTime": "2018-11-08T13:30:00.000",
                "estimatedTime": "2018-11-08T13:30:00.000",
                "actualTime": "2018-11-08T13:30:00.000",
                "estimatedRunway": "2018-11-08T13:42:00.000",
                "actualRunway": "2018-11-08T13:42:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "10",
                "delay": 1,
                "scheduledTime": "2018-11-08T14:35:00.000",
                "estimatedTime": "2018-11-08T14:36:00.000",
                "actualTime": "2018-11-08T14:36:00.000",
                "estimatedRunway": "2018-11-08T14:29:00.000",
                "actualRunway": "2018-11-08T14:29:00.000"
            },
            "airline": {
                "name": "LATAM Airlines",
                "iataCode": "LA",
                "icaoCode": "LAN"
            },
            "flight": {
                "number": "5461",
                "iataNumber": "LA5461",
                "icaoNumber": "LAN5461"
            },
            "codeshared": {
                "airline": {
                    "name": "Iberia Express",
                    "iataCode": "I2",
                    "icaoCode": "IBS"
                },
                "flight": {
                    "number": "3949",
                    "iataNumber": "I23949",
                    "icaoNumber": "IBS3949"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "6",
                "scheduledTime": "2018-11-08T13:30:00.000",
                "estimatedTime": "2018-11-08T13:30:00.000",
                "actualTime": "2018-11-08T13:30:00.000",
                "estimatedRunway": "2018-11-08T13:42:00.000",
                "actualRunway": "2018-11-08T13:42:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "10",
                "delay": 1,
                "scheduledTime": "2018-11-08T14:35:00.000",
                "estimatedTime": "2018-11-08T14:36:00.000",
                "actualTime": "2018-11-08T14:36:00.000",
                "estimatedRunway": "2018-11-08T14:29:00.000",
                "actualRunway": "2018-11-08T14:29:00.000"
            },
            "airline": {
                "name": "Qatar Airways",
                "iataCode": "QR",
                "icaoCode": "QTR"
            },
            "flight": {
                "number": "6912",
                "iataNumber": "QR6912",
                "icaoNumber": "QTR6912"
            },
            "codeshared": {
                "airline": {
                    "name": "Iberia Express",
                    "iataCode": "I2",
                    "icaoCode": "IBS"
                },
                "flight": {
                    "number": "3949",
                    "iataNumber": "I23949",
                    "icaoNumber": "IBS3949"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "6",
                "scheduledTime": "2018-11-08T13:30:00.000",
                "estimatedTime": "2018-11-08T13:30:00.000",
                "actualTime": "2018-11-08T13:30:00.000",
                "estimatedRunway": "2018-11-08T13:42:00.000",
                "actualRunway": "2018-11-08T13:42:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "10",
                "delay": 1,
                "scheduledTime": "2018-11-08T14:35:00.000",
                "estimatedTime": "2018-11-08T14:36:00.000",
                "actualTime": "2018-11-08T14:36:00.000",
                "estimatedRunway": "2018-11-08T14:29:00.000",
                "actualRunway": "2018-11-08T14:29:00.000"
            },
            "airline": {
                "name": "Iberia Express",
                "iataCode": "I2",
                "icaoCode": "IBS"
            },
            "flight": {
                "number": "3949",
                "iataNumber": "I23949",
                "icaoNumber": "IBS3949"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "scheduledTime": "2018-11-08T14:00:00.000",
                "estimatedTime": "2018-11-08T13:55:00.000",
                "actualTime": "2018-11-08T13:55:00.000",
                "estimatedRunway": "2018-11-08T14:00:00.000",
                "actualRunway": "2018-11-08T14:00:00.000"
            },
            "arrival": {
                "iataCode": "LGW",
                "icaoCode": "EGKK",
                "terminal": "N",
                "scheduledTime": "2018-11-08T15:45:00.000",
                "estimatedTime": "2018-11-08T15:15:00.000",
                "actualTime": "2018-11-08T15:15:00.000",
                "estimatedRunway": "2018-11-08T15:07:00.000",
                "actualRunway": "2018-11-08T15:07:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "8176",
                "iataNumber": "U28176",
                "icaoNumber": "EZY8176"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "delay": 18,
                "scheduledTime": "2018-11-08T14:10:00.000",
                "estimatedTime": "2018-11-08T14:28:00.000",
                "actualTime": "2018-11-08T14:28:00.000",
                "estimatedRunway": "2018-11-08T14:37:00.000",
                "actualRunway": "2018-11-08T14:37:00.000"
            },
            "arrival": {
                "iataCode": "FUE",
                "icaoCode": "GCFV",
                "delay": 15,
                "scheduledTime": "2018-11-08T15:25:00.000",
                "estimatedTime": "2018-11-08T15:40:00.000",
                "actualTime": "2018-11-08T15:40:00.000",
                "estimatedRunway": "2018-11-08T15:33:00.000",
                "actualRunway": "2018-11-08T15:33:00.000"
            },
            "airline": {
                "name": "Ryanair",
                "iataCode": "FR",
                "icaoCode": "RYR"
            },
            "flight": {
                "number": "5912",
                "iataNumber": "FR5912",
                "icaoNumber": "RYR5912"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "K2",
                "delay": 21,
                "scheduledTime": "2018-11-08T15:10:00.000",
                "estimatedTime": "2018-11-08T15:31:00.000"
            },
            "arrival": {
                "iataCode": "LIS",
                "icaoCode": "LPPT",
                "terminal": "1",
                "scheduledTime": "2018-11-08T15:20:00.000",
                "estimatedRunway": "2018-11-08T16:10:00.000",
                "actualRunway": "2018-11-08T16:10:00.000"
            },
            "airline": {
                "name": "Azores Airlines",
                "iataCode": "S4",
                "icaoCode": "RZO"
            },
            "flight": {
                "number": "8721",
                "iataNumber": "S48721",
                "icaoNumber": "RZO8721"
            },
            "codeshared": {
                "airline": {
                    "name": "White Airways",
                    "iataCode": "WI",
                    "icaoCode": "WHT"
                },
                "flight": {
                    "number": "1105",
                    "iataNumber": "WI1105",
                    "icaoNumber": "WHT1105"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "K2",
                "delay": 21,
                "scheduledTime": "2018-11-08T15:10:00.000",
                "estimatedTime": "2018-11-08T15:31:00.000"
            },
            "arrival": {
                "iataCode": "LIS",
                "icaoCode": "LPPT",
                "terminal": "1",
                "scheduledTime": "2018-11-08T15:20:00.000",
                "estimatedRunway": "2018-11-08T16:10:00.000",
                "actualRunway": "2018-11-08T16:10:00.000"
            },
            "airline": {
                "name": "TAP Portugal",
                "iataCode": "TP",
                "icaoCode": "TAP"
            },
            "flight": {
                "number": "1105",
                "iataNumber": "TP1105",
                "icaoNumber": "TAP1105"
            },
            "codeshared": {
                "airline": {
                    "name": "White Airways",
                    "iataCode": "WI",
                    "icaoCode": "WHT"
                },
                "flight": {
                    "number": "1105",
                    "iataNumber": "WI1105",
                    "icaoNumber": "WHT1105"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "K2",
                "delay": 21,
                "scheduledTime": "2018-11-08T15:10:00.000",
                "estimatedTime": "2018-11-08T15:31:00.000"
            },
            "arrival": {
                "iataCode": "LIS",
                "icaoCode": "LPPT",
                "terminal": "1",
                "scheduledTime": "2018-11-08T15:20:00.000",
                "estimatedRunway": "2018-11-08T16:10:00.000",
                "actualRunway": "2018-11-08T16:10:00.000"
            },
            "airline": {
                "name": "White Airways",
                "iataCode": "WI",
                "icaoCode": "WHT"
            },
            "flight": {
                "number": "1105",
                "iataNumber": "WI1105",
                "icaoNumber": "WHT1105"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "SVQ",
                "icaoCode": "LEZL",
                "terminal": "1",
                "gate": "3",
                "delay": 11,
                "scheduledTime": "2018-11-08T15:25:00.000",
                "estimatedTime": "2018-11-08T15:36:00.000",
                "actualTime": "2018-11-08T15:36:00.000",
                "estimatedRunway": "2018-11-08T15:42:00.000",
                "actualRunway": "2018-11-08T15:42:00.000"
            },
            "arrival": {
                "iataCode": "BCN",
                "icaoCode": "LEBL",
                "terminal": "1",
                "baggage": "08",
                "scheduledTime": "2018-11-08T17:00:00.000",
                "estimatedTime": "2018-11-08T16:52:00.000",
                "actualTime": "2018-11-08T16:52:00.000",
                "estimatedRunway": "2018-11-08T16:46:00.000",
                "actualRunway": "2018-11-08T16:46:00.000"
            },
            "airline": {
                "name": "Iberia",
                "iataCode": "IB",
                "icaoCode": "IBE"
            },
            "flight": {
                "number": "5731",
                "iataNumber": "IB5731",
                "icaoNumber": "IBE5731"
            },
            "codeshared": {
                "airline": {
                    "name": "Vueling",
                    "iataCode": "VY",
                    "icaoCode": "VLG"
                },
                "flight": {
                    "number": "2221",
                    "iataNumber": "VY2221",
                    "icaoNumber": "VLG2221"
                }
            }
        }]

    getVuelos(): Observable<Vuelo[]> {
        return from([this.vuelos]);
    }

    guardarPedido(pedido: Pedido): Observable<Pedido> {
        console.log(JSON.stringify(pedido));
        return from([pedido]);
    }
}