"use client";
import CityGalleryPage from "../../components/CityGalleryPage";
import { tripInfo, photos, sections } from "../../data/flagmountData";

export default function Flagmount() {
  return <CityGalleryPage tripInfo={tripInfo} photos={photos} sections={sections} />;
}
