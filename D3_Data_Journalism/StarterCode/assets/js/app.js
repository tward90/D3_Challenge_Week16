// @TODO: YOUR CODE HERE!

function makeResponsive() {

    // if the SVG area isn't empty when the browser loads,
    // remove it and replace it with a resized version of the chart
    const svgArea = d3.select("body").select('scatter')
    
    .select("svg");
    // clear svg is not empty
    if (!svgArea.empty()) {
      svgArea.remove();
    }
  
    // SVG wrapper dimensions are determined by the current width and
    // height of the browser window.
    const svgWidth = window.innerWidth;
    const svgHeight = window.innerHeight;
  
    const margin = {
      top: 50,
      bottom: 50,
      right: 50,
      left: 50
    };
  
    const height = svgHeight - margin.top - margin.bottom;
    const width = svgWidth - margin.left - margin.right;
  
    // Append SVG element
    const svg = d3
      .select(".chart")
      .append("svg")
      .attr("height", svgHeight)
      .attr("width", svgWidth);
  
    // Append group element
    const chartGroup = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
// Load data from CSV File
    d3.csv('assets/data/data.csv').then(function(stateData){
      //  console.log(stateData);
        // set X-Scale to be linear
        const xLinearScale = d3.scaleLinear()
        .domain(d3.extent(stateData, d => d.healthcare))
        .range([0, width]);

        //set Y-Scale to be linear
        const yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(stateData, d => d.age)])
        .range([height, 0]);

})
}