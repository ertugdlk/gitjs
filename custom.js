const graphContainer = document.getElementById("graph-container");

    // Instantiate the graph.
    const gitgraph = GitgraphJS.createGitgraph(graphContainer  );
    
    
    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch("master");
    master.commit("Initial commit");
    master.tag("v1.1.0");
    master.commit("Initial commit");
    const FeatureA = gitgraph.branch("Feature A");
    // const FeatureB = gitgraph.branch("Feature B");
    FeatureA.commit("ADD : feature");
    FeatureA.commit("ADD : feature2");

    master.commit("ADD : feature3");
    FeatureA.merge(master);
    master.merge(FeatureA);
  