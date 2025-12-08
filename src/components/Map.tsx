import * as d3 from 'd3';
import { FeatureCollection } from 'geojson';

type MapProps = {
  width: number;
  height: number;
  data: FeatureCollection;
};

export const Map = ({ width, height, data }: MapProps) => {
// READ THIS SHIT https://www.theodinproject.com/lessons/intermediate-html-and-css-svg
  // read the data
  // create a geoPath generator with the proper projection
  // build the paths
  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI - 40)
    .center([10, 35]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const allSvgPaths = data.features
  .filter((shape) => shape.id !== 'ATA')
  .map((shape) => {
    return (
      <path
        key={shape.id}
        d={geoPathGenerator(shape)}
        stroke="lightGrey"
        strokeWidth={0.5}
        fill="grey"
        fillOpacity={0.7}
      />
    );
  });
  return (
    <div>
      <svg width={width} height={height}>
        {allSvgPaths}
      </svg>
    </div>
  );
};