# AI Use Case Hub

## Product & Development Specification

## 1. Product Objective

Build a web application called **AI Use Case Hub** for Global Cyber.

The platform must allow Cyber colleagues to:

1. Describe business pain points through an AI conversational interface.
2. Convert unstructured descriptions into structured Idea records.
3. Discover existing Ideas and Use Cases.
4. Identify potentially duplicate or related ideas using semantic similarity.
5. Allow multiple Ideas to contribute to a consolidated Use Case.
6. Allow leadership to review and approve opportunities.
7. Convert approved Use Cases into PoC workspaces.
8. Capture detailed business and technical requirements.
9. Track PoC and Pilot delivery.
10. Store documentation and decision history throughout the lifecycle.
11. Provide portfolio-level visibility of Cyber AI opportunities.

Core product principle:

**Users describe problems. They are not required to design AI solutions.**

---

## 2. Primary Personas

### Submitter

Any authorised Cyber colleague.

Can:

- Submit pain points
- Review AI-generated Idea summaries
- Browse Cyber-visible Ideas and Use Cases
- Contribute to existing Ideas/Use Cases
- Track their submissions

### Contributor

A user associated with an existing Idea or Use Case.

Can provide:

- Additional business context
- Similar pain points
- Requirements
- Feedback

### Business Owner

Responsible for validating the business problem, expected outcome and business requirements.

### Reviewer / Approver

Typically authorised senior managers.

Can:

- Review submitted opportunities
- Request more information
- Approve for PoC
- Place on hold
- Reject / Not Proceed
- Record decision rationale

### Use Case Lead

Coordinates the approved Use Case through its lifecycle.

### Technical Lead / Developer

Responsible for PoC and technical delivery.

### Administrator

Manages:

- Categories
- Functions
- Roles
- Access
- Lifecycle configuration where required

---

## 3. Core Domain Model

The system MUST distinguish between an **Idea** and a **Use Case**.

### Idea

Represents an individual user's submitted pain point or opportunity.

An Idea must retain:

- Idea ID
- Original user description
- AI-generated summary
- Submitter
- Contributors
- Function
- Team
- Application/service
- Problem statement
- Current process
- Bottleneck
- Impacted users
- Frequency
- Current effort
- Expected benefit
- Proposed OMTM
- Categories
- Submission timestamp
- Status
- Related Idea IDs
- Parent Use Case ID if applicable
- AI confidence / missing-information indicators where appropriate

Original user input MUST NOT be overwritten when AI produces a structured summary.

### Use Case

Represents a consolidated opportunity that may contain one or more Ideas.

```text
Idea-001 ─┐
Idea-017 ─┼─→ UC-008
Idea-023 ─┘
```

A Use Case contains:

- Use Case ID
- Title
- Consolidated problem statement
- Functions impacted
- Categories
- Linked Ideas
- Contributors
- Business Owner
- Use Case Lead
- Sponsor / Approver
- Technical Lead
- Developer(s)
- Expected Benefit
- OMTM
- Baseline
- Target
- Status
- Requirements
- PoC information
- Pilot information
- Documents
- Decisions
- Activity history
- Visibility settings

Ideas MUST remain as independent records after being linked to a Use Case.

---

## 4. Lifecycle

Primary Use Case lifecycle:

**Submitted → Under Review → Approved for PoC → Requirements → PoC → PoC Evaluation → Pilot → Scale / Production**

Alternative states:

- More Information Required
- On Hold
- Not Proceeding
- Archived

Every state transition must capture:

- Previous status
- New status
- User
- Timestamp
- Optional/required rationale depending on transition

---

## 5. Homepage

The Homepage is the primary entry point. It should prioritise simplicity rather than presenting users with a traditional dashboard.

### Hero Section

Display:

**What problem would you like to solve?**

Supporting text:

> Tell us about a repetitive, manual or frustrating part of your work. You don't need to know how AI should solve it — just tell us the problem.

Primary CTA:

**Describe a Pain Point**

This opens the AI Intake experience.

---

## 6. Explore Existing Ideas

Homepage must display existing Cyber-visible Ideas and Use Cases.

### Search

Semantic and keyword search.

### Function Filters

- SOC
- Cyber Resilience
- IAM
- Network Security
- Cloud Security
- Vulnerability Management
- Data Security

Functions must be configurable rather than hard-coded.

### Category Filters

- Automation
- Investigation & Triage
- Knowledge & Search
- Reporting
- Data Analysis
- Decision Support
- Self-Service
- Monitoring & Detection
- Workflow Optimisation

Categories must support multiple selections and be configurable. One Use Case may belong to multiple Functions and Categories.

---

## 7. Use Case Card

Each public card should show approximately:

- Title
- Function(s)
- Category tags
- Short problem statement
- OMTM where available
- Number of contributing teams
- Number of contributors
- Lifecycle status

Actions:

- **View Use Case**
- **I Have This Problem Too**

Avoid exposing detailed technical information on cards.

