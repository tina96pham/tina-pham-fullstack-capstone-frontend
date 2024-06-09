import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./StackBarChart.scss";
// import { useFetchWastelog } from "../../utils/useFetchData";
import wastelog from "../../data/log-data.json";

const StackBarChart = () => {
  // const { wasteLog, loading } = useFetchWastelog();
  const svgRef = useRef();

  useEffect(() => {
    const data = wastelog;

    // Create dimensions
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Select SVG
    const svg = d3.select(svgRef.current);

    // Clear previous chart before re-rendering (if needed)
    svg.selectAll("*").remove();

    // Set up scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.type))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.landfillContribution)])
      .nice()
      .range([height, 0]);

    // Draw chart
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create bars
    const bars = g
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.type))
      .attr("y", (d) => yScale(d.landfillContribution))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.landfillContribution));

    // Add labels
    bars
      .append("text")
      .attr("class", "bar-label")
      .attr("x", (d) => xScale(d.type) + xScale.bandwidth() / 2)
      .attr("y", (d) => yScale(d.landfillContribution) - 100)
      .attr("text-anchor", "middle")
      .text((d) => d.landfillContribution);

    // Draw axes
    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
  }, []);

  return(
  <div className="chart-container">
    <svg ref={svgRef} width="600" height="400" />
  </div>
  )
};

export default StackBarChart;
