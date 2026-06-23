"use client";
import CityGalleryPage from "../../components/CityGalleryPage";
import { tripInfo, photos, sections } from "../../data/edinburghData";

export default function Edinburgh() {
  return <CityGalleryPage tripInfo={tripInfo} photos={photos} sections={sections} />;
}