---

## 8. AI Intake Experience

Do NOT implement the submission experience primarily as a long structured form. The primary interaction should be conversational.

The user enters a natural-language description of their pain point.

> “Every time an application team asks us to create a segmentation policy, our engineers manually analyse traffic, work out the required flows and create the policy. It can take several days and requires significant SME involvement.”

AI should extract structured information and may ask follow-up questions when material information is missing, for example:

- How frequently does this happen?
- Approximately how much effort does it require?
- Who is impacted?
- What would a successful outcome look like?

Avoid turning the chatbot into a sequential questionnaire. Only ask questions that materially improve the Use Case.

---

## 9. Structured AI Output

AI should generate a draft containing:

- Suggested Title
- Function
- Team
- Application
- Problem Statement
- Current Process
- Key Bottleneck
- Users Impacted
- Frequency
- Current Effort
- Expected Benefit
- Suggested OMTM
- Potential AI Opportunity
- Suggested Categories

Display the draft to the user with actions:

- **Confirm & Submit**
- **Edit**

The user must confirm the structured information before final submission. AI-generated content must remain distinguishable from user-confirmed content where required for auditability.

---

## 10. Similarity / Duplicate Detection

Before final submission, perform semantic similarity against existing Ideas and Use Cases. Do not rely exclusively on exact keyword matching.

Return likely related records. AI should explain:

- What is similar
- What is different
- Whether the new submission contains additional scope

Example:

**Existing Use Case:** AI-Assisted Alert Investigation

**Similarity:** Both aim to reduce manual analyst investigation.

**Difference:** The new submission introduces cross-application impact correlation, which is not currently captured.

Provide:

- **Contribute to Existing Use Case**
- **Continue as New Idea**
- **Compare in More Detail**

AI must NOT automatically merge records without user/reviewer confirmation.

---

## 11. Contribution Model

When the user selects **I Have This Problem Too**, allow them to explain how their experience relates to or differs from the existing use case.

AI summarises the contribution. Store:

- Contributor
- Function/team
- Original contribution
- AI summary
- Date
- Additional requirement
- Expected benefit where applicable

This data should increase the measurable organisational reach of the Use Case.

---

## 12. Idea Consolidation

Reviewers may associate multiple Ideas with one Use Case. Never delete the source Ideas.

Maintain Idea → Use Case relationships and preserve:

- Original submitter
- Original description
- Contribution
- Timestamp
- Source function
- Audit history

A consolidated Use Case becomes the canonical delivery object.

---

## 13. Leadership Review Dashboard

Show pipeline metrics such as:

- New Ideas
- Under Review
- Approved for PoC
- PoC
- Pilot
- Delivered / Scaled
- Not Proceeding

Reviewer view should prioritise:

- Problem
- Functions affected
- Number of contributors
- Organisational reach
- Current effort
- Expected benefit
- OMTM
- Dependencies
- Risk
- Feasibility information where available

Actions:

- **Approve for PoC**
- **Request More Information**
- **Hold**
- **Not Proceed**

Every decision requires audit history.

---

## 14. Ownership Model

Do not use one generic Owner field. Support:

- **Contributor(s):** Original Idea submitters and additional contributors.
- **Business Owner:** Responsible for the business problem and outcome.
- **Use Case Lead:** Responsible for progressing the Use Case.
- **Sponsor / Approver:** Leadership accountability.
- **Technical Lead:** Responsible for technical approach.
- **Developer(s):** Responsible for implementation.

Roles may be assigned at different lifecycle stages.

---

## 15. Approved Use Case Workspace

Once approved, the Use Case becomes a delivery workspace with navigation for:

- Overview
- Business Case
- Requirements
- Solution Design
- PoC
- Pilot
- Documents
- Decisions
- Activity

Do not create a separate disconnected project record unless technically necessary. Maintain the relationship to the original Use Case and Ideas.

---

## 16. Requirements Assistant

Provide an AI-assisted requirements workflow. AI receives approved context including:

- Original Ideas
- Contributions
- Business problem
- Business value
- OMTM
- Leadership decision

AI interacts with authorised stakeholders to capture missing requirements and generates draft sections:

- Problem Statement
- Current State
- Target State
- Personas
- Functional Requirements (`FR-001`, `FR-002`, ...)
- Non-Functional Requirements (`NFR-001`, `NFR-002`, ...), including Security, Performance, Availability, Audit, RBAC and Data residency
- Integrations
- Data Requirements
- Dependencies
- Assumptions
- Acceptance Criteria
- Out of Scope

AI-generated requirements require human review and approval. Only approved requirements should be treated as authoritative development context.

---

## 17. PoC Workspace

Capture:

- PoC hypothesis
- Scope
- Technical approach
- Success criteria
- Owner
- Developer
- Repository reference
- Environment
- Target date
- Dependencies
- Evidence
- Result

Possible evaluation:

- Successful
- Partially Successful
- Unsuccessful

