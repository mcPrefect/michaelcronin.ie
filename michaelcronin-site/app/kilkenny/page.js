"use client";
import CityGalleryPage from "../../components/CityGalleryPage";
import { tripInfo, photos, sections } from "../../data/kilkennyData";

export default function Kilkenny() {
  return <CityGalleryPage tripInfo={tripInfo} photos={photos} sections={sections} />;
}
