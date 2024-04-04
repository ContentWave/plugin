import { ISOCountry } from './ISOCountry'
import { Plugin } from './Plugin'

export interface GeocodeLatLng {
  lat: number
  lng: number
}

export interface GeocodeAddr {
  locality: string
  postal_code: string
  thoroughfare: string
  administrative_area: string
  country: ISOCountry
}

export interface GeocodePlugin extends Plugin {
  geocode(addr: Partial<GeocodeAddr>): Promise<GeocodeLatLng>
}