The system should capture evidence supporting the result and retain the original hypothesis and criteria for auditability.

---

## 18. Pilot Workspace

The Pilot validates whether the solution creates value in a real working environment.

Capture:

- Pilot scope
- Pilot users and teams
- Start and end dates
- Baseline OMTM
- Measured OMTM
- Adoption and usage
- User feedback
- Incidents and issues
- Risks and mitigations
- Recommendation

Final recommendations:

- Scale / Production
- Extend Pilot
- Return to PoC
- Stop

Where possible, show the measurable **Before → After** result.

---

## 19. Permissions and Visibility

Use a layered permissions model.

### Cyber-Wide Metadata

Available to authorised Cyber users:

- Title
- Problem statement
- Function and categories
- Expected benefit
- OMTM
- Status
- Contributors
- Business Owner

### Restricted Workspace Content

Restricted to relevant project members, reviewers and stakeholders:

- Detailed requirements
- Architecture and technical design
- Integration details
- Data details
- PoC and Pilot evidence
- Working documents

### Sensitive Content

Support additional document-level restrictions for highly sensitive Cyber information. Search, AI retrieval, exports and notifications must respect the same permissions.

---

## 20. Audit and Decision History

Maintain an immutable or append-only history for material actions, including:

- Idea submission and edits
- AI-generated and user-confirmed versions
- Contributions
- Idea-to-Use-Case links
- Ownership changes
- Status transitions
- Review decisions and rationale
- Requirements approval
- Permission changes
- PoC and Pilot outcomes

Each event must record the actor, timestamp, action and affected record.

---

## 21. Search and Portfolio Insights

Search must support keyword and semantic discovery while respecting permissions.

Portfolio reporting should provide:

- Number of pain points submitted
- Number of consolidated Use Cases
- Pipeline by lifecycle stage
- Recurring pain-point themes
- Functions and teams affected
- Potential effort or capacity released
- PoC-to-Pilot and Pilot-to-Scale conversion
- OMTM improvement where measured

Avoid introducing a single AI-generated value score until its weighting and governance are agreed. Prefer transparent evidence such as impact, reach, effort, risk, feasibility and OMTM.

---

## 22. AI Behaviour and Guardrails

AI must:

- Help users articulate problems before proposing solutions.
- Ask only material follow-up questions.
- Identify assumptions and missing information.
- Preserve original user input.
- Require user confirmation before submission.
- Explain similarity recommendations.
- Never merge records automatically.
- Avoid presenting inferred information as confirmed fact.
- Respect record and document permissions in all retrieval and generation.
- Mark generated content and retain provenance where auditability requires it.

AI outputs are drafts until confirmed or approved by the appropriate human role.

---

## 23. Non-Functional Requirements

The implementation must provide:

- Enterprise authentication and role-based access control
- Encryption in transit and at rest
- Audit logging
- Accessible and responsive user experience
- Configurable Functions and Categories
- Secure document handling
- Data retention and deletion controls
- Monitoring and operational logging
- Graceful handling of AI service failure
- Protection against unauthorised data retrieval through AI prompts
- Performance suitable for interactive search and conversational intake

Exact enterprise standards, data residency requirements and retention periods must be confirmed before production release.

---

## 24. MVP Scope

The first release should include:

1. Authentication and core roles.
2. Conversational pain-point intake.
3. Structured Idea generation and user confirmation.
4. Idea and Use Case records as separate entities.
5. Homepage discovery, search and filters.
6. Similarity suggestions with user choice.
7. Contributions and Idea-to-Use-Case linking.
8. Leadership review and decision history.
9. Basic approved Use Case workspace.
10. Layered visibility and audit history.

Requirements Assistant, advanced portfolio analytics, document-level permissions and full Pilot reporting may follow in later increments if necessary.

---

## 25. Acceptance Criteria

The product is acceptable when:

- An authorised user can describe a pain point conversationally and confirm a structured Idea before submission.
- Original input and AI-generated content are both retained.
- Users can browse and filter Cyber-visible Ideas and Use Cases.
- The system suggests similar records and explains similarities and differences.
- A user can contribute to an existing Use Case or continue with a separate Idea.
- Reviewers can consolidate Ideas without deleting source records.
- Reviewers can record lifecycle decisions with rationale and audit history.
- An approved Use Case exposes a controlled delivery workspace.
- Roles and permissions prevent unauthorised access to detailed project information.
- Requirements, PoC and Pilot outcomes can be traced back to the originating Ideas and contributors.
- OMTM baseline, target and measured outcomes can be recorded and compared.

---

## 26. Primary Information Architecture

Keep the top-level product navigation to five entries:

**Home | Submit a Pain Point | Use Cases | My Use Cases | Leadership Dashboard**

Within a Use Case, show the delivery lifecycle:

**Idea → Review → Requirements → PoC → Pilot → Scale**

The defining product principle remains:

**Don't ask people to design AI. Ask them to explain their work.**
