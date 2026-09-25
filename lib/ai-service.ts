export type IdeaBrief = { title: string; problem: string; users: string; valueHypothesis: string };
export type SimilarityMatch = { id: string; title: string; score: number; reasons: string[] };
export interface AIService { shapeIdea(messages: string[]): Promise<IdeaBrief>; findSimilar(brief: IdeaBrief): Promise<SimilarityMatch[]>; }
// MVP adapter. Replace this instance with a server-side OpenAI implementation;
// the UI contract stays unchanged and no client-side secret is ever required.
export const mockAIService: AIService = {
  async shapeIdea() { await new Promise((resolve) => setTimeout(resolve, 350)); return { title: "Automated contract obligation tracker", problem: "Critical obligations are tracked manually.", users: "Procurement managers and contract owners", valueHypothesis: "Reduce missed renewals and review time by 60%" }; },
  async findSimilar() { await new Promise((resolve) => setTimeout(resolve, 300)); return [{ id: "UC-1038", title: "Supplier contract intelligence", score: 87, reasons: ["Same users", "Shared data", "Similar outcome"] }]; },
};
