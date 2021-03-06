import React from 'react';
import Leaflet from 'leaflet';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.scss';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';


const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170,2]
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Santos e São Vicente</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <MapContainer
        center={[-23.9580611,-46.3532323]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker
          icon={mapIcon}
          position={[-23.9510615,-46.3388407]}
          
        >
          <Popup closeButton={false} minWidth={250} maxWidth={250} className="map-popup"> 
            Estádio Urbano Caldeira
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;