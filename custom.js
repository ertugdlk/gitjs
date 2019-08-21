const graphContainer = document.getElementById("graph-container");

    // Instantiate the graph.
    const gitgraph = GitgraphJS.createGitgraph(graphContainer);

    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch("master");
    master.commit("Initial commit");

    // const develop = gitgraph.branch("develop");
    // develop.commit("Add TypeScript");

    // const aFeature = gitgraph.branch("a-feature");
    // aFeature
    //   .commit("Make it work")
    //   .commit("Make it right")
    //   .commit("Make it fast");


    // const newFeature = gitgraph.branch("new-feature");
    // newFeature
    //   .commit("deneme")
    //   .commit("Make it work")
    //   .commit("Make it right")
    //   .commit("Make it fast")
    //   .commit("Make it work")
    //   .commit("Make it right")
    //   .commit("Make it fast");

    // develop.merge(aFeature);
    // develop.commit("Prepare v1");

    // master.merge(develop).tag("v1.0.0");

    // develop.merge(newFeature);

    // develop
    // .commit("Add TypeScript")
    // .commit("Add TypeScript")
    // .commit("Add TypeScript");

    // master.merge(develeop).tag("v1.0.1");

