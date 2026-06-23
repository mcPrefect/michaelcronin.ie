"use client";
import CityGalleryPage from "../../components/CityGalleryPage";
import { tripInfo, photos, sections } from "../../data/londonData";

export default function London() {
  return <CityGalleryPage tripInfo={tripInfo} photos={photos} sections={sections} />;
}
