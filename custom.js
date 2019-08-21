const graphContainer = document.getElementById("graph-container");

    // Instantiate the graph.
    const gitgraph = GitgraphJS.createGitgraph(graphContainer  );
    
    
    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch("master");
    master.commit("Initial commit");
    master.tag("v1.1.0");
    master.commit("Initial commit");
    const FeatureA = gitgraph.branch("Feature A");
    const FeatureB = gitgraph.branch("Feature B");
    FeatureA.commit("ADD : feature");
    FeatureA.commit("ADD : feature2");

    master.merge(FeatureA);
    const FeatureC = gitgraph.branch("Feature C");

    FeatureB.commit("ADD : feature");
    FeatureB.commit("ADD : feature2");
    FeatureB.commit("ADD : feature");
    master.merge(FeatureB);
    const Release = gitgraph.branch("releas/1.2.0");
    const BugFix = gitgraph.branch("BugFix");
    BugFix.merge(master);
    BugFix.commit = ("ADD : feature");
    master.merge(BugFix);
    Release.merge(master);
    FeatureC.commit("ADD : feature");
    FeatureC.commit("ADD : feature2");
    FeatureC.commit("ADD : feature");
    master.merge(FeatureC);
    master.merge(Release);






