"use strict";

const _ = require("lodash");

// @see https://help.github.com/en/actions/reference/workflow-commands-for-github-actions
module.exports = function githubActionsFormatter(results, a) {
  return _.flatMap(results, (res) => {
    return res.warnings.map((warn) => {
      return [
        `${res.source}: line ${warn.line}, col ${warn.column}`,
        `::${warn.severity} file=${res.source},line=${warn.line},col=${warn.column}::${warn.text}`,
      ].join("\n");
    });
  }).join("\n");
};
