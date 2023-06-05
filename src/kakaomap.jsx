import { Box } from "@chakra-ui/react";
import { useEffect } from "react"

export default function KakaoMap() {
    useEffect(() => {
        const mapContainer = document.getElementById('map')
        const mapOption = {
            center: new window.kakao.maps.LatLng(35.7880646, 128.635446),
            level: 2
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const markerPosition = new window.kakao.maps.LatLng(35.7880646, 128.635446);
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map)
    }, [])
    return <Box as="div" w="full" h="300px" id="map"></Box>
}