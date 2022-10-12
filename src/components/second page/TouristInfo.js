import useFetchTour from "./useFetchTour";

export function TouristInfo() {
  const { tourData, tourError, tourLoading } = useFetchTour();
  return (
    <div>
      {tourData && tourData}
      {tourError && tourError}
      {tourLoading && tourLoading}
    </div>
  );
}
