"use client";
import CityGalleryPage from "../../components/CityGalleryPage";
import { tripInfo, photos, sections } from "../../data/leedsData";

export default function Leeds() {
  return <CityGalleryPage tripInfo={tripInfo} photos={photos} sections={sections} />;
}
