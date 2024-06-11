import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { timeFormat } from "d3-time-format";
import "./LineChart.scss";

function LineChart({ type, data }) {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 5, right: 10, bottom: 5, left: 10 },
      width = 200 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;
    const svgWidth = width + margin.left + margin.right;
    const svgHeight = height + margin.top + margin.bottom;

    d3.select(svgRef.current).selectAll("*").remove();

    const formatMonth = timeFormat("%b");

    const svg = d3
    .select(svgRef.current)
    .style("position", "relative") 
    .style("z-index", "1") 
    .style("display", "block") 
    .style("width", "100%") 
    .style("height", "100%") 
    .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`) 
    .attr("preserveAspectRatio", "xMinYMin")
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.weight)])
      .nice()
      .range([height, 0]);

    const line = d3
      .line()
      .x((d) => x(d.date))
      .y((d) => y(d.weight))
      .curve(d3.curveBasis);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#FF6961")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Create the cursor elements
    const focus = svg
      .append("g")
      .style("display", "none")
      .style("position", "relative")
      .style("z-index", "2")
      .attr("stroke", "#5C667E")
      .attr("fill", "white");

    focus
      .append("line")
      .attr("class", "x-hover-line hover-line")
      .attr("y1", 0)
      .attr("y2", height);

    focus
      .append("line")
      .attr("class", "y-hover-line hover-line")
      .attr("x1", 0)
      .attr("x2", width);

    focus.append("circle").attr("r", 5).attr("class", "focus-circle");

    focus.append("text").attr("x", 15).attr("dy", ".31em");

    // Add a rect to capture mouse events to show month
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "overlay")
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", () => focus.style("display", null))
      .on("mouseout", () => focus.style("display", "none"))
      .on("mousemove", function (event) {
        const bisectDate = d3.bisector((d) => d.date).left;
        const mouseX = d3.pointer(event, this)[0];
        const x0 = x.invert(mouseX);
        const i = bisectDate(data, x0, 1);

        // Ensure d0 and d1 are defined
        if (i > 0 && i < data.length) {
          const d0 = data[i - 1];
          const d1 = data[i];
          const d = x0 - d0.date > d1.date - x0 ? d1 : d0;
          focus.attr("transform", `translate(${x(d.date)},${y(d.weight)})`);
          focus.select("text").text(`${formatMonth(d.date)}: ${d.weight} kg`);
          focus.select(".x-hover-line").attr("y2", height - y(d.weight));
          focus.select(".y-hover-line").attr("x2", -x(d.date));
        }
      });
  }, [data]);

  const totalWeight = d3.sum(data, (d) => d.weight);
  return (
    <div className="card">
      <h2 className="card__header">{type}</h2>
      <div className="card__subheader">
        {totalWeight} kg
        <p>Up-to-date-total:</p>
      </div>
      <div className="card__chart">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
}

export default LineChart;
