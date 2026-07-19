const { expect } = require("chai");
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("Mira skincare expert", function () {
  let window;

  before(function () {
    const knowledgePath = path.join(
      __dirname,
      "..",
      "src",
      "assets",
      "knowledge.js"
    );
    const knowledgeSource = fs.readFileSync(knowledgePath, "utf8");
    const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
      runScripts: "dangerously",
    });
    window = dom.window;
    window.eval(knowledgeSource);
  });

  it("exposes a knowledge base with topics", function () {
    expect(window.MiraKnowledge).to.be.an("object");
    expect(window.MiraKnowledge.topics).to.be.an("array").that.is.not.empty;
    expect(window.MiraKnowledge.welcome).to.be.a("string").with.length.above(20);
  });

  it("matches dryness concerns", function () {
    const match = window.miraMatchTopic(
      "My skin is dry and flaky in winter"
    );
    expect(match.id).to.equal("dry");
    expect(match.reply.lead.toLowerCase()).to.include("dry");
    expect(match.reply.points.length).to.be.at.least(3);
  });

  it("matches acne concerns", function () {
    const match = window.miraMatchTopic(
      "Hormonal acne along my chin and jaw"
    );
    expect(match.id).to.equal("acne");
  });

  it("matches ingredient layering questions", function () {
    const match = window.miraMatchTopic(
      "Can I use retinol and vitamin C together?"
    );
    expect(match.id).to.be.oneOf(["actives", "aging"]);
  });

  it("returns a helpful fallback for unknown input", function () {
    const match = window.miraMatchTopic("what's the weather in paris");
    expect(match.id).to.equal("fallback");
    expect(match.reply.points.length).to.be.at.least(2);
  });
});
