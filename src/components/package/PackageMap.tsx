'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const tileLayer = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  }


const PackageMap = ({
    position
} : {
    position: number[]
} ) => {
  return (
    <MapContainer center={[position[0], position[1]]} zoom={10} scrollWheelZoom={true} className='h-[400px]'>
      <TileLayer {...tileLayer} />

      <Marker position={[position[0], position[1]]}>
        <Popup>Center Warsaw</Popup>
      </Marker>

    </MapContainer>
  )
}

export default PackageMap